import React from "react";
import CommentItem from "./item";

export function CommentsList({ comments }) {
  return (
    <ul class="list-group list-group-flush">
      {comments.map((comment, index) => (
        <li class="list-group-item" key={index}>
          <CommentItem {...comment} />
        </li>
      ))}
    </ul>
  );
}
