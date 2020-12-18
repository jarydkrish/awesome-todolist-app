import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from 'react-native-paper';

import TaskCheckbox from './TaskCheckbox';

const Task = ({ task, toggleTaskStatus, removeTask }) => (
  <List.Item
    title={task.description}
    left={props => <TaskCheckbox {...props} task={task} toggleTaskStatus={toggleTaskStatus} />}
  />
);

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default Task;
