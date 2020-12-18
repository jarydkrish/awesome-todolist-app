import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Pressable } from 'react-native';
import { List } from 'react-native-paper';

const TaskCheckbox = (props) => (
  <Pressable onPress={() => props.toggleTaskStatus(props.task)}>
    <List.Icon {...props} icon={props.task.done ? "check-outline" : "checkbox-blank-outline"} />
  </Pressable>
);

TaskCheckbox.propTypes = {
  task: PropTypes.shape({
    done: PropTypes.bool,
  }).isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
};

export default TaskCheckbox;
