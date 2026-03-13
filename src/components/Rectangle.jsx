import RowStats from './RowStats';

const Rectangle = ({title, id, type, hp, attack}) => {

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div 
        style={{
            width: 180,
            height: 270,
            backgroundColor: 'burlywood',
            textAlign: 'left',
            color: 'white',
            borderRadius: 4,
            margin: 5, 
            padding: 10,
        }}
            >
            <p><strong>{title}</strong></p>
            <p>{type}</p>
            
            <img src={imageUrl}
            alt={title}
            style={{ 
                width: '100%', 
                margin: 10,
            }} />
            <RowStats hp={hp} attack={attack}/> 
            console.log(hp, attack);
        </div>
    )
}

export default Rectangle;