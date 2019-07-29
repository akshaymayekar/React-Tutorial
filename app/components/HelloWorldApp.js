import React from 'react';
import Greetings from "./Greetings";


class HelloWorldApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greetings: "World",
        };
    }

    setGreetings(e) {
        this.setState({greetings: e.target.value})
    }

    render() {
        const {greetings} = this.state;
        return (
            <React.Fragment>
                <div><input type="text" value={greetings} onChange={(e) => this.setGreetings(e)}/></div>
                <Greetings greetings={greetings}/>
            </React.Fragment>
        );
    }
}

export default HelloWorldApp;