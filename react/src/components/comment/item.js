import React from "react";


export function CommentItem(props) {
    return <div className="row">
        <div className="col-2">
            <img width="100%" className="responsive-img" src="/images/user.png" />
        </div>
        <div className="col-10">
            <h3 className="heading">{props.author}</h3>
            <p>{props.text}</p>
        </div>
    </div>
}