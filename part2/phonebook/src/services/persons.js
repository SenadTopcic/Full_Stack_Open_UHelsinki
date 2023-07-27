import axios from "axios";

const url = "http://localhost:3001/persons";

//get all datas from url
const getData = () => {
  const req = axios.get(url);
  return req.then((response) => response.data);
};

//send data to server and create new user
const postData = (newObject) => {
  const req = axios.post(url, newObject);
  return req.then((response) => response.data);
};

//delete data from from server
const deleteData = (id) => {
  const req = axios.delete(`${url}/${id}`);
  return req;
};

//update data or edit data
const putData = (id, newObject) => {
  const req = axios.put(`${url}/${id}`, newObject);
  return req.then((response) => response.data);
};

export default { getData, deleteData, putData, postData };
