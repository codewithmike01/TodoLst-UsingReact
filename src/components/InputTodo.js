import React from 'react';
import propTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

export default function InputTodo(props) {
  const { title } = props;
  const { textChange } = props;
  const { submit } = props;

  return (
    <div>
      <form className="input-todo" onSubmit={(e) => submit(e, { title })}>
        <input
          type="text"
          placeholder="Add todo..."
          value={title}
          onChange={(e) => textChange(e)}
        />
        <button type="submit">
          <FaPlusCircle />
        </button>
      </form>
    </div>
  );
}

InputTodo.propTypes = {
  title: propTypes.string.isRequired,
  textChange: propTypes.func.isRequired,
  submit: propTypes.func.isRequired,
};
