import React from "react";
import { ClassPage } from "../pages/ClassPage";
import { Home } from '../pages/Home'
import { Login } from "../pages/Login";
import '../styles/global.scss'

function App() {
  const [page, setPage] = React.useState(1);
  const render = () => {
    switch (page) {
      case 0:
        return <Home move={setPage} />
      case 1:
        return <Login move={setPage} />
      case 2:
        return <ClassPage move={setPage}/>
      default:
        return <Home />
    }
  }
  return (
    render()
  );
}

export { App };
