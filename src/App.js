import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import Table from "./MessageBoard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    fetchMessages(){

        //axios.get('http://127.0.0.1:5000/message-service',  {headers: { Accept: "application/json"}}

        fetch("http://127.0.0.1:5000/message-service")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )



    }
    componentDidMount() {
        this.fetchMessages();

    }

    render() {
        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (



                <MuiThemeProvider>
                    <div className="App">

                        <Table
                            messages={this.state.items}
                            h={[
                                {
                                    header: "Message Sender",
                                    prop: "sender"
                                },
                                {
                                    header: "Title",
                                    prop: "title"
                                },
                                {
                                    header: "Message Body",
                                    prop: "content"
                                }

                            ]}
                        />
                    </div>
                </MuiThemeProvider>




            );
        }
    }

}

export default App;