import React from 'react'
import s from './Project.module.css'
import {CommonDataType} from "../../Skills/Skills";

type PropsType = {
    project: CommonDataType
}

export const Project = ({project}: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.projectImage}>
                <a className={s.projectButton}>Посмотреть</a>
            </div>
            <h3>{project.title}</h3>
            <span>{project.description}</span>
        </div>
    )
}