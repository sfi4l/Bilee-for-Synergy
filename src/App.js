import { useInitData } from "@vkruglikov/react-telegram-web-app"
import MainMenu from "../src/MainMenu/index"
import Debug from "../src/Debugging/debug"
import './App.css';
import CardEmployee from "./CardSotrudnika";
import Header from "./Header/index";

function App() {
  // const rawInitData = useInitData()

  // if (!rawInitData) return <MainMenu/>

  // return <Debug/>
  return <MainMenu />
}

export default App;
