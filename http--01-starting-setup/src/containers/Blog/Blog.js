import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import Navigation from '../../components/Navigation/Navigation';
import './Blog.css';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');     // dynamic import
});

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
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <Navigation />
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={AsyncNewPost} />
                    {/* <Route render={() => <h1>404</h1>} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
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