import React from 'react'
import s from './Main.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.greetings}>
                    <span>Всем привет</span>
                    <h1>Меня зовут Иван Ильясов</h1>
                    <p>Я Frontend React разработчик.</p>
                </div>
                <div className={s.photo}>
                    <img
                        src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
                        alt="Моя фотография"/>
                </div>
            </div>
        </div>
    )
}