import { useTranslation } from "i18nano";
import Button from "../../Primitives/Button/Button";
import SupportedMenu from "../SupportedMenu/SupportedMenu";
import "./SettingsMenu.css";
import { useNavigate } from "react-router-dom";

const SettingsMenu = () => {
  const t = useTranslation();
  const navigate = useNavigate();
  return (
    <SupportedMenu title={t("menu.settings.title")}>
      <Button
        outlineColor="accent_color"
        onClick={() => navigate("/branches")}
        margin="40px 0px 0px 0px"
      >
        {t("menu.settings.filials")}
      </Button>

      <Button
        outlineColor="accent_color"
        onClick={() => navigate("/content")}
        margin="7px 0px 0px 0px"
      >
        {t("menu.settings.content")}
      </Button>
      <Button
        outlineColor="accent_color"
        onClick={() => navigate("/settings/notifications")}
        margin="7px 0px 0px 0px"
      >
        {t("menu.settings.notifications")}
      </Button>
      <Button
        outlineColor="accent_color"
        onClick={() => navigate("/settings/logs")}
        margin="7px 0px 0px 0px"
      >
        {t("menu.settings.logging")}
      </Button>
    </SupportedMenu>
  );
};

export default SettingsMenu;
