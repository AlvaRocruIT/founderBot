import { motion, AnimatePresence } from "motion/react";
import { X, Info, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

interface UserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: (name: string, email: string) => void;
}

export function UserInfoModal({ isOpen, onClose, onAccept }: UserInfoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleAccept = () => {
    if (name && email) {
      onAccept(name, email);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-3xl blur-xl" />

              {/* Modal content */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-slate-700/80 transition-colors z-10"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>

                <div className="p-8">
                  {/* Title */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      Solo para comenzar, te pediremos tu nombre y correo electrónico
                    </h2>
                  </div>

                  {/* Form */}
                  <div className="space-y-5 mb-6">
                    {/* Name input */}
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Juli@"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Correo
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Juli@correo.com"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Info section */}
                  <div className="mb-6">
                    <button
                      onClick={() => setShowInfo(!showInfo)}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-3"
                    >
                      <Info className="w-5 h-5" />
                      <span className="font-medium">¿Para qué necesitan estos datos?</span>
                      <Info className="w-5 h-5" />
                    </button>

                    <AnimatePresence>
                      {showInfo && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 space-y-3"
                        >
                          <p className="text-slate-300 text-sm leading-relaxed">
                            Este chatbot está pensado para facilitar tu experiencia de postulación a fondos concursables.
                          </p>
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <p className="text-slate-300 text-sm leading-relaxed">
                              Al registrar tu nombre y correo, nos estarás permitiendo contactarte para recoger retroalimentación y mejorar día a día.
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <p className="text-slate-300 text-sm leading-relaxed">
                              Así democratizaremos el acceso a mejores oportunidades de crecimiento. 🤝
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={handleAccept}
                      disabled={!name || !email}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-blue-500"
                    >
                      Aceptar
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 font-medium rounded-xl transition-all"
                    >
                      Volver
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
