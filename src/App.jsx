import {
  useExpand,
  useInitData
} from "@vkruglikov/react-telegram-web-app"
import { AnimatePresence } from "framer-motion"
import { TranslationProvider } from "i18nano"
import { useEffect, useState } from "react"
import { RouterProvider } from "react-router-dom"
import "./App.css"
import { useTheme } from "./Hooks/useTheme"
import { router } from "./Routing"
import { ThemeContext } from "./Themes"

export let setPopup

const translations = {
  en: () => import("./I18n/en.json"),
  ru: () => import("./I18n/ru.json")
}

export let IN_TELEGRAM = false

const App = () => {
  const [initData, initDataString] = useInitData()
  if (initDataString) IN_TELEGRAM = true
  const language = initData?.user?.language_code ?? "ru"
  const theme = useTheme()
  // const theme = Themes.dark
  const [_, expand] = useExpand()

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
