import ContextProvider from "../context/Context";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Gemini.css";

function Gemini() {
  return (
    <ContextProvider>
        <Sidebar />
        <Main />
    </ContextProvider>
    );
}

export default Gemini;