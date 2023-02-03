import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import components from "./Components";
import { tasks as tasksData } from "./Data/structure";

function App() {
  const { Header, Footer, Main, Single } = components;
  // Get tasks from local storage with custom hook
  const [tasks, setTasks] = useLocalStorage("tasks", tasksData);

  const changeTasks = (data) => {
    setTasks(data);
  };

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main tasks={tasks} changeTasks={changeTasks} />}
        >
          <Route path="tasks/:taskId" element={<Single />} />
        </Route>
      </Routes>
      <Footer tasks={tasks} name="IB" />
    </Fragment>
  );
}

export default App;