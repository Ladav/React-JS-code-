import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import Navigation from '../../components/Navigation/Navigation';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
            error: false
        };
    };

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Navigation />
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
/* <section>
    <FullPost id={this.state.selectedPostId}/>
</section>
<section>
    <NewPost />
</section> */