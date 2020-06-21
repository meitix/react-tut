import React from 'react';

export default function CommentItem(props) {
    return (
        <div className="row">
            <div className="col-2">
                <img width="100%" className="responsive-img" src="/images/user.png" alt="user avatar" />
            </div>
            <div className="col-8">
                <h3 className="heading">{props.author}</h3>
                {props.text}
            </div>
        </div>
    )
}
