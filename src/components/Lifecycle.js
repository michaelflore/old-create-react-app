import React, {Component, createRef} from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            posts: [],
            displayTimer: false,
            value: "",
            timers: []
        }
    }

    timerId = createRef(); 

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({ 
                count: this.state.count + 1, 
                posts: [...this.state.posts, "New Post"]
            });
        }, 500);
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //nextState is the state after componentDidMount()
    //     if(nextState.count % 2) {
    //         return false;
    //      } else {
    //         return true;
    //     }
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     let posts = document.getElementById("posts");

    //     return {
    //         height: posts.scrollHeight
    //     }
    // }

    //After it re-renders
    componentDidUpdate(prevProps, prevState, snapshot) {
        let posts = document.getElementById("posts");

        // console.log(`Current ${posts.scrollHeight}`)

        if(this.state.posts.length === 10) {
            clearInterval(this.timerId.current)
        }

        posts.scrollTo(0, posts.scrollHeight);
    }

    render() {
        return (
            <div>
                <Heading count={this.state.count}/>

                <div id="posts" style={{ overflow: "scroll", height: "100px", border: "1px solid lightgray"}}>
                    <ol>
                        {
                            this.state.posts.map((post, i) => {
                                    return <li key={i}>{post}</li>
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

const Heading = (props) => {
    return (
        <div>
            {props.count}
        </div>
    );
}

export default Lifecycle;