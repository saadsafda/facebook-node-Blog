import React from 'react'

const Stories = () => {
    const [state, setState] = React.useState([
        { id: 1, image: '/images/profile.jpg', name: 'Saad Development' },
        { id: 2, image: '/images/fawad2.jpg', name: 'php Development' },
        { id: 3, image: '/images/fawad3.jpg', name: 'react netive Development' },
        { id: 4, image: '/images/fawad4.jpg', name: 'nade js Development' },
    ])
    return (
        <div className="stories">
            {state.map(story => (
                <div className="stories__col" key={story.id}>
                    <div className="stories__body">
                        <img src={story.image} ait="stories" />
                        <div className="stories__body-overlay">
                            <div className="stories__body-overlay-img">
                                <img src={story.image} ait="user image" />
                            </div>
                            <div className="stories__body-name">
                                {story.name}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stories
