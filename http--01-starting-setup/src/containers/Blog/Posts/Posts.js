import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import axiosInstance from '../../../axios';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        console.log(this.props)
        axiosInstance.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ladav'
                    };
                })

                this.setState({ posts: updatedPosts });
                //console.log(response);
            }).catch(error => {
                //this.setState({error: true});
                console.log(error);
            });
    };

    postSelectionHandler = (id) => {
        this.props.history.push({ pathname: '/' +id });
        // this.props.history.push('/' + id);
    };

    render() {
        let posts = <p style={{ textAlign: 'center' }}>something went wrong!</p>;
        if (!this.state.error) {
            console.log(this.props)
            posts = this.state.posts
                .map(post => (
                    //<NavLink to={"/" + post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectionHandler(post.id)} />
                    //</NavLink>
                ));
        }

        return (<section className="Posts">
            {posts}
        </section>);
    };
}

export default Posts;