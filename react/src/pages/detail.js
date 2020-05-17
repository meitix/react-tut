import React from "react";
import { productService } from "../components/product";

export class Detail extends React.Component {
  state = {data: undefined}

  async componentDidMount() {
    let id = this.props.match.params.id;
    const { data } = await productService.getProductById(id);
    this.setState({data})
  }

  render() {
    const data = this.state.data;
    if(!data) {
      return <div>Loading...</div>
    }
    return (
      <div className="row">
        <div className="col-5">
          <img src={data.pic} width="100%" />
        </div>
        <div className="col-7">
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <strong style={styles.price}>{data.price}</strong>
        </div>
      </div>
    );
  }
}

const styles = {
  price: {
    color: "green",
    fontSize: 24,
  },
};
