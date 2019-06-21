import React from 'react';

const Noticia = ({noticia}) => {

    //extraerlos datos del 
    const {urlToImage, url, title, description, author, source} = noticia;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                   <img src={urlToImage} alt={title} /> 
                </div>
                <div className="card-content">
                    <h6>{author}</h6>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                        Ir a la noticia
                    </a>
                </div>
            </div>
        </div> 
    );
}
 
export default Noticia;