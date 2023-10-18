import Header from "../../shared/Header/Header"
import { ADD_POST } from "../../helpers/constants"
import Form from "./Form"




const AddPost = () => {
    return (
        <div style={{ width: '100%', background: '#f4f4f4' }}>
            <Header icon={true} title={ADD_POST} />
            <Form />
        </div>
    )
}

export default AddPost