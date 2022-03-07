import logo from "./logo.svg";
import "./App.css";
import AuthStates from "@SilalApp/common/states";
function App() {
  const { user, setUser, setUserData } = AuthStates();
  return (
    <div className="App">
      <div>
        <p style={{color:'red'}} onClick={()=>setUser('Hello Silal Web app mono repo')}>{user}</p>
      </div>
    </div>
  );
}

export default App;
