const Product = ({ name, price, alt, src, children = "" }) => {
  const onAddToCart = (text) => alert(text);

  return (
    <>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img data-src="#!" alt={alt} src={src} />
          <div className="caption">
            <h3>{children || name}</h3>
            <p>{price}</p>
            <p>
              <a
                href="#!"
                className="btn btn-primary"
                onClick={() =>
                  onAddToCart(`Bạn có muốn mua điện thoại ${name} này?`)
                }
              >
                Mua ngay
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
