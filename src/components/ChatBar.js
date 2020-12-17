import React from 'react'

const ChatBar = (props) => {
    const [state, setState] = React.useState([
        { id: 1, image: '/images/fawad1.jpg', name: 'Flutter khan' },
        { id: 2, image: '/images/fawad2.jpg', name: 'daFD khan' },
        { id: 3, image: '/images/fawad3.jpg', name: 'ADSF khan' },
        { id: 4, image: '/images/fawad4.jpg', name: 'sami khan' },
        { id: 5, image: '/images/imran1.jpg', name: 'Da khan' },
        { id: 6, image: '/images/profile.jpg', name: 'saad khan' },
        { id: 7, image: '/images/imran3.jpg', name: 'shakil khan' },
        { id: 8, image: '/images/imrankhan1.jpg', name: 'ali khan' },
        { id: 9, image: '/images/imrankhan2.jpg', name: 'umer khan' },
        { id: 10, image: '/images/imrankhan3.jpg', name: 'fisel khan' },
    ]);
    const openChat = user => {
        props.openChat(user);
    }
    return (
        <div className="chatBar">
            {state.map(user => (
                <div className="chatBar__list" key={user.id} onClick={() => openChat(user)}>
                    <div className="chatBar__list-img">
                        <img src=
                            {user.image} alt="user" />
                        <span className="status"></span>
                    </div>
                    <div className="chatBar__list-name">
                        {user.name}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatBar
