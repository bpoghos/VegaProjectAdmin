import Categories from "./Categories"
import List from "./List"
import PostsHeader from "./PostsHeader/PostsHeader"

const PostPage = () => {
    return(
        <div style={{width: '100%',background: '#000'}}>
            <PostsHeader />
            <Categories />
            <List />
        </div>
    )
}

export default PostPage