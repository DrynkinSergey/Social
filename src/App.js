import './App.css';
const App =() => {
  return (
    <div className="app-wrapper">
          <header className="header">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJltzNIbxo1JpysYmJBXidAL44qTkvXxzXw&usqp=CAU" alt=""/>
          </header>
        <nav className="nav">
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
        <div className="content">
            <div>
                <img src="https://www.techrepublic.com/a/hub/i/r/2021/03/08/3f6720de-e2a9-4213-b40f-1889436d92df/resize/1200x/694311317277dbe6af470ea7ea13b38e/monsitj.jpg" alt=""/></div>
        <div>discription</div>
        <div>My Posts
            <div>New post</div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
                <div>Post 4</div>
            </div>
        </div>
        </div>

    </div>
  );
}

export default App;
