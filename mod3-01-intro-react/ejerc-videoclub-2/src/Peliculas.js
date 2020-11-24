import './peliculas.css';

const Peliculas=(props)=>{
    return(
        <div className="cardPelicula" key={props.titulo}>
            <img className="cartelPelicula" src={props.cartel} alt="imagen_cartel"/>
            <h3>{props.titulo}</h3>
            <p>{props.sinopsis}</p>
        </div>
    );
};

export default Peliculas;