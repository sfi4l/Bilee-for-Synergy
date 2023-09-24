import { createContext } from "react"

const Themes = {
  light: {
    logo: "#1D5CFF",
    red: "#FF0000",
    green: "#00DC7D",
    neutral: "#000000",
    secondary_neutral: "#6C6C6C",
    accent: "#0066FF",
    anti_neutral: "#FFFFFF"
  },
  dark: {
    logo: "#3FC1F8",
    red: "#FF0000",
    green: "#00DC7D",
    neutral: "#FFFFFF",
    secondary_neutral: "#6C6C6C",
    accent: "#0066FF",
    anti_neutral: "#000000"
  }
}

export default Themes

export const ThemeContext = createContext(Themes.light)
