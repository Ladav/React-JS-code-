import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import axiosInstance from '../../../axios';
import FullPost from '../FullPost/FullPost';
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
        this.props.history.push({ pathname: '/posts/' + id });
        // this.props.history.push('/posts/' + id);
    };

    render() {
        console.log('posts')
        let posts = <p style={{ textAlign: 'center' }}>something went wrong!</p>;
        if (!this.state.error) {
            // console.log(this.props)
            posts = this.state.posts
                .map(post => (
                    //<NavLink to={"/posts/" + post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectionHandler(post.id)} />
                    //</NavLink>
                ));
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost} />
            </div>
        );
    };
}

export default Posts;