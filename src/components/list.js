import React, { Component } from "react";
//import ListItem from "./listItem";
import Counter from "./counter";

export default class List extends Component {
  render() {
    const { _list } = this.props;
    const { removeItem } = this.props;
    const { clearList } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Varunamn</th>
            <th>Antal</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {_list.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={item.imgUrl} alt=""/>
                  </td>
                <td>{item.iName}</td>
                <td>
                  <Counter/>
                </td>
                <td>
                  <button
                    onClick={() => removeItem(item)}
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                  >
                    Ta bort
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">&nbsp;</td>
            <td><button
                    onClick={clearList}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Radera lista
                  </button></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
