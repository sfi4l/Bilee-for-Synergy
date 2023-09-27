import "./Popup.css"
import { AnimatePresence, motion, usePresence } from "framer-motion"

const Popup = ({ children, isVisible }) => {
  return (
    <motion.div
      layout
      className="Popup"
      initial={{
        y: "100%",
      }}
      animate={{
        y: 0,
        height: "100%"
      }}
      exit={{
        y: "100%"
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.25
      }}
    >
      <motion.div className="MenuContainer">{children}</motion.div>
    </motion.div>
  )
}

export default Popup
