import './card-list.styles.css';
import Card from '../card/card.component'

const CardList =(props:any) =>{ 

    const monsters = props.monsters;
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

export default CardList;
