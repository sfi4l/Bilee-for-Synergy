import { useInitData } from "@vkruglikov/react-telegram-web-app"
import MainMenu from "./Menus/MainMenu/index"
import Themes, { ThemeContext } from "./Themes"
import Menu from "./Menus/Menu"

const App = () => {
  const [initData, _] = useInitData()

  const theme = Themes.light

  return (
    <ThemeContext.Provider value={theme}>
      {/* <MainMenu /> */}
      <Menu title={initData}>
        
      </Menu>
    </ThemeContext.Provider>
  )
}

export default App
