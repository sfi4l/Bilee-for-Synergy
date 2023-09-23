import MainMenu from "../MainMenu"
import style from "./style.module.css"
import styles from "../Header/style.module.css"
import menu from "../Img/Menu.svg"
import back from "../Img/Back.png"

const CardEmployee = () => {
    return(
        <div className={style.CardEmpCont}>
             <div className={style.CardEmpContUp}>




             <div className={style.CardEmpTxt}>
                <img src={back} className={style.CardEmpMenuSvgBck}/>
                <p className={style.CardEmpLogoText}>Bilee</p>
                <img src={menu} className={style.CardEmpMenuSvg} />
            </div> 





             </div>



        </div>
            
   
    )
}

export default CardEmployee