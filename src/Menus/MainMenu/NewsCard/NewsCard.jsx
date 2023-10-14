import "./NewsCard.css"
import Text from "../../../Primitives/Text/Text"
import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../../../Themes"
import { useWebApp } from "@vkruglikov/react-telegram-web-app"

const NewsCard = ({ placeholder, text, url, color, angle }) => {
  const theme = useContext(ThemeContext)
  const { openTelegramLink } = useWebApp()

  return (
    <motion.div
      className="NewsCard"
      initial={{
        "--angle": placeholder ? `0deg` : `${angle}deg`,
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
      onClick={() => openTelegramLink(url)}
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
