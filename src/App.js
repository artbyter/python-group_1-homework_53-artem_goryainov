import React, {Component} from 'react';

import './App.css';
import NBall  from './nball.js'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {numbers: ["","","","",""]};

    }

    updateNumbers = () => {
        let listNum = [...Array(32).keys()].map(item => (item + 5))
        let list = [];
        let num = 32
        for (let i = 0; i < 5; i++) {

            list.push(listNum.splice(Math.floor(Math.random() * num), 1));
            num--;
        }

        this.setState({numbers: list.sort((a,b)=>a-b)})
    }

    render() {
        return (
            <div className="App">

                <header><h1>Лоторея 5 из 36</h1></header>
                <main>
                    {this.state.numbers.map(item => (<NBall number={item}/>))}
                </main>
                <button className='numButton' onClick={this.updateNumbers}>Мне повезет!</button>
            </div>
        );
    }
}


export default App;
