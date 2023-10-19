import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { createBrowserRouter, useLocation, useOutlet } from "react-router-dom"
import BranchAddMenu from "./Menus/BranchesMenu/BranchAddMenu/BranchAddMenu"
import BranchMenuRoute, { branchMenuLoader } from "./Menus/BranchesMenu/BranchMenu/BranchMenuRoute"
import BranchesMenuRoute, { branchesLoader } from "./Menus/BranchesMenu/BranchesMenuRoute"
import CompanyMenu from "./Menus/CompanyMenu/CompanyMenu"
import ContentMenu from "./Menus/ContentMenu/ContentMenu"
import EmployeeMenu from "./Menus/EmployeeMenu/EmployeeMenu"
import MainMenu from "./Menus/MainMenu/MainMenu"
import NotFoundMenu from "./Menus/NotFoundMenu/NotFoundMenu"
import NotificationSettingsMenu from "./Menus/NotificationSettingsMenu/NotificationSettingsMenu"
import RecordEditMenu, {
  recordLoader
} from "./Menus/RecordEditMenu/RecordEditMenu"
import RecordsMenu from "./Menus/RecordsMenu/RecordsMenu"
import ServicesMenu from "./Menus/ServicesMenu/ServicesMenu"
import SettingsMenu from "./Menus/SettingsMenu/SettingsMenu"
import LogsMenu from "./Menus/LogsMenu/LogsMenu"
import EmployeesMenu from "./Menus/EmployeesMenu/EmployeesMenu"

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
        element: <ServicesMenu />
      },
      {
        path: "/settings",
        element: <SettingsMenu />
      },
      {
        path: "/settings/notifications",
        element: <NotificationSettingsMenu />
      },
      {
        path: "/notfoundservice",
        element: <NotFoundMenu nav="/services" title="services" />
      },
      {
        id: "branches",
        path: "/branches",
        shouldRevalidate: ({ currentUrl }) =>
          currentUrl.pathname === "/branches/add",
        element: <AnimatedOutlet />,
        loader: branchesLoader,
        children: [
          {
            path: "",
            element: <BranchesMenuRoute />
          },
          {
            path: ":id",
            element: <BranchMenuRoute />,
            loader: branchMenuLoader
          },
          {
            path: "add",
            element: <BranchAddMenu />
          }
        ]
      },
      {
        path: "/company",
        element: <CompanyMenu />
      },
      {
        path: "/records",
        element: <RecordsMenu />
      },
      {
        path: "/records/:recordId",
        element: <RecordEditMenu />,
        loader: recordLoader
      },
      {
        path: "/content",
        element: <ContentMenu />
      },
      {
        path: "/settings/logs",
        element: <LogsMenu/>,
      },
      {
        path: "/Employees",
        element: <EmployeesMenu/>,
      },
    ]
  }
])
