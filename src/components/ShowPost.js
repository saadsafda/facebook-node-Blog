import React from 'react'
import { FaRegCommentAlt, FaRegThumbsUp, FaShare } from 'react-icons/fa'

const Showpost = () => {
    const [state, setState] = React.useState([
        { id: 1, userImg: '/images/fawad1.jpg', name: "Saad khan", time: "2h", text: 't takes at least the entire sentence into consideration, and it does occasionally\ translate idioms and common phrases correctly.Idiomatic expressions and some phrasal verbs.', postImg: '/Images/pakistan.jpg' },
        { id: 2, userImg: '/images/fawad2.jpg', name: "Shakil khan", time: "3h", text: 't takes at least the entire sentence into consideration, and it does occasionally translate idioms and common phrases correctly.Idiomatic expressions and some phrasal verbs.', postImg: '/Images/imrankhan1.jpg' },
        { id: 3, userImg: '/images/fawad3.jpg', name: "Fawad khan", time: "6h", text: 't takes at least the entire sentence into consideration, and it does occasionally translate idioms and common phrases correctly.Idiomatic expressions and some phrasal verbs.', postImg: '/Images/imrankhan2.jpg' },
        { id: 4, userImg: '/images/fawad4.jpg', name: "imran khan", time: "10h", text: 't takes at least the entire sentence into consideration, and it does occasionally translate idioms and common phrases correctly.Idiomatic expressions and some phrasal verbs.', postImg: '/Images/imrankhan3.jpg' },
    ]);
    return (
        <div className="show">
            {state.map(post => (
                <div key={post.id} className="empty" >
                    <div className="show__header">
                        <div className="show__header-img">
                            <img src={post.userImg} alt="user" />
                        </div>
                        <div className="show__header-name">
                            {post.name}<div className="date">{post.time}</div>
                        </div>
                    </div>
                    <div className="show__body">
                        <div className="show__body-text">
                            {post.text}
                        </div>
                        <div className="show__body-img">
                            <img src={post.postImg} alt="post" />
                        </div>
                    </div>
                    <div className="show__reactions">
                        <span className="reactions">
                            <FaRegThumbsUp /><span className="reactions-text">Like</span>
                        </span>
                        <span className="reactions">
                            <FaRegCommentAlt /><span className="reactions-text">Comments</span>
                        </span>
                        <span className="reactions">
                            <FaShare /><span className="reactions-text">Share</span>
                        </span>
                    </div>
                </div>))}
        </div>
    )
}

export default Showpost
