import { useState } from 'react';
export const AuthForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

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
      <label htmlFor="">
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
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
