import Text from "../../Primitives/Text/Text"
import "./Popup.css"
import { AnimatePresence, motion, usePresence } from "framer-motion"

const Popup = ({ children, title, titleMargin }) => {
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
      <motion.div className="MenuContainer">
        <Text size="24px" align="center" margin={titleMargin ?? "20px 0px 25px 0px"}>
          {title}
        </Text>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Popup
