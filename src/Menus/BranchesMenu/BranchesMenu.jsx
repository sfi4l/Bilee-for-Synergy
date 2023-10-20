import "./BranchesMenu.css"
import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import {
  Await,
  defer,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  useRouteLoaderData
} from "react-router-dom"
import { useTranslation } from "i18nano"
import BranchCard from "./BranchCard/BranchCard"
import { Suspense, useEffect, useState } from "react"

const BranchesMenu = ({ branches }) => {
  const t = useTranslation()
  const navigate = useNavigate()
  const noBranches = branches.length === 0

  return (
    <SupportedMenu
      title={noBranches ? undefined : t("menu.branches.title")}
      subtitle={
        noBranches
          ? undefined
          : t("menu.branches.subtitle", { branches: `${branches.length}` })
      }
    >
      {noBranches && (
        <NotFoundIcon
          title={t(`menu.branches.no_branches`)}
          margin="63px 0px 57px 0px"
        />
      )}

      <div className="BranchesContainer">
        {branches.map(({ id, name, city, start_time, end_time, avalible }) => (
          <BranchCard
            key={id}
            id={id}
            title={`${city}, ${name}`}
            subtitle={`${start_time} - ${end_time}`}
            type={avalible ? 1 : 2}
          />
        ))}
      </div>

     

      
    </SupportedMenu>
  )
}

export const BranchesMenuFallback = () => {
  return <SupportedMenu>Loading</SupportedMenu>
}

export default BranchesMenu
