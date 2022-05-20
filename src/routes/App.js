import React from "react";
import { Home } from '../pages/Home'
import { Login } from "../pages/Login";
import '../styles/global.scss'

function App() {
  const [page, setPage] = React.useState(0);
  const render = () => {
    switch (page) {
      case 0:
        return <Home move={setPage} />
      case 1:
        return <Login move={setPage} />
      default:
        return <Home />
    }
  }
  return (
    render()
  );
}

export { App };
