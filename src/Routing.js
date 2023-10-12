import MainMenu, { mainMenuLoader } from "./Menus/MainMenu/MainMenu"
import EmployeeMenu from "./Menus/EmployeeMenu/EmployeeMenu"
import NotFoundMenu from "./Menus/NotFoundMenu/NotFoundMenu"
import ServicesFilterMenu from "./Menus/ServicesFilterMenu/ServicesFilterMenu"
import {
  createBrowserRouter,
  useLocation,
  useOutlet
} from "react-router-dom"
import SettingsMenu from "./Menus/SettingsMenu/SettingsMenu"
import NotificationSettingsMenu from "./Menus/NotificationSettingsMenu/NotificationSettingsMenu"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import CompanyMenu from "./Menus/CompanyMenu/CompanyMenu"
import RecordsMenu from "./Menus/RecordsMenu/RecordsMenu"
import RecordEditMenu, { recordLoader } from "./Menus/RecordEditMenu/RecordEditMenu"
import ContentMenu from "./Menus/ContentMenu/ContentMenu"

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
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
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
        path: "/services",
        element: <ServicesFilterMenu />
      },
      {
        path: "/settings",
        element: <SettingsMenu />
      },
      {
        path: "/settings/notifications",
        element: <NotificationSettingsMenu />
      }, {
        path: "/notfoundservice",
        element: <NotFoundMenu nav="/services" title="services"/>
      }, {
        path: "/notfoundbranch",
        element: <NotFoundMenu title="branch"/>
      }, {
        path: "/wtf",
        element: <CompanyMenu />
      }, {
        path: "/records",
        element: <RecordsMenu />
      }, {
        path: "/records/:recordId",
        element: <RecordEditMenu />,
        loader: recordLoader
      }, {
        path: "/content",
        element: <ContentMenu />
      }
    ]
  }
])