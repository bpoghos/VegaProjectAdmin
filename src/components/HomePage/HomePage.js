
import { VEGA_PROJECT_ADMIN } from "../../helpers/constants"
import Header from "../../shared"
import Main from "./Main/Main"

const HomePage = () => {
return (
    <div style={{width: '100%', height: '100vh', background: '#000'}}>
        <Header icon={false} title={VEGA_PROJECT_ADMIN}/>
        <Main />
    </div>
)
} 

export default HomePage