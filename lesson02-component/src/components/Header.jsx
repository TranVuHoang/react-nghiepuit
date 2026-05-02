const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#!">
            Bài 2: Component
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#!">Trang chủ</a>
          </li>
          <li>
            <a href="#!">Danh mục sản phẩm</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
