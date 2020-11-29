function Footer(props){
    const numero=Math.floor(Math.random() * (3-0) + 0);

    return (
        <div>
            <h3>{props.libros[numero].titulo}</h3>
            <p>{props.libros[numero].autor}</p>
            <img src={props.libros[numero].img} alt="imagen_libro"/>
            <p>{props.libros[numero].editorial}</p>
            <p>{props.libros[numero].descripción}</p>
        </div>
    );
};

export default Footer;