import { Component } from "react";

export class DreamList extends Component {

    state = {
        inputDream: ''
    }

    upDateInput(e) {
        console.log(e)
    }
    render() {
        return <div>
            <input type="text" placeholder="Enter your dream and go for it"
            onChange={(e) => {this.upDateInput(e.target.value)}}
            value={this.state.inputDream}
            />
        </div>
    }
}