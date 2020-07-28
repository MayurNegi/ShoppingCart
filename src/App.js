import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });

    //     this.setState({
    //       products,
    //     });
    //   });

    this.db
      .collection("products")
      // .where("price", "==", 999)
      // .orderBy("price" , 'desc')
      .onSnapshot((snapshot) => {
        // will update without refreshing page on changing from firebase
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products,
          loading: false,
        });
      });
  }

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        title: "Washing Machine",
        price: 900,
        qty: 5,
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  handleIncreaseQuantity = (product) => {
    console.log("hey please increase the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    //   loading: false,
    // });

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("qty increased");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  handleDecreaseQuantity = (product) => {
    console.log("hey please decrease the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // if (products[index].qty === 0) {
    //   return;
    // }
    // products[index].qty -= 1;
    // this.setState({
    //   products: products,
    // });

    if (products[index].qty === 0) {
      return;
    }

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("qty decreased");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items,
    // });

    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  getCartCount = () => {
    let count = 0;
    const { products } = this.state;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getTotal = () => {
    let totalCost = 0;
    const { products } = this.state;

    products.map((product) => {
      totalCost = totalCost + product.qty * product.price;
      return "";
    });

    return totalCost;
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add Product
        </button> */}
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          Total Price: {this.getTotal()};
        </div>
      </div>
    );
  }
}

export default App;
