import React, { Component } from 'react';
import './Card.css';

interface CardProps {
  content: string;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="Card">
        <span>{this.props.content}️</span>
      </div>
    );
  }
}

export default Card;
