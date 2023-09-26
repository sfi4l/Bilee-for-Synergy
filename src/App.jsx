import "./App.css"
import { useInitData, useThemeParams, useExpand } from "@vkruglikov/react-telegram-web-app"
import MainMenu from "./Menus/MainMenu/MainMenu"
import Themes, { ThemeContext } from "./Themes"
import EmployeeMenu from "./Menus/EmployeeMenu/EmployeeMenu"
import NotFoundMenu from "./Menus/NotFoundMenu/NotFoundMenu"
import FilterMenu from "./Menus/FilterMenu/FilterMenu"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Settings from "./Menus/Settings/Settings"
import NotificationSettings from "./Menus/NotificationSettings/NotificationSettings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />
  }, {
    path: "/employee",
    element: <EmployeeMenu />
  }, {
    path: "/filter",
    element: <FilterMenu />
  }, {
    path: "/notfoundfilial",
    element: <NotFoundMenu title="Вы ещё не добавили ни одного филиала"/>
  }, {
    path: "/settings",
    element: <Settings/>
  }, {
    path: "/settings/notification",
    element: <NotificationSettings/>
  }, {
    path: "/notfoundservice",
    element: <NotFoundMenu nav="/filter" title="Вы ещё не добавили ни одной услуги"/>
  }
])

const App = () => {
  const [colorScheme, themeTG] = useThemeParams()
  const [initData, initDataRaw] = useInitData()
  const [isExpanded, expand] = useExpand()
  let theme = Themes[colorScheme]
  // theme = Themes["dark"]

  if (initDataRaw) {
    theme = {
      ...theme,
      ...themeTG
    }

    theme.accent_color = themeTG.button_color
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
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
