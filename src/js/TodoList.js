import React from 'react';

class TodoList extends React.Component {

  displayTask(task) {
    return (<li>{task}</li>);
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map(this.displayTask)}
      </ul>
    );
  }
}

export default TodoList;
