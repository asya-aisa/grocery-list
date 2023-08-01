import { Component } from "react";

export class DreamList extends Component {

    state = {
        inputDream: ''
    }

    upDateInput(e) {
        this.setState({
            inputDream: e
        })
    }
    render() {
        return <div>
            <input type="text" placeholder="Enter your dream and go for it"
            onChange={(e) => {this.upDateInput(e.target.value)}}
            value={this.state.inputDream}/>

            <button oc>Go</button>
        </div>
    }
}