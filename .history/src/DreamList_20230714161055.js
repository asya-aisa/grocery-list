import { Component } from "react";

export class DreamList extends Component {

    state = {
        inputDream: '',
        dreamList: []
    }

    upDateInput(e) {
        this.setState({
            inputDream: e
        })
    }
    AddDream(input) {
        let dreamArray = this.state.dreamList;
        dreamArray.push(input);
        this.setState({dreamList: dreamArray, inputDream: ''})
    }

    DeleteItem(number) {
        let dreamArray = this.state.dreamList;
        dreamArray.splice(number,1);
        this.setState({dreamList: dreamArray})
    }





    render() {
        return <div>
            
            <input type="text" placeholder="Enter your dream and go for it"
            onChange={(e) => {this.upDateInput(e.target.value)}}
            value={this.state.inputDream}/>

            <button onClick={() => this.AddDream(this.state.inputDream)}>Go</button>

            <ul>
                {this.state.dreamList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button>Done</button>
                        <button onClick={() => this.DeleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    }
}