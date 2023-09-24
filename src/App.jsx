import "./App.css"
import { useInitData, useThemeParams } from "@vkruglikov/react-telegram-web-app"
import MainMenu from "./Menus/MainMenu/index"
import Themes, { ThemeContext } from "./Themes"

const App = () => {
  const [colorScheme, themeTG] = useThemeParams()

  let theme = {
    ...Themes[colorScheme],
    ...themeTG
  }

  return (
    <ThemeContext.Provider value={theme}>
    <div className="App" style={{
        "--logo-color": theme.logo_color,
        "--bg-color": theme.bg_color,
        "--text-color": theme.text_color,
        "--hint-color": theme.hint_color,
        "--red": theme.red
      }}>
        <MainMenu />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
