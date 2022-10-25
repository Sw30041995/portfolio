import React from 'react'
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill"
import sContainer from '../../common/styles/Container.module.css'

export type CommonDataType = {
    id: number
    title: string
    img: string
    description: string
}

export const Skills = () => {

    const skills: CommonDataType[] = [
        {id: 1, title: 'HTML', img: '', description: 'LoremLorem'},
        {id: 2, title: 'CSS', img: '', description: 'Lorem'},
        {id: 3, title: 'JAVASCRIPT', img: '', description: 'Lorem'},
        {id: 4, title: 'REACT', img: '', description: 'Lorem'},
        {id: 5, title: 'TYPESCRIPT', img: '', description: 'Lorem'},
        {id: 6, title: 'REDUX', img: '', description: 'Lorem'}
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Скиллы</h2>
                <div className={s.skills}>
                    {skills.map(s => <Skill key={s.id} skill={s}/>)}
                </div>
            </div>
        </div>
    )
}
