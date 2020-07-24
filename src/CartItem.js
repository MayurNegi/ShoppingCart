import React from "react";

class CartItem extends React.Component {
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

  // decreaseQuantity = () => {
  //   this.setState((prevState) => {
  //     if (prevState.qty > 0) {
  //       return {
  //         qty: prevState.qty - 1,
  //       };
  //     }
  //     return;
  //   });
  // };

  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product; // object restructuring

    return (
      <div className="cart-item">
        {this.props.jsx}
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
                this.props.onIncreaseQuantity(this.props.product);
              }}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992683.svg"
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
