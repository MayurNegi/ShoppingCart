import React from "react";

// for stateless component we can use function
const CartItem = (props) => {
  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });
  //   promise.then(() => {
  //     // setState acts like a synchronus call in promise and ajax
  //     // works 3 times
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log("state", this.state);
  //   });
  // }

  // increaseQuantity = () => {
  //   // by using arrow function it will auomatically bind this
  //   // console.log("this", this.state);

  //   // setstate form 1
  //   // this.setState({
  //   //   qty: this.state.qty + 1,
  //   // });

  //   //setState form 2  - if prevState required use this
  //   this.setState(
  //     // set state is an asynchronus function.
  //     (prevState) => {
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     },
  //     () => {
  //       // this callback is executed when setstate is executed
  //       console.log("this.state", this.state);
  //     }
  //   );
  // };

  console.log("props", props); // this only works for class component not in function component
  const { price, title, qty } = props.product; // object restructuring
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "purple" }}>Rs {price}</div>
        <div style={{ color: "purple" }}>Qty: {qty}</div>
        <div className="cart-items-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick={() => {
              onIncreaseQuantity(product);
            }}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/992/992683.svg"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
