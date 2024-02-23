import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthorNav';
import s from '../Styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/Author/author-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
