import React, { useState } from "react";

export function CreateComment(props) {
  const [state, setState] = useState({ comment: {}, errors: {} });

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid()) {
        props.onComment(state.comment);
        setState({comment: {} , errors: {}})
    } else {
        alert('Incorrect data');
    }
  };

  const formIsValid = () => {
    const errors = {};
    if(!state.comment.author) {
       errors.author = 'Name is required';
    }
    if(!state.comment.text) {
        errors.text = 'Text is required';
    }

    setState({...state, errors});
    return !(errors.author || errors.text);
  }

  const changeHandler = (event) => {
    const data = { [event.target.name]: event.target.value };
    setState({...state, comment: { ...state.comment, ...data } });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input
          onChange={changeHandler}
          value={state.comment.author || ''}
          name="author"
          type="text"
          className="form-control"
        />
        <small className="form-text text-danger">{state.errors.author}</small>
      </div>
      <div className="form-group">
        <label>Enter your review</label>
        <textarea
        value={state.comment.text || ''}
          onChange={changeHandler}
          className="form-control"
          name="text"
          rows="5"
        ></textarea>
        <small className="form-text text-danger">{state.errors.text}</small>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
