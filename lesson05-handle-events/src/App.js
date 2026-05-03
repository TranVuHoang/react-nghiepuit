import "./App.css";
import Product from "./components/Product";

const App = () => {
  // Biến products để lưu data
  const products = [
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

  const product = products.map((item) => {
    let result = "";

    if (item.status) {
      result = (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          alt={item.alt}
          src={item.src}
        />
      );
    }
    return result;
  });

  // hàm không có tham số
  const onClick = () => {
    console.log(">>> đã click");
  };

  // hàm có tham số
  const onClick2 = (text) => {
    console.log(text);
  };

  return (
    <>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#!">
          Props
        </a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-12 xs-12  col-12 sm-12  col-12 md-12  col-12 lg-12 ">
              {product}
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button
                type="button"
                className="btn btn-success"
                onClick={onClick}
              >
                Click me
              </button>
              <button
                type="button"
                className="btn btn-danger ml-5"
                onClick={() => onClick2(">>>>>>đã click 2")}
              >
                Click me 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
