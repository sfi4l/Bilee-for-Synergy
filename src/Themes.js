import { createContext } from "react"

const Themes = {
  light: {
    logo_color: "#1D5CFF",
    red: "#FF0000",
    green: "#00DC7D",
    neutral: "#000000",
    text_color: "#000000",
    text_on_accent_color: "#000000",
    hint_color: "#6C6C6C",
    accent_color: "#0066FF",
    button_text_color: "#ffffff",
    bg_color: "#ffffff",
    main_menu_gradient: "#ececec",
    chart_background: "#dfdfdf",
    hint_background: "#6C6C6C"
  },
  dark: {
    logo_color: "#3FC1F8",
    red: "#FF0000",
    green: "#00DC7D",
    neutral: "#ffffff",
    text_color: "#ffffff",
    text_on_accent_color: "#000000",
    hint_color: "#aaaaaa",
    accent_color: "#0066FF",
    button_text_color: "#ffffff",
    bg_color: "#212121",
    main_menu_gradient: "#00000080",
    chart_background: "#303030",
    hint_background: "#6C6C6CC0"
  }
}

export default Themes

export const ThemeContext = createContext(Themes.light)
