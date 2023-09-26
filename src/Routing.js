import MainMenu from "./Menus/MainMenu/MainMenu"
import EmployeeMenu from "./Menus/EmployeeMenu/EmployeeMenu"
import NotFoundMenu from "./Menus/NotFoundMenu/NotFoundMenu"
import FilterMenu from "./Menus/FilterMenu/FilterMenu"
import {
  createBrowserRouter,
  useLocation,
  useOutlet
} from "react-router-dom"
import Settings from "./Menus/Settings/Settings"
import NotificationSettings from "./Menus/NotificationSettings/NotificationSettings"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const AnimatedOutlet = () => {
  const outlet = useOutlet()
  const [outletState] = useState(outlet)

  return <>{outletState}</>
}

const RootContainer = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
      >
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  )
}

export const router = createBrowserRouter([
  {
    element: <RootContainer />,
    children: [
      {
        index: true,
        path: "/",
        element: <MainMenu />
      },
      {
        path: "/employee",
        element: <EmployeeMenu />
      },
      {
        path: "/filter",
        element: <FilterMenu />
      },
      {
        path: "/notfound",
        element: <NotFoundMenu title="Вы ещё не добавили ни одного филиала" />
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/settings/notification",
        element: <NotificationSettings />
      }
    ]
  }
])