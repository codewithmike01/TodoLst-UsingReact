/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem(props) {
  const { change } = props;
  const { deleted } = props;
  const { Click } = props;
  const { setUpdate } = props;
  const { keyDone } = props;
  const { idTag } = props;

  const completedStyle = {
    color: '#595959',
    opacity: 0.5,
    textDecoration: 'line-through',
  };

  return (
    <div>
      {props.value.map((todo) => (
        <li key={todo.id} style={todo.completed ? completedStyle : null}>
          <div
            type="text"
            style={todo.id === idTag ? { display: 'none' } : null}
            onDoubleClick={() => Click(`${todo.id}`)}
            className="todo-item"
          >
            <div className="item">
              <input
                type="checkbox"
                onChange={() => change(todo.id)}
                defaultChecked={todo.completed}
              />

              <p>{todo.title}</p>
            </div>
            <div className="delete">
              <button
                type="button"
                onClick={() => {
                  deleted(`${todo.id}`);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </div>
          <input
            type="text"
            value={todo.title}
            style={todo.id === idTag ? null : { display: 'none' }}
            className="textInput"
            onChange={(e) => {
              setUpdate(e.target.value, todo.id);
            }}
            onKeyDown={(e) => {
              keyDone(e);
            }}
          />
        </li>
      ))}
    </div>
  );
}

TodoItem.propTypes = {
  value: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
  Click: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  keyDone: PropTypes.func.isRequired,
  idTag: PropTypes.number.isRequired,
};
