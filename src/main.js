import projects from "../pages/projects";
import projects_add from "../pages/projects_add";
import home from "../pages/home";
import Navigo from "navigo"; 
import { render,router } from "./lib";
import projects_update from "../pages/projects_update";
const app = document.querySelector("#app");

  router.on('/projects',()=>{
    render(projects,app);
  })
  router.on('/projects/add',()=>{
    render(projects_add,app);
  })
  router.on('/projects/:id/update',(params)=>{
    render(function(){
       return projects_update(params);
    },app);
  })
router.resolve();