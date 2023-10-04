import classes from './list-item.module.css'

const ListItem = () => {
    return (
        <div className={classes.item}>
            <div className={classes.itemImage}>
                <img
                    style={{ width: '100%', borderRadius: '10px' }}
                    src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
                    alt='list'>
                </img>
            </div>
        </div>
    )
}

export default ListItem