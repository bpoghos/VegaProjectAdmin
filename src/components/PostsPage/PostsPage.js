import Categories from "./Categories"
import List from "./List"
import Header from "../../shared/Header/Header"
import { POSTS } from "../../helpers/constants"
import { useEffect } from "react"

const PostsPage = () => {
    async function fetching() {
        const data = await fetch('http://localhost:27017')
        const res = await data.json()
        console.log(res);
    }


    useEffect(() => {
        fetching()
    }, [])

    return (
        <div style={{ width: '100%', background: '#000' }}>
            <Header icon={true} title={POSTS} />
            <Categories />
            <List />



        </div>
    )
}

export default PostsPage