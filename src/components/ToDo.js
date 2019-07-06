import React, { Component } from 'react';

const ToDo = props => {
    const { deleteTodo } = props;
      return (
        <li>
          <input
            type="checkbox"
            checked={ props.isCompleted }
            onChange={ props.toggleComplete }
          />
          <span>{ props.description }</span>
          <button onClick={this.deleteTodo}>Delete</button>
        </li>
      );
  }

export default ToDo;


