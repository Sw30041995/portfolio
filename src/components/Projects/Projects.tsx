import React from 'react'
import s from './Projects.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {CommonDataType} from "../Skills/Skills";

export const Projects = () => {

    const projects: CommonDataType[] = [
        {id: 1, title: 'social network', description: 'Lorem Lorem', img: ''},
        {id: 2, title: 'todo list', description: 'Lorem Lorem', img: ''},
        {id: 3, title: 'counter', description: 'Lorem Lorem', img: ''}
        ]

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2>Мои проекты</h2>
                <div className={s.projects}>
                    {projects.map(p => <Project key={p.id} project={p}/>)}
                </div>
            </div>
        </div>
    )
}