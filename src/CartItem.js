import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing    ();
  }

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

  increaseQuantity = () => {
    // by using arrow function it will auomatically bind this
    // console.log("this", this.state);

    // setstate form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    //setState form 2  - if prevState required use this
    this.setState(
      // set state is an asynchronus function.
      (prevState) => {
        return {
          qty: prevState.qty + 1,
        };
      },
      () => {
        // this callback is executed when setstate is executed
        console.log("this.state", this.state);
      }
    );
  };

  decreaseQuantity = () => {
    this.setState((prevState) => {
      if (prevState.qty > 0) {
        return {
          qty: prevState.qty - 1,
        };
      }
      return;
    });
  };

  render() {
    console.log("render");
    const { price, title, qty } = this.state; // object restructuring

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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992683.svg"
              onClick={this.decreaseQuantity}
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
