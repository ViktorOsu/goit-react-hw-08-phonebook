// export const Home = () => {
//   return <p>Home</p>;
// };

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };
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
