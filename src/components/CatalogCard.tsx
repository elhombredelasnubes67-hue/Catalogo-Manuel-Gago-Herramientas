import type { CatalogItem } from '../data/catalog';

interface CatalogCardProps {
  item: CatalogItem;
  onClick: () => void;
  featured?: boolean;
}

export default function CatalogCard({ item, onClick, featured }: CatalogCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200'
          : 'bg-white border border-stone-200'
      }`}
    >
      {/* Image/Emoji Area */}
      <div className={`relative h-48 flex items-center justify-center ${
        featured
          ? 'bg-gradient-to-br from-amber-100 to-orange-100'
          : 'bg-gradient-to-br from-stone-100 to-stone-50'
      }`}>
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {item.image}
        </span>
        {featured && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            ★ Destacado
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            item.category === 'herramientas'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-purple-100 text-purple-700'
          }`}>
            {item.category === 'herramientas' ? '🔧 Herramienta' : '🏺 Artefacto'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-stone-800 text-lg mb-1 group-hover:text-amber-700 transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-stone-500 mb-3">{item.subcategory}</p>
        <p className="text-sm text-stone-600 line-clamp-2 mb-4">
          {item.description}
        </p>
        <div className="flex items-center justify-between text-xs text-stone-400">
          <span className="flex items-center gap-1">
            📅 {item.year}
          </span>
          <span className={`px-2 py-0.5 rounded-full ${
            item.condition === 'Excelente' ? 'bg-green-100 text-green-700' :
            item.condition === 'Muy bueno' ? 'bg-emerald-100 text-emerald-700' :
            item.condition === 'Bueno' ? 'bg-yellow-100 text-yellow-700' :
            'bg-stone-100 text-stone-600'
          }`}>
            {item.condition}
          </span>
        </div>
      </div>
    </div>
  );
}
