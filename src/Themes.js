import { createContext } from "react"

const Themes = {
  light: {
    logo_color: "#1D5CFF",
    red: "#FF0000",
    green: "#00DC7D",
    text_color: "#000000",
    hint_color: "#6C6C6C",
    accent: "#0066FF",
    button_text_color: "#ffffff",
    bg_color: "#ffffff",
    main_menu_gradient: "#ececec",
    icons_filter: "none"  
  },
  dark: {
    logo_color: "#3FC1F8",
    red: "#FF0000",
    green: "#00DC7D",
    text_color: "#ffffff",
    hint_color: "#aaaaaa",
    accent: "#0066FF",
    button_text_color: "#000000",
    bg_color: "#212121",
    main_menu_gradient: "#00000080",
    icons_filter: "invert(100%)"
  }
}

export default Themes

export const ThemeContext = createContext(Themes.light)
