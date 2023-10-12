import Categories from "./Categories"
import List from "./List"
import Header from "../../shared/Header/Header"
import { POSTS } from "../../helpers/constants"

const PostsPage = () => {
    return(
        <div style={{width: '100%',background: '#000'}}>
            <Header icon={true} title={POSTS}/>
            <Categories />
            <List />
        </div>
    )
}

export default PostsPage