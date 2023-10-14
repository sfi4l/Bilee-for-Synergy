import "./App.css"
import {
  useInitData,
  useThemeParams,
  useExpand,
  useWebApp
} from "@vkruglikov/react-telegram-web-app"
import Themes, { ThemeContext } from "./Themes"
import { RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { router } from "./Routing"
import { useTheme } from "./Hooks/useTheme"
import { Suspense, useEffect, useState } from "react"
import { TranslationProvider } from "i18nano"

export let setPopup

const translations = {
  en: () => import("./I18n/en.json"),
  ru: () => import("./I18n/ru.json")
}

const App = () => {
  const [initData, _] = useInitData()
  const language = initData?.user?.language_code ?? "ru"
  const theme = useTheme()
  // const theme = Themes.dark
  const [isExpanded, expand] = useExpand()

  useEffect(() => {
    expand()
  }, [])

  const [popup, setPopupState] = useState(undefined)
  setPopup = setPopupState

  return (
    <TranslationProvider translations={translations} language={language}>
      <ThemeContext.Provider value={theme}>
        <div
          className="App"
          style={{
            "--bg-color": theme.bg_color,
            "--text-color": theme.text_color,
            "--neutral-color": theme.neutral,
            "--main-menu-gradient": theme.main_menu_gradient,
            pointerEvents: popup ? "none" : "auto"
          }}
        >
          <AnimatePresence>{popup}</AnimatePresence>
          <AnimatePresence mode="wait">
            <RouterProvider router={router} />
          </AnimatePresence>
        </div>
      </ThemeContext.Provider>
    </TranslationProvider>
  )
}

export default App
