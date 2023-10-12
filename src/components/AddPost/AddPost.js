import Header from "../../shared/Header/Header"
import { ADD_POST } from "../../helpers/constants"
import GeneralInfoForm from "./GeneralInfoForm"
import CurrentInfoForm from "./CurrentInfoForm"




const AddPost = () => {
    return (
        <div style={{ width: '100%', background: '#f4f4f4' }}>
            <Header icon={true} title={ADD_POST} />
            <GeneralInfoForm />
            <CurrentInfoForm />
        </div>
    )
}

export default AddPost