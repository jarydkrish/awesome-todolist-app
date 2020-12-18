import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from 'react-native-paper';

const TaskCheckbox = (props) => (
  <div onClick={() => props.toggleTaskStatus(props.task)}>
    <List.Icon {...props} icon={props.task.done ? "check-outline" : "checkbox-blank-outline"} />
  </div>
);

TaskCheckbox.propTypes = {
  task: PropTypes.shape({
    done: PropTypes.bool,
  }).isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
};

export default TaskCheckbox;
