import { useTranslation } from "i18nano"
import Button from "../../Primitives/Button/Button"
import Popup from "../Popup/Popup"

const ConfirmPopup = ({ onConfirm, onCancel, action }) => {
  const t = useTranslation()

  return (
    <Popup
      title={t("popup.confirm.title", {
        action: t(`action.${action}`)
      })}
      titleMargin="40px 0px 47px 0px"
    >
      <Button highlightColor="accent_color" onClick={onConfirm}>
        {t("popup.confirm.confirm")}
      </Button>
      <Button
        outlineColor="accent_color"
        margin="8px 0px 0px 0px"
        onClick={onCancel}
      >
        {t("popup.confirm.cancel")}
      </Button>
    </Popup>
  )
}

export default ConfirmPopup
