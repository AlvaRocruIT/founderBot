import { motion } from "motion/react";
import { MessageSquare, Sparkles, Zap } from "lucide-react";

export function ChatbotPreview() {
  return (
    <section className="relative px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Chat Interface Preview */}
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-700/50 bg-slate-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-slate-400">Chatbot Activo</span>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-8 space-y-4 min-h-[400px] flex flex-col justify-center">
              {/* Bot message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl rounded-tl-sm px-5 py-3 border border-slate-700/50">
                    <p className="text-slate-200">
                      ¡Hola! Soy tu asistente inteligente. ¿En qué puedo ayudarte hoy para impulsar tu emprendimiento?
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* User message */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 justify-end"
              >
                <div className="flex-1 flex justify-end">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl rounded-tr-sm px-5 py-3 shadow-lg shadow-blue-500/30 max-w-md">
                    <p className="text-white">
                      Necesito encontrar fondos concursables para mi startup
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-slate-300" />
                </div>
              </motion.div>

              {/* Bot response with typing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl rounded-tl-sm px-5 py-3 border border-slate-700/50">
                    <p className="text-slate-200">
                      ¡Perfecto! Te he encontrado 3 fondos concursables que se ajustan a tu perfil. Aquí están las mejores opciones disponibles...
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input area */}
            <div className="px-6 py-4 border-t border-slate-700/50 bg-slate-900/50">
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl px-4 py-3 border border-slate-700/50">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  disabled
                  className="flex-1 bg-transparent text-slate-300 placeholder-slate-500 outline-none"
                />
                <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
                  <Sparkles className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
