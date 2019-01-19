import React, { Component } from 'react';
import './Card.css';

interface CardProps {
  id: number;
  content: string;
  isFacingUp: boolean;
  onClick: (cardId: number)=> void;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="Card" onClick={this.onClick}>
        <span>{this.props.isFacingUp? this.props.content : 'X'}️</span>
      </div>
    );
  }

  onClick = () => {
    this.props.onClick(this.props.id);
  }
}

export default Card;
