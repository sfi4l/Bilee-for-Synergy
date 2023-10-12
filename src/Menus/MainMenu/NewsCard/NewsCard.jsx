import "./NewsCard.css"
import Text from "../../../Primitives/Text/Text"
import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../../../Themes"

const NewsCard = ({ placeholder, text, color, angle }) => {
  const theme = useContext(ThemeContext)

  return (
    <motion.div
      className="NewsCard"
      initial={{
        "--angle": `0deg`,
        "--color": placeholder ? `${theme.text_color}60` : color
      }}
      animate={{
        "--angle": placeholder ? "360deg" : `${angle}deg`,
        "--color": placeholder ? `${theme.text_color}60` : color
      }}
      transition={
        placeholder
          ? { duration: 2, ease: "easeOut", repeat: "infinite" }
          : { duration: 0.5, ease: "easeIn" }
      }
    >
      <Text
        margin="0px 12px 0px 5px"
        height="57px"
        width="67px"
        className="NewsCardText"
      >
        {text}
      </Text>
    </motion.div>
  )
}

export default NewsCard
