import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import Menu from "../Menu/Menu"
import "./NotFoundMenu.css"
import Magnifier from "../../Img/nothing-found.svg"
import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"

const NotFoundMenu = () => {

    return (
        <Menu>
            <div className="MagnifierContainer">
                <ThemedIcon icon={Magnifier} className="Magnifier" />
                <Text size="24px" weight="600" className="MainText" align="center">Вы ещё не добавили ни одной услуги</Text>
                <Button highlightColor={"accent"} className="MainBtn">Добавить</Button>
            </div>
        </Menu>
    )
}

export default NotFoundMenu