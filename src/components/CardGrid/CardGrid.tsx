import React, {Component, ReactNodeArray} from 'react';
import './CardGrid.css';
import Card from "./Card/Card";

interface CardGridProps {
    contentCollection: string[];
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
          this.props.contentCollection.map( (content:string, index: number)=>{
              return <Card key={index} content={content}/>
          })
      );
  }
}

export default CardGrid;
