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

    LiChange(event) {
        event.classList.to
    }

    Donedream() {

    }





    render() {
        return <div>
            <div className="container-input">
              <input type="text" placeholder="Enter your dream and go for it"
              onChange={(e) => {this.upDateInput(e.target.value)}}
              value={this.state.inputDream}/>

              <button className="btn-add" onClick={() => this.AddDream(this.state.inputDream)}>Go</button>
            </div>


            <ul>
                {this.state.dreamList.map((item, index) => (
                    <li onClick={this.LiChange} className="item" key={index}>
                        {item}
                        <div className="btn-div">
                          <button onClick={() => this.Donedream()} className="btn">Done</button>
                          <button className="btn" onClick={() => this.DeleteItem(index)}>Delete</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    }
}