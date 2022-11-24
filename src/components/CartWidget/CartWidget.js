import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div>
      <a href="index.html">
        <i className="cart bi bi-cart4"></i>
        <span className="contador">4</span>
      </a>
    </div>
  );
};

export default CartWidget;
