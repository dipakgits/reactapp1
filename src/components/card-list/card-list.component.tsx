import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component'

class CardList extends Component <any>{ 
    render() {
        const monsters = this.props.monsters;
        return(
            <div className='card-list'>
                {monsters.map((monster:any) => {
                    return(
                        <Card key={monster.id} monster ={monster} />
                    )
                })}
            </div>
        ) 
    }
}

export default CardList;
