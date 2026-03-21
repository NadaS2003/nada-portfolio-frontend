import { motion } from "motion/react";
import { Code2 } from "lucide-react";

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4"
        >
          <Code2 className="w-10 h-10 text-white" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          DevNet
        </motion.div>
      </div>
    </motion.div>
  );
}
