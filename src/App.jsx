import "./App.css"
import { useInitData, useThemeParams, useExpand } from "@vkruglikov/react-telegram-web-app"
import MainMenu from "./Menus/MainMenu/MainMenu"
import Themes, { ThemeContext } from "./Themes"
import EmployeeMenu from "./Menus/EmployeeMenu/EmployeeMenu"

const App = () => {
  const [colorScheme, themeTG] = useThemeParams()
  const [initData, initDataRaw] = useInitData()
  const [isExpanded, expand] = useExpand()
  let theme = Themes[colorScheme]

  if (initDataRaw) {
    theme = {
      ...theme,
      ...themeTG
    }

    theme.accent = themeTG.button_color
  }

  if (!isExpanded) expand()

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App"
        style={{
          "--logo-color": theme.logo_color,
          "--bg-color": theme.bg_color,
          "--text-color": theme.text_color,
          "--hint-color": theme.hint_color,
          "--red": theme.red,
          "--main-menu-gradient": theme.main_menu_gradient
        }}
      >
        {/* <MainMenu /> */}
        <EmployeeMenu />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
