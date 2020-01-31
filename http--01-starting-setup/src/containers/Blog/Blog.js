import React, { Component } from 'react';
import axiosInstance from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
            error: false
        };
    }

    componentDidMount() {
        axiosInstance.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                    author:'Ladav'
                    };
                })
                
                this.setState({ posts: updatedPosts });
                //console.log(response);
            }).catch(error => {
                this.setState({error: true});
                // console.log(error);
            });          
    };

    postSelectionHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>something went wrong!</p>;
        if(!this.state.error) {
            posts = this.state.posts
            .map(post => (
                <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectionHandler(post.id)} />
            ));
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;