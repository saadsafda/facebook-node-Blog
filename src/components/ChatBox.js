import React from 'react'
import { FaPhone, FaRegWindowClose, FaVideo } from 'react-icons/fa'

const ChatBox = (props) => {
    const closeChat = () => {
        props.closeChat();
    }
    return (
        <>
            {props.state ? (<div className="chat">
                <div className="chat__header">
                    <div className="chat__first">
                        <div className="chat__header-img">
                            <img src={props.current.image ? props.current.image : ''} />
                        </div>
                        <div className="chat__header-name">{props.current.name ? props.current.name : ''} </div>
                    </div>
                    <div className="chat__second">
                        <FaVideo className="chat__header-icons" />
                        <FaPhone className="chat__header-icons" />
                        <FaRegWindowClose className="chat__header-icons" onClick={closeChat} />
                    </div>
                </div>
                <div className="chat__body">
                    <div className="chat__left">
                        <p className="msg">
                            Pakistan, officially the Islamic Republic
                    </p>
                    </div>
                    <div className="chat__right">
                        <p className="msg">
                            Pakistan, officially the Islamic Republic
                    </p>
                    </div>
                    <div className="chat__left">
                        <p className="msg">
                            Pakistan, officially the Islamic
                    </p>
                    </div>
                    <div className="chat__right">
                        <p className="msg">
                            Pakistan, officially the Islamic Republic jafdgt shsbdvf
                    </p>
                    </div>
                </div>
                <div className="chat__footer">
                    <input type="text" className="chat__input" placeholder="Aa" />
                </div>
            </div>) : ''}

        </>
    )
}

export default ChatBox
