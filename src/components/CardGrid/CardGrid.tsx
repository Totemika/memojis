import React, { Component } from 'react';
import './CardGrid.css';
import Card from "./Card/Card";

class CardGrid extends Component {
  render() {
    return (
      <div className="CardGrid">
          <Card content="🤪"/><Card content="🤫️"/>
          <Card content="🙂"/><Card content="🙃"/>
          <Card content="🙃"/><Card content="🤫️"/>
          <Card content="🤪"/><Card content="🙂"/>
      </div>
    );
  }
}

export default CardGrid;
