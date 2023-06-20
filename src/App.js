import "./styles/general_styles.scss";
import Routing from "./routing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routing />;
      <ToastContainer />
    </>
  );
}

export default App;
