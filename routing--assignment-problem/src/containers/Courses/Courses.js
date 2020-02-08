import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        load: null
    }

    clickHandler = (id, title) => {
        this.props.history.replace({
            pathname: '/courses/' + id,
            search: '?title=' + title
        });
        this.setState({load: id});
    }

    render() {
        let course = null;
        if(this.state.load !== null) {
            const index = this.state.load - 1;
            course = (<Route 
            path={this.props.match.url + "/:id"}
            component={Course} />)
        }

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <article className="Course" onClick={() => this.clickHandler(course.id, course.title)} key={course.id}>{course.title}</article>
                            );
                        })
                    }
                </section>
                {course}
            </div>
        );
    }
}

export default Courses;