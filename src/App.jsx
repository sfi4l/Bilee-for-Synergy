import "./App.css"
import {
  useInitData,
  useThemeParams,
  useExpand
} from "@vkruglikov/react-telegram-web-app"
import Themes, { ThemeContext } from "./Themes"
import { RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { router } from "./Routing"
import ConfirmPopup from "./Popup/ConfirmPopup/ConfirmPopup"
import { useTheme } from "./Hooks/useTheme"
import { useEffect, useState } from "react"

export let setPopup

const App = () => {
  const theme = useTheme()
  // const theme = Themes.dark
  const [isExpanded, expand] = useExpand()

  useEffect(() => {
    expand()
  }, [])

  const [popup, setPopupState] = useState(undefined)
  setPopup = setPopupState

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
          "--neutral-color": theme.neutral,
          "--accent-color": theme.accent_color,
          "--main-menu-gradient": theme.main_menu_gradient,
          "pointerEvents": popup ? "none" : "auto",
          "height": popup ? "100%" : "auto"
        }}
      >
        <AnimatePresence>{popup}</AnimatePresence>
        <AnimatePresence mode="wait">
          <RouterProvider router={router}/>
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
