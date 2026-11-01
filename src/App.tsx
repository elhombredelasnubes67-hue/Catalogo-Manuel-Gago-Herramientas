import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { catalogItems, categories, conditions } from './data/catalog';
import type { CatalogItem } from './data/catalog';
import CatalogCard from './components/CatalogCard';
import ItemModal from './components/ItemModal';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [conditionFilter, setConditionFilter] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'year'>('name');

  const filteredItems = useMemo(() => {
    let items = [...catalogItems];

    // Filter by category
    if (activeCategory !== 'todos') {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      items = items.filter(item =>
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.material.toLowerCase().includes(term) ||
        item.origin.toLowerCase().includes(term) ||
        item.subcategory.toLowerCase().includes(term)
      );
    }

    // Filter by condition
    if (conditionFilter) {
      items = items.filter(item => item.condition === conditionFilter);
    }

    // Sort
    items.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.year.localeCompare(b.year);
    });

    return items;
  }, [searchTerm, activeCategory, conditionFilter, sortBy]);

  const featuredItems = useMemo(() => {
    return catalogItems.filter(item => item.featured);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-stone-900 text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              <div>
                <h1 className="text-lg font-bold tracking-tight">Manuel Gago</h1>
                <p className="text-xs text-stone-400">Herramientas & Artefactos</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#catalogo" className="text-stone-300 hover:text-white transition-colors">Catálogo</a>
              <a href="#destacados" className="text-stone-300 hover:text-white transition-colors">Destacados</a>
              <a href="#contacto" className="text-stone-300 hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats */}
      <StatsSection />

      {/* Featured Items */}
      <section id="destacados" className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-3">Piezas Destacadas</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Una selección de las piezas más singulares de nuestra colección
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CatalogCard item={item} onClick={() => setSelectedItem(item)} featured />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog */}
      <section id="catalogo" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-3">Catálogo Completo</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Explore nuestra colección completa de herramientas y artefactos históricos
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, material, origen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                  showFilters
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-xl border border-stone-200 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Condición</label>
                      <select
                        value={conditionFilter}
                        onChange={(e) => setConditionFilter(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Todas las condiciones</option>
                        {conditions.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Ordenar por</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'name' | 'year')}
                        className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="name">Nombre (A-Z)</option>
                        <option value="year">Año (antiguo primero)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-stone-800 text-white shadow-md'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-stone-500 mb-6">
            Mostrando {filteredItems.length} de {catalogItems.length} piezas
          </p>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <CatalogCard item={item} onClick={() => setSelectedItem(item)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <span className="text-5xl mb-4 block">🔍</span>
              <p className="text-stone-500 text-lg">No se encontraron resultados</p>
              <p className="text-stone-400 text-sm mt-2">Pruebe con otros términos de búsqueda</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">¿Interesado en la colección?</h2>
            <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
              Para consultas sobre piezas, tasaciones o colaboraciones, no dude en contactar con Manuel Gago.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:manuel.gago@ejemplo.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors"
              >
                ✉️ Contactar por Email
              </a>
              <a
                href="tel:+34600000000"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white rounded-xl font-medium transition-colors"
              >
                📞 Llamar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 Manuel Gago — Catálogo de Herramientas y Artefactos</p>
          <p className="text-xs mt-2 text-stone-500">Colección privada. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
