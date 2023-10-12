import classes from './main.module.css'
import Svg from '../../assets/svg/add'
import { Link } from 'react-router-dom'


const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.buttonsContainer}>
                <Link to='add-post'>
                    <div className={classes.plusButton}>
                        {Svg.addSvg()}
                    </div>
                </Link>
                <Link to='posts'>
                <div className={classes.filesButton}>
                    {Svg.filesBtn()}
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Main