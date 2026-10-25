import { motion } from 'framer-motion';
import { catalogItems } from '../data/catalog';

export default function StatsSection() {
  const totalItems = catalogItems.length;
  const herramientas = catalogItems.filter(i => i.category === 'herramientas').length;
  const artefactos = catalogItems.filter(i => i.category === 'artefactos').length;
  const countries = new Set(catalogItems.map(i => i.origin.split(',')[0].trim())).size;

  const stats = [
    { label: 'Piezas Totales', value: totalItems, icon: '📦' },
    { label: 'Herramientas', value: herramientas, icon: '🔧' },
    { label: 'Artefactos', value: artefactos, icon: '🏺' },
    { label: 'Orígenes', value: countries, icon: '🌍' },
  ];

  return (
    <section className="py-12 bg-stone-50 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-stone-100"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <p className="text-3xl font-bold text-stone-800">{stat.value}</p>
              <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
