import React from 'react';
import { sortable } from 'react-sortable';

var ListItem = (props) => (
  <div {...props} className="list-item">{props.children}</div>
);

var SortableListItem = sortable(ListItem);

class SortableList extends React.Component {

  state = {
    draggingIndex: null,
    data: this.props.data
  };

  updateState = (obj) => {
    this.setState(obj)
  };

  render = () => {
    var childProps = { className: 'myClass1' };
    var listItems = this.state.data.items.map((item, i) => (
      <SortableListItem
        key={i}
        updateState={this.updateState}
        items={this.state.data.items}
        draggingIndex={this.state.draggingIndex}
        sortId={i}
        outline="list"
        childProps={childProps}
      >{item}</SortableListItem>
    ));

    return (
      <div className="list">{listItems}</div>
    )
  }
};

export default SortableList;