/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem(props) {
  const { change } = props;
  const { deleted } = props;
  const { Click } = props;

  const completedStyle = {
    color: '#595959',
    opacity: 0.5,
    textDecoration: 'line-through',
  };
  return (
    <div>
      {props.value.map((todo) => (
        <li
          key={todo.id}
          style={todo.completed ? completedStyle : null}
          className="todo-item"
        >
          <div type="text" onDoubleClick={() => Click()}>
            Hello
          </div>

          <div className="item">
            <input
              type="checkbox"
              onChange={() => change(`${todo.id}`)}
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
              Delelte
              <img src="./unknown" alt="delete icon" />
            </button>
          </div>
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
};
