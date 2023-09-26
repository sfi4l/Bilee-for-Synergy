import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import { useState } from "react";


const NotificationSettings = () => {
  const [buttonColors, setButtonColors] = useState(['green', 'red', 'red', 'green', 'green', 'green', 'green']);

  const handle = (index) => {
    const newColors = [...buttonColors];
    newColors[index] = newColors[index] === 'red' ? 'green' : 'red';
    setButtonColors(newColors);
  };

  return (
    <SupportedMenu title="Настройки уведомлений">
      <Button outlineColor={buttonColors[0]} onClick={() => handle(0)} margin="21px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Новые записи</Text>
      </Button>
      <Button outlineColor={buttonColors[1]} onClick={() => handle(1)} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Макс.наполненность</Text>
      </Button>
      <Button outlineColor={buttonColors[2]} onClick={() => handle(2)} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Достижение лимита</Text>
      </Button>
      <Button outlineColor={buttonColors[3]} onClick={() => handle(3)} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Начало рабочего дня</Text>
      </Button>
      <Button outlineColor={buttonColors[4]} onClick={() => handle(4)} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Выходные</Text>
      </Button>
      <Button outlineColor={buttonColors[5]} onClick={() => handle(5)} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Перерывы</Text>
      </Button>
      <Button outlineColor={buttonColors[6]} onClick={() => handle(6)} margin="12px 0px 0px 0px" height="60px">
        <Text weight="400" size="24px">Прочее</Text>
      </Button>
    </SupportedMenu>
  );
};

export default NotificationSettings;