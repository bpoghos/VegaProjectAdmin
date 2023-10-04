import classes from './main.module.css'


const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.buttonsContainer}>
                <div className={classes.plusButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M109.667 201.667C66.4545 201.667 44.8485 201.667 31.4243 188.242C18 174.818 18 153.212 18 110C18 66.7879 18 45.1819 31.4243 31.7577C44.8485 18.3333 66.4545 18.3333 109.667 18.3333C152.878 18.3333 174.485 18.3333 187.909 31.7577C201.333 45.1819 201.333 66.7879 201.333 110C201.333 153.212 201.333 174.818 187.909 188.242C174.485 201.667 152.878 201.667 109.667 201.667ZM109.667 75.625C113.463 75.625 116.542 78.7031 116.542 82.5V103.125H137.167C140.963 103.125 144.042 106.203 144.042 110C144.042 113.797 140.963 116.875 137.167 116.875H116.542V137.5C116.542 141.297 113.463 144.375 109.667 144.375C105.87 144.375 102.792 141.297 102.792 137.5V116.875H82.1667C78.3697 116.875 75.2917 113.797 75.2917 110C75.2917 106.203 78.3697 103.125 82.1667 103.125H102.792V82.5C102.792 78.7031 105.87 75.625 109.667 75.625Z" fill="#FE7D05" />
                    </svg>
                </div>
                <div className={classes.filesButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220" fill="none">
                        <path d="M87.083 18.3333C79.4891 18.3333 73.333 24.4894 73.333 32.0833V41.25C73.333 48.844 79.4891 55 87.083 55H132.916C140.51 55 146.666 48.844 146.666 41.25V32.0833C146.666 24.4894 140.51 18.3333 132.916 18.3333H87.083Z" fill="#FE7D05" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M59.5833 37.0023C48.0525 37.6492 40.7732 39.4867 35.5546 44.7053C27.5 52.7598 27.5 65.7234 27.5 91.6507V146.651C27.5 172.578 27.5 185.542 35.5546 193.596C43.6091 201.651 56.5727 201.651 82.5 201.651H137.5C163.427 201.651 176.391 201.651 184.445 193.596C192.5 185.542 192.5 172.578 192.5 146.651V91.6507C192.5 65.7234 192.5 52.7598 184.445 44.7053C179.227 39.4867 171.947 37.6492 160.417 37.0023V41.25C160.417 56.4378 148.105 68.75 132.917 68.75H87.0833C71.8955 68.75 59.5833 56.4378 59.5833 41.25V37.0023ZM64.1667 89.375C60.3697 89.375 57.2917 92.4532 57.2917 96.25C57.2917 100.047 60.3697 103.125 64.1667 103.125H68.75C72.5469 103.125 75.625 100.047 75.625 96.25C75.625 92.4532 72.5469 89.375 68.75 89.375H64.1667ZM96.25 89.375C92.4532 89.375 89.375 92.4532 89.375 96.25C89.375 100.047 92.4532 103.125 96.25 103.125H155.833C159.63 103.125 162.708 100.047 162.708 96.25C162.708 92.4532 159.63 89.375 155.833 89.375H96.25ZM64.1667 121.458C60.3697 121.458 57.2917 124.536 57.2917 128.333C57.2917 132.13 60.3697 135.208 64.1667 135.208H68.75C72.5469 135.208 75.625 132.13 75.625 128.333C75.625 124.536 72.5469 121.458 68.75 121.458H64.1667ZM96.25 121.458C92.4532 121.458 89.375 124.536 89.375 128.333C89.375 132.13 92.4532 135.208 96.25 135.208H155.833C159.63 135.208 162.708 132.13 162.708 128.333C162.708 124.536 159.63 121.458 155.833 121.458H96.25ZM64.1667 153.542C60.3697 153.542 57.2917 156.62 57.2917 160.417C57.2917 164.213 60.3697 167.292 64.1667 167.292H68.75C72.5469 167.292 75.625 164.213 75.625 160.417C75.625 156.62 72.5469 153.542 68.75 153.542H64.1667ZM96.25 153.542C92.4532 153.542 89.375 156.62 89.375 160.417C89.375 164.213 92.4532 167.292 96.25 167.292H155.833C159.63 167.292 162.708 164.213 162.708 160.417C162.708 156.62 159.63 153.542 155.833 153.542H96.25Z" fill="#FE7D05" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Main