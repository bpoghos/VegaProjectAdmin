import { FaHouse } from 'react-icons/fa6';
import classes from './header.module.css'


const Header = ({icon, title}) => {
  return (
    <header className={classes.header}>
      {icon ?
      <div className={classes.homeBtnBox}>
        <button className={classes.homeBtn}><FaHouse /></button>
      </div>
      : null}
      <h1 className={classes.title}>{title}</h1>
    </header>
  );
}

export default Header