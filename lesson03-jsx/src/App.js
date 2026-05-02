import "./App.css";

function App() {
  const a = 5;
  const b = 7;
  const name = "Hoàng IT đẹp trai";

  const product = {
    id: 1,
    name: "Iphone 17 pro max",
    price: "63.290.000",
    status: 0,
  };

  const users = [
    {
      id: 1,
      name: "Trần Vũ Hoàng",
      age: 29,
    },
    {
      id: 2,
      name: "Nguyễn Thị Thu Trang",
      age: 23,
    },
    {
      id: 3,
      name: "Nguyễn Đình Bắc",
      age: 23,
    },
  ];

  var user = users.map((user) => {
    return (
      <div key={user.id}>
        <p>Họ và tên: {user.name}</p>
        <p>Tuổi: {user.age}</p>
      </div>
    );
  });

  // const check = false;

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
          Status: {product.status ? "Active" : "Pending"}
        </h3>
      </div>
      <hr />
      {user}
    </>
  );
}

export default App;
