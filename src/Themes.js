import { createContext } from "react"

const Themes = {
  light: {
    logo_color: "#1D5CFF",
    red: "#FF0000",
    green: "#00DC7D",
    text_color: "#000000",
    hint_color: "#6C6C6C",
    accent: "#0066FF",
    button_text_color: "#FFFFFF",
    bg_color: "#ffffff",
    main_menu_gradient: "#ececec"
  },
  dark: {
    logo_color: "#3FC1F8",
    red: "#FF0000",
    green: "#00DC7D",
    text_color: "#FFFFFF",
    hint_color: "#E6E6E6",
    accent: "#0066FF",
    button_text_color: "#000000",
    bg_color: "#222222",
    main_menu_gradient: "#00000080"
  }
}

export default Themes

export const ThemeContext = createContext(Themes.light)
