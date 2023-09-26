import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import { useState } from "react";


const NotificationSettings = () => {


  const [color, setColor] = useState('red');
  


  const handle = () => {
   
    setColor(color === 'red' ? 'green' : 'red');
  };
  return (
    <SupportedMenu title="Настройки уведомлений">
      <Button outlineColor={color} onClick={handle} margin="21px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Новые записи</Text>
      </Button>
      <Button outlineColor={color} onClick={handle} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Макс.наполненность</Text>
      </Button>
      <Button outlineColor={color} onClick={handle} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Достижение лимита</Text>
      </Button>
      <Button outlineColor={color} onClick={handle} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Начало рабочего дня</Text>
      </Button>
      <Button outlineColor={color} onClick={handle} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Выходные</Text>
      </Button>
      <Button outlineColor={color} onClick={handle} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Перерывы</Text>
      </Button>
      <Button outlineColor={color} onClick={handle} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Прочее</Text>
      </Button>
    </SupportedMenu>


  )
}

export default NotificationSettings