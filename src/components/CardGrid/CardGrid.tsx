import React, {Component, ReactNodeArray} from 'react';
import './CardGrid.css';
import Card from "./Card/Card";
import {CardVM} from "./Card/CardVM";


interface CardGridProps {
    contentCollection: CardVM[];
    onCardClicked: (cardId: number)=> void;
}

class CardGrid extends Component<CardGridProps> {
  render() {
    return (
      <div className="CardGrid">
          { this.renderCards() }
      </div>
    );
  }

  public renderCards(){
      return (
          this.props.contentCollection.map( (cardVM: CardVM, index: number)=>{
              return <Card id={cardVM.id}
                           isFacingUp={cardVM.isFacingUp}
                           key={index}
                           content={cardVM.content}
                           onClick={this.props.onCardClicked}/>
          })
      );
  }
}

export default CardGrid;
