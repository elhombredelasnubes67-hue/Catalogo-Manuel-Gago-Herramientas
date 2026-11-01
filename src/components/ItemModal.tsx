import { X, MapPin, Calendar, Wrench, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CatalogItem } from '../data/catalog';

interface ItemModalProps {
  item: CatalogItem;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center rounded-t-3xl">
          <span className="text-8xl">{item.image}</span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-md"
          >
            <X className="w-5 h-5 text-stone-700" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
              item.category === 'herramientas'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-purple-100 text-purple-700'
            }`}>
              {item.category === 'herramientas' ? '🔧 Herramienta' : '🏺 Artefacto'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">{item.name}</h2>
          <p className="text-amber-600 font-medium mb-4">{item.subcategory}</p>

          <p className="text-stone-600 leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
              <Wrench className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Material</p>
                <p className="text-sm font-medium text-stone-700">{item.material}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
              <MapPin className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Origen</p>
                <p className="text-sm font-medium text-stone-700">{item.origin}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
              <Calendar className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Período</p>
                <p className="text-sm font-medium text-stone-700">{item.year}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
              <Shield className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Condición</p>
                <p className="text-sm font-medium text-stone-700">{item.condition}</p>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-xl font-medium transition-colors"
            >
              Cerrar
            </button>
            <a
              href="mailto:manuel.gago@ejemplo.com"
              className="flex-1 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors text-center"
            >
              Consultar pieza
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
