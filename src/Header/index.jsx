import styles from "./style.module.css"
import menu from "../Img/Menu.svg"

const Header = () => {
    return(
    <div className={styles.MainMenuCont}>
        <div className={styles.MainMenuMenuTxt}>
                <p className={styles.MainMenuLogoText}>Bilee</p>
                <img src={menu} className={styles.MainMenuMenuSvg} />
            </div>
        </div>
    )
}
export default Header