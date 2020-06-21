import React, { Component, Fragment } from "react";
import { productService, cartStore, addToCart } from "../components/product";
import { CommentList, CreateComment } from "../components/comment";

export class DetailPage extends Component {
  state = {};
  
  componentDidMount() {
    const id = this.props.match.params.id;
    productService
      .getProductById(id)
      .then(({ data }) => this.setState({ data }));

    this.unsubscribe = cartStore.subscribe(() => {
        console.log(cartStore.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  async submitComment(comment) {
   const response = await productService.addComment(this.state.data.id, comment);
   if(response.status === 200) {
    const {data} = await productService.getComments(this.state.data.id);
    this.setState({data: {...this.state.data , comments: data} })
   }
  }

  addToCartHandler() {
    cartStore.dispatch(addToCart(this.state.data));
  }

  render() {
    const data = this.state.data;

    if (!data) {
      return <div className="text-center mt-5">Loading...</div>;
    }

    return (
      <Fragment>
        <div className="row">
          <div className="col-5">
            <img alt={data.title} src={data.pic} width="100%" />
          </div>
          <div className="col-7">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <strong style={styles.price}>{data.price}</strong>
            <br />
            <button onClick={this.addToCartHandler.bind(this)} className="mt-5 btn btn-primary btn-lg">Add to Cart</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-10 mx-auto">
            <CommentList comments={data.comments || []}/>
            <hr className="my-5" />
            <CreateComment onComment={this.submitComment.bind(this)} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  price: {
    color: "green",
    fontSize: 24,
  },
};
