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
          "--bg-color": theme.bg_color,
          "--text-color": theme.text_ёcolor,
          "--neutral-color": theme.neutral,
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
