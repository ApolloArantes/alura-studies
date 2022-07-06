import React from "react";

function List() {
    const tarefas = [{
        tasks: 'React',
        time: '02:00:00'
    }, {
        tasks: 'Javascript',
        time: '01:00:00'
    }, {
        tasks: 'Typescript',
        time: '03:00:00'
    }]
    return (
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tasks} </h3>
                        <span> {item.time} </span>
                    </li>
                ))}                
            </ul>
        </aside>
    )
}

export default List;