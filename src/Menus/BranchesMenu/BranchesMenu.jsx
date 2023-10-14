import "./BranchesMenu.css"
import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "i18nano"
import BranchCard from "./BranchCard/BranchCard"

const BranchesMenu = () => {
  const t = useTranslation()
  // const navigate = useNavigate()
  const branches = [
    {
      id: "1",
      name: "ул. Павловский тракт, 123",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: true,
      services: []
    },
    {
      id: "2",
      name: "Пушкина, 2",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: false,
      services: []
    },
    {
      id: "3",
      name: "Пушкина, 1",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: false,
      services: []
    },
    {
      id: "4",
      name: "Пушкина, 2",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: true,
      services: []
    },
    {
      id: "5",
      name: "Пушкина, 2",
      description: "От метро налево, потом направо, потом сюда",
      city: "Москва",
      start_time: "08:00",
      end_time: "18:00",
      break_time: ["13:00-13:30", "16:00-16:30"],
      work_days: ["1", "2", "3", "4", "5"],
      clients_limit: 10,
      avalible: true,
      services: []
    }
  ]

  const no_branches = branches.length === 0

  return (
    <SupportedMenu
      title={no_branches ? undefined : t("menu.branches.title")}
      subtitle={
        no_branches
          ? undefined
          : t("menu.branches.subtitle", { branches: `${branches.length}` })
      }
    >
      {no_branches && (
        <NotFoundIcon
          title={t(`menu.branches.no_branches`)}
          margin="63px 0px 57px 0px"
        />
      )}

      <div className="BranchesContainer">
        {branches.map(({ id, name, city, start_time, end_time, avalible }) => (
          <BranchCard
            key={id}
            title={`${city}, ${name}`}
            subtitle={`${start_time} - ${end_time}`}
            type={avalible ? 1 : 2}
          />
        ))}
      </div>

      {!no_branches && (
        <Button outlineColor="accent_color" margin="13px 0px 6px 0px">{t("menu.branches.load_more")}</Button>
      )}

      <Button highlightColor="accent_color">{t(`menu.branches.add`)}</Button>
    </SupportedMenu>
  )
}

export default BranchesMenu
