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

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        menu: {
          main: {
            title: "Hi! This is Your menu",
            discounts: "Discounts",
            Ass: "Ass",
            wehavelaunched: "We have launched",
            shockcontent: "Shock Content",
            uhaveentries: "You have N entries for today",
            fullness: "Fullness",
            employeecard: "Employee card",
            company: "Company",
            settings: "Settings",
            service: "Services",
            employees: "Employee",
            subscription: "Subscription",
          },
          employee: {
            title: "Nikolay,your card",
            recordingisavailable: "Recording is available",
            nolimit: "No limit",
            adress: "Pushkina, 1",
            summstatistics: "Summary statistics",
            totalentries: "Total entries",
            uniqueclients: "Unique clients",
            averagecheck: "Average check",
            totalrevenue: "Total revenue",
            urservices: "Your services",
          }
        }
      }
    }
  },
  ru: {
    translation: {
      menu: {
        main: {
          title: "Привет! Это Ваше меню",
          discounts: "Скидки",
          Ass: "Жопа",
          wehavelaunched: "Мы запустились!",
          shockcontent: "Шок Контент",
          uhaveentries: "На сегодня у Вас N записей",
          fullness: "Заполненность",
          employeecard: "Карточка сотрудника",
          company: "Предприятие",
          settings: "Настройки",
          service: "Услуги",
          employees: "Сотрудники",
          subscription: "Подписка",
        },
        employee: {
          title: "Николай, Ваша карточка",
          recordingisavailable: "Запись доступна",
          nolimit: "Без лимита",
          adress: "Пушкина, 1",
          summstatistics: "Сводная статистика",
          totalentries: "Всего записей",
          uniqueclients: "Уникальных клиентов",
          averagecheck: "Средний чек",
          totalrevenue: "Общая выручка",
          urservices: "Ваши услуги",
        }
      }
    }
  },
  lng: "ru",
  fallbackLng: "ru",
});


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
          "--text-color": theme.text_color,
          "--neutral-color": theme.neutral,
          "--main-menu-gradient": theme.main_menu_gradient,
          "pointerEvents": popup ? "none" : "auto",
        }}
      >
        <AnimatePresence>{popup}</AnimatePresence>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
