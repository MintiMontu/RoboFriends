import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Scroll from './Scroll';
//import { robots } from './robots';
import SearchBox from'./SearchBox';
import ErrorBoundary from'./ErrorBoundary';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response=> response.json())
            .then( json => this.setState({robots: json}));
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    render () {
        const filteredRobots= this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1 className='f1'> Himali's Robo Friends </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;