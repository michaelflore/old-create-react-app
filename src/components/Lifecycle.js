import React, {Component} from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // count: 0,
            // posts: [],
            displayTimer: false,
            value: "",
            timers: []
        }
    }

    // timerId; 

    toggleTimer = () => {
        this.setState({ displayTimer: !this.state.displayTimer });
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            value: e.target.value
        })
    }

    addTimer = () => {
        this.setState({ 
            ...this.state,
            timers: [...this.state.timers, this.state.value],
            value: ""
        })
    }

    // componentDidMount() {
    //     this.timerId = setInterval(() => {
    //         this.setState({ 
    //             count: this.state.count + 1, 
    //             posts: [...this.state.posts, "New Post"]
    //         });
    //     }, 500);
    // }

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
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     let posts = document.getElementById("posts");

    //     console.log(`Previous ${snapshot.height}`)
    //     console.log(`Current ${posts.scrollHeight}`)

    //     if(this.state.posts.length >= 20) {
    //         clearInterval(this.timerId)
    //     }

    //     posts.scrollTo(0, posts.scrollHeight);
    // }

    render() {
        return (
            <div>
                <Heading count={this.state.count}/>

                {/* <div id="posts" style={{ overflow: "scroll", height: "100px", border: "1px solid lightgray"}}>
                    <ol>
                        {
                            this.state.posts.map((post, i) => {
                                    return <li key={i}>{post}</li>
                            })
                        }
                    </ol>
                </div> */}
                {
                    this.state.timers.map((timer, i) => {
                        return (
                            <div key={i}>
                                <div>{timer}</div>
                                {
                                    this.state.displayTimer ? (
                                        <Countdown toggleTimer={this.toggleTimer}/>
                                        ) : (<button onClick={this.toggleTimer}>Start Timer</button>)
                                }
                            </div>
                        )
                    })
                }

                <input type="text" onChange={this.onChange} value={this.state.value} />
                <button onClick={this.addTimer}>Add Timer</button>
            </div>
        );
    }
}

class Countdown extends Component {
    state = {
        count: 0,
        counting: true
    }

    timerId;

    // static getDerivedStateFromProps(props, state) {
    //     console.log(props, state);

    //     return state;
    // }

    startTimer = () => {
        this.timerId = setInterval(() => {
            this.setState({ 
                ...this.state,
                count: this.state.count + 1,
                counting: true 
            })
        }, 1000)
    }

    stopTimer = () => {
        this.setState({
            ...this.state,
            counting: false
        })
        clearInterval(this.timerId);
    }

    componentDidMount() {
        this.startTimer();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.state.count === 0) {
    //         this.props.toggleTimer();
    //     }
    // }

    componentWillUnmount() {
        clearInterval(this.timerId);
        alert("Timer is about to blow up!")
    }

    render() {
        return(
            <div>
                <div>Wait {this.state.count} Seconds!</div>
                {
                    !this.state.counting ? 
                    (<div><button onClick={this.startTimer}>Start</button></div>) : 
                    (<div><button onClick={this.stopTimer}>Stop</button></div>)
                }
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