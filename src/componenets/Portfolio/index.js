import React, {useState} from 'react';

function Portfolio({}) {

    const [projects] = useState([
        {
            name: 'Penny For Your Thoughts',
            description: 'Full stack social netowrk application'
        },
        {
            name: 'Where My Money At',
            description: 'Budget tracker app that utilizes mongo'
        },
        {
            name: 'Team Profile Generator',
            description: 'a profile generator that utilizes node and SQL'
        }
    ]);

    return (
        <div>
            {projects.map(project => (
                <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Portfolio