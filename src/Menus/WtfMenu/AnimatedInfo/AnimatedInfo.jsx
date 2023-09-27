import { motion } from "framer-motion"
import React from "react"

const AnimatedInfo = ({ children }) => {
  const variants = {
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: i * 0.1,
        duration: 0.2,
        ease: "easeIn"
      }
    }),
    hidden: { x: "-50%", opacity: 0.5 }
  }

  return (
    <>
      {React.Children.map(children, (el, i) => (
        <motion.div
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {el}
        </motion.div>
      ))}
    </>
  )
}

export default AnimatedInfo
