import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// import { useData } from './hooks/useData';

export const Header = () => {
  // useData();
  return (
    <>
      <header className={styles.header}>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          Главная
        </NavLink>
        <NavLink
          to={'/chart'}
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          График
        </NavLink>
      </header>
    </>
  );
};
