import EmployeesMiniCard from "../../Elements/EmployeesMiniCard/EmployeesMiniCard"
import LogCard from "../../Elements/LogCard/LogCard"
import TextCard from "../../Primitives/TextCard/TextCard"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import avatar from "../../Img/avatar.png"
import "./EmployeesMenu.css"

const EmployeesMenu = () => {
  return(
    <SupportedMenu>
      <div className="EmployeesMenuContainer">
      <EmployeesMiniCard add={avatar} title={"Nikolay Kalamandi"} type={1} subtitle={"Барбер,100 услуг"}/>
      <EmployeesMiniCard add={avatar} title={"Nikolay Kalamandi"} type={3} subtitle={"Барбер,100 услуг"}/>
      <EmployeesMiniCard add={avatar} title={"Nikolay Kalamandi"} type={4} subtitle={"Администратор"}/>
      <EmployeesMiniCard add={avatar} title={"Nikolay Kalamandi"} show={1} type={2} subtitle={"Это вы."}/>
      </div>
    </SupportedMenu>
   
  )
}

export default EmployeesMenu