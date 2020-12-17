import React, { useState } from 'react'

const SideBar = () => {
    const [state, setState] = useState([
        { id: 1, image: '/images/fawad1.jpg', name: 'Flutter Development' },
        { id: 2, image: '/images/fawad2.jpg', name: 'php Development' },
        { id: 3, image: '/images/fawad3.jpg', name: 'react netive Development' },
        { id: 4, image: '/images/fawad4.jpg', name: 'nade js Development' },
        { id: 5, image: '/images/imran1.jpg', name: 'vue js Development' },
        { id: 6, image: '/images/profile.jpg', name: 'React Development' },
    ])
    return (
        <div className="sidebar">
            {state.map(info => (
                <div className="sidebar__list" key={info.id}>
                    <div className="sidebar__list-img">
                        <img src={info.image} alt="group images" />
                    </div>
                    <div className="sidebar__list-name">{info.name}</div>
                </div>
            ))}

        </div>
    )
}

export default SideBar
