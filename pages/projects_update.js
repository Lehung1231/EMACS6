import { getProjects , updateProject } from "../api/project";
import { router,useEffect,useState } from "../src/lib";


const projects_update = ({ data: { id } }) => {


useEffect(() => {
    const form = document.getElementById("form");
    const projectName = document.getElementById("username");


    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tạo ra 1 object mới lấy dữ liệu từ form
      const newProject = {
        id : id,
        name: projectName.value,
      };
      updateProject(newProject)
      .then(() => alert("Sua thanh cong"))
      .then(() => router.navigate("/projects"));
                               
    });
  });

  return ` 
  <form action="" id="form">
  <input type="text" id="username" value="">
  <button type="submit">Sua</button>
</form>
  `
}
export default projects_update