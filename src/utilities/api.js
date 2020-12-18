import axios from 'axios';

axios.defaults.baseURL = 'https://blaines-todo-app.herokuapp.com';

// TODO: Uncomment the HTTP calls once the backend
// is working properly
export const setTaskStatus = async (taskId, status) => {
   // HTTP PUT to /tasks/:id with a body of { done: true/false }
   const response = await axios.put(`/tasks/${taskId}`, { done: status });
   return response.data;
}

export const deleteTask = async (taskId) => {
   // HTTP DELETE to /tasks/:id with no body
   await axios.delete(`/tasks/${taskId}`);
}

export const createTask = async (description) => {
   // HTTP POST to /tasks/ with a body of { description: 'some string' }
   const response = await axios.post(`/tasks/`, { description: description });
   return response.data;
}

export const getTasks = async () => {
   // HTTP GET to /tasks, which returns an array of task objects
   // from the database. The axios promise resolves and returns
   // the http response as a native javascript object. Return
   // the HTTP body (located at the `.data` property of there response)
   const response = await axios.get('/tasks');
   return response.data;
}
