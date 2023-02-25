import { addProject } from "../api/project";
import { router,useEffect,useState } from "../src/lib";



const projects_add = () => {
    useEffect(() => {
        const form = document.getElementById("form");
        const projectName = document.getElementById("username");

    
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          // tạo ra 1 object mới lấy dữ liệu từ form
          const newProject = {
        
            name: projectName.value,
        
          };
          addProject(newProject)
          .then(() => alert("Them thanh cong"))
          .then(() => router.navigate("/projects"));
        });
      });
   return `
   <form action="" id="form">
   <input type="text" id="username">
   <button class="btn-add">Them</button>
</form>
   `
}

export default projects_add