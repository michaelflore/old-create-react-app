import React, {Component} from 'react';

class Fetching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data, isLoading: false })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.isLoading ? 
                        ( <div>Loading...</div> ) :
                        (
                            this.state.posts.map((post) => {
                                return (
                                    <li key={post.id}>{post.title}</li>
                                )
                            })
                        ) 
                    }
                </ul>
            </div>
        );
    }
}

export default Fetching;