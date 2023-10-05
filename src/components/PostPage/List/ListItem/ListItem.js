import classes from './list-item.module.css'
import { FaPencil, FaTrash } from 'react-icons/fa6'

const ListItem = () => {
    return (
        <div className={classes.item}>
            <div className={classes.itemImage}>
                <img
                    style={{ height: '100%', borderRadius: '10px', }}
                    src='https://damassets.autodesk.net/content/dam/autodesk/www/solutions/architectural-drawing/what-is-architecture-drawing-thumb-1172x660.jpg'
                    alt='list'>
                </img>
            </div>
            <div className={classes.generalInfoBox}>
                <div className={classes.categoryBox}>
                    <p className={classes.category}><strong>Category:</strong> Houses</p>
                </div>
                <div className={classes.titleBox}>
                    <p className={classes.title}><strong>Title:</strong> Vahagni Taghamas</p>
                </div>
                <div className={classes.descriptionBox}>
                    <p className={classes.description}><strong>Description:</strong> Vahagni Taghamas dasdsd dasfjgjfa fjasfja rhejrhser eshrueshr bnjfks jbs jfkj esbfkj sbefkj sebkfj beskjf beskjf bes fsf ds fjsdb fkjsdb fksjdb fkjdsb fs fsdj fkjsd bksfbbdskfjbdskfjdsbfkjdbsfk jbdj bks jbdfk jbsd ...</p>
                </div>
            </div>
            <div className={classes.currentInfoBox}>
                <div className={classes.dateBox}>
                    <p className={classes.date}><strong>Date:</strong> 2010</p>
                </div>
                <div className={classes.locationBox}>
                    <p className={classes.location}><strong>Location:</strong> Vahagni Taghamas</p>
                </div>
                <div className={classes.floorAreaBox}>
                    <p className={classes.floorArea}><strong>Floor area:</strong> 200&#13217;</p>
                </div>
                <div className={classes.clientBox}>
                    <p className={classes.client}><strong>Client:</strong> Vahagni</p>
                </div>
                <div className={classes.architectsBox}>
                    <p className={classes.architects}><strong>Architects:</strong> Semyon Barseghyan, Semyon Barseghyan, Semyon Barseghyan, Semyon Barseghyan </p>
                </div>
            </div>
            <div className={classes.btnBox}>
                <button className={classes.editBtn}><FaPencil /></button>
                <button className={classes.deleteBtn}><FaTrash/></button>
            </div>
        </div>
    )
}

export default ListItem