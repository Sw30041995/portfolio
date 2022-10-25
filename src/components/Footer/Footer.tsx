import React from 'react'
import s from './Footer.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Иван Ильясов</h2>
                <div className={s.icons}>
                    <div className={s.iconItem}/>
                    <div className={s.iconItem}/>
                    <div className={s.iconItem}/>
                    <div className={s.iconItem}/>
                </div>
                <h5>&#xa9; 2022 Все права защищены</h5>
            </div>
        </footer>
    )
}