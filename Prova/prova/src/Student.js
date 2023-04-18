import React from "react";


class Student extends React.Component {
  render() {
      return <div> 
        <img src={this.props.imgMay}/>
        <p>Meu nome é {this.props.name}</p>
        <p>Meu e-mail é {this.props.email}</p>
        <h3>Obrigada!!</h3>
      </div>;
  }
}

export default Student //CARA LEMBRA DE EXPORTAR <-----