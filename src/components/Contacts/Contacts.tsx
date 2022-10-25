import React from 'react'
import s from './Contacts.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2>Контакты</h2>
                    <form className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols={30} rows={10}/>
                        <button>Отправить</button>
                    </form>
            </div>
        </div>
    )
}

