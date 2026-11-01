import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 text-white py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/12bbb2af-3c6e-4db1-84d4-f2f6bb0425c6/_result.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">⚒️</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🧭</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="text-5xl">🏛️</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Catálogo de
            <span className="block text-amber-400 mt-2">Herramientas & Artefactos</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Colección privada de Manuel Gago. Un recorrido por la historia de la técnica,
            desde herramientas artesanales hasta instrumentos científicos de épocas pasadas.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-amber-500/25"
            >
              Explorar Catálogo
              <span>→</span>
            </a>
            <a
              href="#destacados"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-lg transition-all border border-white/20"
            >
              Ver Destacados
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45C96 40 192 30 288 33C384 36 480 52 576 58C672 64 768 60 864 52C960 44 1056 32 1152 30C1248 28 1344 36 1392 40L1440 44V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="#fafaf9"/>
        </svg>
      </div>
    </section>
  );
}
