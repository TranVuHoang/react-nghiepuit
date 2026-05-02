import "./App.css";
import logo from "./logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chào mừng đến với khoá học ReactJS</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Để bắt đầu học vui lòng truy cập file: <code>src/App.js</code> chỉnh
          sửa và lưu lại.
        </a>
      </header>
    </div>
  );
};

export default App;
