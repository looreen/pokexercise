const Statline = ({img, value}) => {
    return (
        <>
        <span style={{
            display: 'inline-flex',
            alignItems: 'center', 
            gap: '5px',
            marginBottom: 20,
        }}>

        <img src={img} alt="stat icon" style={{
          width: 30,         // klein
          height: 30,
        }}/>
        <span>{value}</span>
                </span>

        </>
    )

};

export default Statline;