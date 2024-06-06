import { Test1 } from "./utils";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Test1();
  }, []);
};

App;
