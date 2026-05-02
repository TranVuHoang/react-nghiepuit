import "./App.css";

function App() {
  const a = 5;
  const b = 7;
  const name = "Hoàng IT đẹp trai";

  const product = {
    id: 1,
    name: "Iphone 17 pro max",
    price: "63.290.000",
  };

  return (
    <>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#!">
          Title
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Link</a>
          </li>
        </ul>
      </nav>
      <div className="" style={{ padding: "35px" }}>
        <h2>Giá trị của a= {a}</h2>
        <h2>Giá trị của b= {b}</h2>
        <h2>
          Tổng {a} + {b} = {a + b}
        </h2>
        <h3>Name: {name}</h3>
        <hr />
        <h3>
          Id: {product.id}
          <br />
          Name: {product.name}
          <br />
          Price: {product.price} VNĐ
          <br />
        </h3>
      </div>
    </>
  );
}

export default App;
