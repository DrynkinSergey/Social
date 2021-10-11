import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import MyPosts from "./components/Navbar/Profile/MyPosts/MyPosts";
const App =() => {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div>
            <Profile/>
            <MyPosts/>
        </div>

    </div>
  );
}

export default App;
