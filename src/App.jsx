import { useInitData, useThemeParams } from "@vkruglikov/react-telegram-web-app"
import MainMenu from "./Menus/MainMenu/index"
import Themes, { ThemeContext } from "./Themes"
import Menu from "./Menus/Menu"

const App = () => {
  const [colorScheme, _] = useThemeParams()

  const theme = Themes.light

  return (
    <ThemeContext.Provider value={theme}>
      {/* <MainMenu /> */}
      <Menu title={colorScheme}>

      </Menu>
    </ThemeContext.Provider>
  )
}

export default App
