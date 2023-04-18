import React from "react";

class DadoApi extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <p>{this.props.date}</p>
        <p>{this.props.address}</p>
        <p>{this.props.phone}</p>
      </div>
    );
  }
}

export default DadoApi;
