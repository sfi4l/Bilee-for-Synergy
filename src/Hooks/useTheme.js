import { useInitData, useThemeParams } from "@vkruglikov/react-telegram-web-app"
import Themes from "../Themes"
import { IN_TELEGRAM } from "../App"

export const useTheme = () => {
  const [colorScheme, themeTG] = useThemeParams()
  let theme = Themes[colorScheme]

  if (IN_TELEGRAM) {
    theme = {
      ...theme,
      ...themeTG
    }

    theme.accent_color = themeTG.button_color
  }

  return theme
}
