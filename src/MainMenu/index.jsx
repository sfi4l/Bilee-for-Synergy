import styles from './style.module.css'
import menu from "../Img/Menu.svg"

    
const MainMenu = () => {
    return(
    <div className={styles.MainMenuCont}>
        <div className={styles.MainMenuContUp}>

            <div className={styles.MainMenuMenuTxt}>
                <p className={styles.MainMenuLogoText}>Bilee</p>
                <img src={menu} className={styles.MainMenuMenuSvg} />
            </div>
            <div className={styles.MainMenuMeetNews}>
                <p className={styles.MainMenuMeetTxt}>Привет! Это Ваше меню</p>

                <p className={styles.MainMenuNewsTxt}>Новости</p>

                <div className={styles.MainMenuAllNews}>
                <div className={styles.MainMenuBlueNews}><p className={styles.MainMenuNewsFont}>Мы <br/>запусти<br/>лись!</p></div>
                <div className={styles.MainMenuBrownNews}><p className={styles.MainMenuNewsFont}>Скидки</p></div>
                <div className={styles.MainMenuGreenNews}><p className={styles.MainMenuNewsFont}>Жопа</p></div>
                <div className={styles.MainMenuPinkNews}><p className={styles.MainMenuNewsFont}>Star<br/>Gems</p></div>
                </div>

                <div className={styles.MainMenuTodayWork}>
                    <div className={styles.MainMenuTodotxt}>
                        <p className={styles.MainMenuTodotxt1}>На сегодня у Вас N записей</p>
                        <p className={styles.MainMenuTodotxt2}>Заполненность <span className={styles.MainMenuChangeClr}>N%(-n) ↓</span> </p>
                    </div>    
                </div>
            </div>
            
            <div className={styles.MainMenuBtnCont}>
                <div>
                    <button className={styles.MainMenuBtnBlue}>Карточка сотрудника</button>
                    <button className={styles.MainMenuBtnDf}>Предприятие</button> 
                </div>
            <div className={styles.MainMenuBtnFlex}>
                <button className={styles.MainMenuBtnDfMini}>Записи</button>
                <button className={styles.MainMenuBtnDfMini}>Настройки</button>
                <button className={styles.MainMenuBtnDfMini}>Услуги</button>
                <button className={styles.MainMenuBtnDfMini}>Сотрудники</button>
            </div>

            <button className={styles.MainMenuBtnBlue}>Подписка</button>


            </div>



        </div>
    </div>
    )



}
export default MainMenu
