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

    DeleteItem(index) {
        let dreamArray = this.state.dreamList;
        dreamArray.splice(index)




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
                        <button onClick={() => this.DeleteItem(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    }
}