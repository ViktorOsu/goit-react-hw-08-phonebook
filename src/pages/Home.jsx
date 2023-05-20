import s from './Home.module.css';

export const Home = () => {
  return (
    <div className={s.homeContainer}>
      <h1 className={s.homeTitle}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
