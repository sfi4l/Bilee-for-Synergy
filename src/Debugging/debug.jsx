import { MainButton, useThemeParams } from "@vkruglikov/react-telegram-web-app"
import styles from "./style.module.css"

const Debug = () => {
  const [colorScheme, themeParams] = useThemeParams()

  return <div className={styles.main}>
    <MainButton text="Test" color={themeParams.button_color} />
    <p className="styles.text">Hello</p>
  </div>
}

export default Debug