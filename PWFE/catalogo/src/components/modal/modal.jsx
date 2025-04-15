import estilo from './modal.module.css';

export function Modal({movie, onCloseModal}){
    return(
        <div className={estilo.modalBack}>

            <div className={estilo.modalContainer}>
                
                <h2>{movie.title}</h2>

                <button  onClick = {onCloseModal}>X</button>

                <img className={estilo.imgDetails} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/>
                <p>{`Polularidade: ${movie.popularity}`}</p>

                <p>{`Data de lançamento: ${movie.realease_date}`}</p>

                <p>{`Quantidade de votos: ${movie.vote_count}`}</p>

                <p>{`Sinopse: ${movie.overview}`}</p>

            </div>
        </div>
    );
}