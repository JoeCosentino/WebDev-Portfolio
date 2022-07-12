import React, {useState} from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Penny For Your Thoughts',
            category: 'mongo',
            description: 'A full stack social network application that utilizes JS and mongoDB'
        },
        {
            name: 'Where My Money At',
            category: 'mongo',
            description: 'A budget tracker app that utilizes webpack and PWA'
        },
        {
            name: 'Tech Me About It',
            category: 'mongo',
            description: 'a blog style site that utilizes SQL'
        },
        {
            name: 'Internet Retail Therapy',
            category: 'mongo',
            description: 'a back end application that utilizes SQL'
        }

    ])

    return (
        <div>

        </div>
    )
}

export default Project