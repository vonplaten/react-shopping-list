import React, { Component } from "react";

export default class inputform extends Component {
  render() {
    const { addItem } = this.props;
    return (
      <form
        ref={this.props.addFormRef}
        className="form-inline"
        onSubmit={addItem}
      >
        <div>
          <label className="sr-only">Name</label>
          <input
            ref={this.props.addFormInputRef}
            type="text"
            onChange={this.props.onInputChange}
            className="form-control"
            id="inlineFormInputName2"
            placeholder="Varunamn"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm-2">
          Lägg till
        </button>
      </form>
    );
  }
}

// <form className="form-inline" onSubmit={this.props.onFormSubmit}>
//     <label className="sr-only" for="newTodo">Add New Item</label>
//     <input
//       type="text"
//       placeholder="Bread"
//       className="form-control"
//       id="newItemInput"
//       onChange={this.props.onInputChange}
//       value={this.props._newInput}
//     />
//   <button type="submit" className="btn btn-primary">Add</button>
// </form>
