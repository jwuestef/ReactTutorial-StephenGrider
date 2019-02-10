import React from 'react'
import { connect } from 'react-redux'

import UserHeader from './UserHeader'

// import { fetchPosts } from '../actions'
import { fetchPostsAndUsers } from '../actions'



class PostList extends React.Component {


    componentDidMount() {
        // this.props.fetchPosts()
        this.props.fetchPostsAndUsers()
    }


    renderList() {
        return this.props.posts.map(eachPost => {
            return (
                <div className="item" key={eachPost.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{eachPost.title}</h2>
                            <p>{eachPost.body}</p>
                        </div>
                        <UserHeader userId={eachPost.userId} />
                    </div>
                </div>
            )
        })
    }


    render() {
        // console.log(this.props.posts)
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }

}



// We will want the 'posts' part of the state
const mapStateToProps = (state) => {
    return { posts: state.postsFromReducer }
}





export default connect(mapStateToProps, {
    // fetchPosts: fetchPosts,
    fetchPostsAndUsers: fetchPostsAndUsers
})(PostList)
