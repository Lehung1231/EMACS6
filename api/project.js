import axios from "./config.js";
const getProjects = () => {
    return axios.get(`/products`);
  };
  const deleteProject = (id) => {
    return axios.delete(`/products/${id}`);
  };
  const updateProject = (project) => {
    return axios.put(`/products/${project.id}`, project);
  };
  const addProject = (project) => {
    return axios.post(`/products`, project);
  };
  export {
    getProjects,
    deleteProject,
    updateProject,
    addProject
  }