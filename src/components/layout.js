import React, { Component } from "react";
import InputForm from "./inputform";
import List from "./list";
import { uid } from "react-uid";

export default class Layout extends Component {
  state = {
    _message: "",
    _list: [
      { iName: "Dill", imgUrl: "http://lorempixel.com/80/80/food?t=1" },
      { iName: "Potatis", imgUrl: "http://lorempixel.com/80/80/food?t=2" }
    ]
  };

  addItem = event => {
    event.preventDefault();
    const addFormInputRef = {
      iName: this.addFormInputRef.value,
      imgUrl: "http://lorempixel.com/80/80/food?t=" + { uid }
    };
    this.setState({
      _list:
        this.addFormInputRef.value !== ""
          ? [...this.state._list, addFormInputRef]
          : [...this.state._list],
      _message: ""
    });
    this.addFormRef.reset();
  };

  removeItem = item => {
    const restItems = this.state._list.filter(x => {
      return x !== item;
    });
    this.setState({
      _list: restItems
    });
    if (restItems.length === 0) {
      this.setState({
        _message: "Inga varor i varukorgen"
      });
    }
  };

  clearList = () => {
    this.setState({
      _list: [],
      _message: "Inga varor i varukorgen"
    });
  };

  render() {
    const { _message } = this.state;
    const { _list } = this.state;
    return (
      <React.Fragment>
        <React.StrictMode>
          <header>
            <h1>Shoppinglista</h1>
            <InputForm
              addItem={this.addItem}
              addFormInputRef={x => (this.addFormInputRef = x)}
              addFormRef={x => (this.addFormRef = x)}
            />
          </header>
          <div className="content">
            {(_message !== "" || _list.length === 0) && (
              <p className="message text-danger">{_message}</p>
            )}
            {_list.length > 0 && (
              <List
                _list={_list}
                removeItem={this.removeItem}
                clearList={this.clearList}
              />
            )}
          </div>
        </React.StrictMode>
      </React.Fragment>
    );
  }
}
