import React from 'react'
import {CommonDataType} from "../Skills";
import s from './Skill.module.css'

type PropsType = {
    skill: CommonDataType
}

export const Skill = ({skill}: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.skillIcon}/>
            <h3>{skill.title}</h3>
            <span>{skill.description}</span>
        </div>
    )
}

