import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Tu asistente inteligente para emprender
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight"
          >
            Prepárate
            <br />
            para postular a tu próxima
            <br />
            fuente
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4"
          >
            Sabemos que emprender es difícil,
            <br />
            pero nadie dijo por qué tenía que serlo.
            <span className="inline-block ml-2 text-2xl">💥</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-60 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
