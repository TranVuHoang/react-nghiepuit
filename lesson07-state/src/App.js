import { useState } from "react";
import "./App.css";

const App = () => {
  const productData = [
    {
      id: 1,
      name: "Iphone 17 pro max",
      src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg",
      alt: "Iphone 17 pro max",
      price: "63.290.000",
      status: true,
    },
    {
      id: 2,
      name: "Samsung s26 Ultra",
      price: "53.290.000",
      alt: "Samsung s26 Ultra",
      src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-12.jpg",
      status: true,
    },
    {
      id: 3,
      name: "Xiaomi 17 Ultra 5G 16GB 512GB",
      price: "43.290.000",
      alt: "Xiaomi 17 Ultra 5G 16GB 512GB",
      src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/i/dien-thoai-xiaomi-17-ultra-den_2.jpg",
      status: true,
    },
  ];

  // state
  const [isActive, setIsActive] = useState(true);

  // render giao diện bảng
  const renderProducts = () => {
    return products.map((item) => {
      if (item.status) {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <span className="label label-success">{`${item.price} VNĐ`}</span>
            </td>
          </tr>
        );
      }

      return null;
    });
  };

  // state
  const [products, setProducts] = useState(productData);

  const onSetState = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#!">
          state trong react
        </a>
      </nav>

      <div className="container">
        <div className="row">
          {isActive && (
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>{renderProducts()}</tbody>
            </table>
          )}

          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              onSetState();
            }}
          >
            {/* active {isActive == true ? "true" : "false"} */}
            Active {isActive ? "true" : "false"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
