import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { getTasks, setTaskStatus } from '../utilities/api';

import Task from './task_list/Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refetching: false,
      tasks: [],
    }
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    getTasks().then(
      tasks => this.setState({ tasks, loading: false, refetching: false }),
    ).catch(
      error => console.error(error),
    );
  }

  refetchTasks = () => {
    this.setState({ refetching: true }, this.fetchTasks);
  }

  toggleTaskStatus = (task) => {
    const { tasks } = this.state;
    const taskId = task.id;
    const status = !task.done;
    const index = tasks.findIndex(t => t.id === taskId);
    setTaskStatus(taskId, status).then((task) => {
      const newTasks = [
        ...tasks.slice(0, index),
        task,
        ...tasks.slice(index + 1),
      ];
      this.setState({ tasks: newTasks });
    }).catch(error => console.error(error));
  }

  removeTask = (task) => {
    const { tasks } = this.state;
    const taskId = task.id;
    const index = tasks.findIndex(t => t.id === taskId);
    deleteTask(taskId).then(() => {
      const newTasks = [
        ...array.slice(0, index),
        ...array.slice(index + 1),
      ];
      this.setState({ tasks: newTasks });
    }).catch(error => console.error(error));
  }

  render() {
    const { refetching, tasks } = this.state;
    return (
      <FlatList
        data={tasks}
        renderItem={(item) => (
          <Task
            task={item.item}
            toggleTaskStatus={this.toggleTaskStatus}
            removeTask={this.removeTask}
          />
        )}
        refreshing={refetching}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={this.refetchTasks}
      />
    )
  }
}

export default TaskList;
