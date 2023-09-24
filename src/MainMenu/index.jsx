import styles from "./style.module.css"
import menu from "../Img/Menu.svg"

const MainMenu = () => {
  return (
    <div className={styles.MainMenuCont}>
      <div className={styles.MainMenuMenuTxt}>
        <p className={styles.MainMenuLogoText}>Bilee</p>
        <img src={menu} className={styles.MainMenuMenuSvg} />
      </div>
      <div className={styles.MainMenuMeetNews}>
        <p className={styles.MainMenuMeetTxt}>Привет! Это Ваше меню</p>

        <p className={styles.MainMenuNewsTxt}>Новости</p>

        <div className={styles.MainMenuAllNews}>
          <div className={styles.MainMenuBlueNews + " " + styles.NewsCard}>
            <p className={styles.MainMenuNewsFont}>
              Мы <br />
              запусти
              <br />
              лись!
            </p>
          </div>
          <div className={styles.MainMenuBrownNews + " " + styles.NewsCard}>
            <p className={styles.MainMenuNewsFont}>Скидки</p>
          </div>
          <div className={styles.MainMenuGreenNews + " " + styles.NewsCard}>
            <p className={styles.MainMenuNewsFont}>Жопа</p>
          </div>
          <div className={styles.MainMenuPinkNews + " " + styles.NewsCard}>
            <p className={styles.MainMenuNewsFont}>
              Шок
              <br />
              контент
            </p>
          </div>
        </div>

        <div className={styles.MainMenuTodayWork}>
          <div className={styles.MainMenuTodotxt}>
            <p className={styles.MainMenuTodotxt1}>
              На сегодня у Вас N записей
            </p>
            <p className={styles.MainMenuTodotxt2}>
              Заполненность{" "}
              <span className={styles.MainMenuChangeClr}>N%(-n) ↓</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.MainMenuBtnCont}>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnBlue}>
          Карточка сотрудника
        </button>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnWhite}>
          Предприятие
        </button>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnWhite}>
          Записи
        </button>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnWhite}>
          Настройки
        </button>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnWhite}>
          Услуги
        </button>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnWhite}>
          Сотрудники
        </button>
        <button className={styles.MainMenuBtn + " " + styles.MainMenuBtnBlue}>
          Подписка
        </button>
      </div>
    </div>
  )
}
export default MainMenu
