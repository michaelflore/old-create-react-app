import React, {Component, Fragment, createRef} from 'react';

class BarChart extends Component {
    state = {
        goal: 10,
        points: 0
    }

    timerId = createRef();

    startTimer = () => {
        this.timerId.current = setInterval(() => {
            this.addPoints();
        }, 1000);
    }

    stopTimer = () => {
        clearInterval(this.timerId.current);
    }

    addPoints = () => {
        this.setState(state => (
            {
                points: state.points + 1
            }
        ));
    }

    reset = () => {
        this.setState({ points: 0 });
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(`Previous State: ${prevState.points}`)
    //     console.log(`Current State: ${this.state.points}`)

    //     if(prevState.points !== this.state.points) {
    //         console.log("State Changed")
    //     }
    // }

    render() {
        return (
            <div>
                {
                    (this.state.points < this.state.goal) ? 
                    (
                        <Chart
                            points={this.state.points}
                            startTimer={this.startTimer}
                            stopTimer={this.stopTimer}
                        />
                    ) : (
                        <div>GOAL!</div>
                    )
                }
                <h1>Points: {this.state.points}/{this.state.goal}</h1>

                <Controls
                    goal={this.state.goal}
                    points={this.state.points}
                    addPoints={this.addPoints}
                    reset={this.reset}
                    startTimer={this.startTimer}
                />
            </div>
        );
    }
}

class Chart extends Component {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(nextProps.points % 5) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(`Previous Props: ${prevProps.points}`);
    //     console.log(`Current Props: ${this.props.points}`);
    //     if (prevProps.points !== this.props.points) {
    //         console.log("Props Changed")
    //     }
    // }

    componentDidMount() {
        // this.props.startTimer();
    }

    componentWillUnmount() {
        this.props.stopTimer();
    }

    render() {
        const barStyles = {
            height: "100px",
            width: "50px",
            border: "1px #ccc solid",
            position: "relative"
        };
        const fillStyles = {
            height: `${this.props.points}0px`,
            width: "50px",
            backgroundColor: "green",
            position: "absolute",
            bottom: "0",
            transition: "height .4s"
        };
        return (
            <div style={barStyles}>
                <div style={fillStyles}></div>
            </div>
        );
    }
}

const Controls = (props) => {
    
    return (
        <Fragment>
            {
                (props.points < props.goal) ? (
                    <Fragment>
                        <button onClick={props.addPoints}>Add</button>
                        <button onClick={props.startTimer}>Start</button>
                    </Fragment>
                ) : (
                        <Fragment>
                            <button disabled>Done</button>
                            <button onClick={props.reset}>Reset</button>
                        </Fragment>
                    )
            }
        </Fragment>
    )
}

export default BarChart;