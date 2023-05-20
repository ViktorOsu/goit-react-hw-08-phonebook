import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../AuthForm.module.css';

export const AuthForm = ({ onSubmit, submitTitle, inputsName }) => {
  const [form, setForm] = useState(inputsName);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(form);
  };
  const hasEmptyInp = Object.values(form).some(el => el === '');
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {Object.keys(inputsName).map(el => {
        return (
          <label className={s.form_label} htmlFor="" key={el}>
            <p>{el}</p>
            <input
              className={s.form_input}
              type="text"
              name={el}
              value={form[el]}
              onChange={handleChange}
              placeholder={`Enter ${el}...`}
            />
          </label>
        );
      })}
      <button className={s.form_button} type="submit" disabled={hasEmptyInp}>
        {submitTitle}
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitTitle: PropTypes.string.isRequired,
  inputsName: PropTypes.objectOf(PropTypes.string).isRequired,
};
