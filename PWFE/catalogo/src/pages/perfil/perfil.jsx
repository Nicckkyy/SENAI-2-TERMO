import estilos from './perfil.module.css';

export function Perfil(){
    return(
        <>
            <div className={estilos.background}></div>

            <main>
                <section className={estilos.info}>
                    <p className={estilos.year}>2025</p>
                    <h1 className={estilos.title}>Nicole Camacho Rose</h1>
                </section>

                <section className={estilos.card}>
                    <div className={estilos.foto}> 
                        <img src="" alt="eu" />
                    </div>
                    <div className={estilos.description}>
                    <p>
                    Aqui vai a descrição do seu filme ou projeto, explicando o enredo ou objetivo. Você pode contar a história como foi feita na imagem original.
                    </p>
                    </div>

                </section>

                <section className={estilos.description}>
                    <p>
                    Aqui vai a descrição do seu filme ou projeto, explicando o enredo ou objetivo. Você pode contar a história como foi feita na imagem original.
                    </p>
                    <p className={estilos.director}><strong>DIRECTOR:</strong> Seu Nome</p>
                </section>
            </main>
        </>
    );
}