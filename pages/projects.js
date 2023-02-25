import { useEffect,useState } from "../src/lib"
import { getProjects,deleteProject } from "../api/project";
const projects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getProjects().then(({ data }) => setData(data));
  }, []);

    useEffect(function() {
      const btns = document.querySelectorAll(".btn-remove");
      for (let btn of btns) {
          const id = btn.dataset.id;
          btn.addEventListener("click", function() {
              console.log(id);
              const newData = data.filter((project) => {
                  return project.id != id;
              });
              setData(newData);
              deleteProject(id);
          });
        }
      });
              return /*html*/`
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Action1</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.map((project, index) => {
                  return /*html*/`
                      <tr>
                        <td>${index + 1}</td>
                        <td>${project.name}</td>
                        <td>
                          <button data-id="${project.id}" class="btn-remove">Xóa</button>
                        </td>
                      </tr>
                    `
              }).join("")}
                </tbody>
              </table>
            `
}

export default projects
