import React from 'react'
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a>Главная</a>
            <a>Скиллы</a>
            <a>Проекты</a>
            <a>Контакты</a>
        </div>
    )
}
