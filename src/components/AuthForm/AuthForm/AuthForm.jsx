import { useState } from 'react';

export const AuthForm = ({ onSubmit, submitTitle, inputsName }) => {
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  const [form, setForm] = useState(inputsName);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(loginUser(form));
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(inputsName).map(el => {
        return (
          <label htmlFor="" key={el}>
            <p>{el}</p>
            <input
              type="text"
              name={el}
              value={form[el]}
              onChange={handleChange}
              placeholder={`Enter ${el}...`}
            />
          </label>
        );
      })}
      {/* <label htmlFor="">
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name..."
        />
      </label>
      <label htmlFor="">
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email..."
        />
      </label>
      <label htmlFor="">
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password..."
        />
      </label> */}
      <button type="submit">{submitTitle}</button>
    </form>
  );
};
