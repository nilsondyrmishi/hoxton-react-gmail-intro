import './App.css';
import Header from './components/header'
import NavLeft from "./components/nav-left";
import MainEmail from "./components/main-email";
function App() {
    return (
        <div className="app">
            <Header/>
            <NavLeft/>
            <MainEmail/>

        </div>
    )
}

export default App;
