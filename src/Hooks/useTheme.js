import { useInitData, useThemeParams } from "@vkruglikov/react-telegram-web-app"
import Themes from "../Themes"

export const useTheme = () => {
  const [colorScheme, themeTG] = useThemeParams()
  const [initData, initDataRaw] = useInitData()
  let theme = Themes[colorScheme]
  // theme = Themes["dark"]

  if (initDataRaw) {
    theme = {
      ...theme,
      ...themeTG
    }

    theme.accent_color = themeTG.button_color
  }

  return theme
}
