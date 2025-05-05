import estilos from './perfil.module.css';

export function Perfil() {
    return (
        <div className={estilos.background}>
            <main className={estilos.container}>
                <section className={estilos.card}>
                    <p className={estilos.year}>2025</p>
                    <h1 className={estilos.title}>Nicole Camacho Rose</h1>
                    <p className={estilos.description}>
                        Uma garota que caiu no mundo tec de paraquedas e acabou gostando mais do que esperava, tendo interrese por todas as areas buscando sempre novos conhecimentos e desenvolvendo novas habilidades, buscando trazer uma harmonia entre o desenvolvimento e a arte.
                    </p>
                    <div className={estilos.description}>
                        <p>Tenho como hobbies:</p>
                       <li>🖋 Desenho</li>
                       <li>🎨Pintura</li>
                       <li>🎶 Musica</li>
                       <li>📚 Leitura</li>
                       <li>🛹 Patinação</li>

                       <p>Divertimentos:</p>
                       <li>🎬 Séries de Ficção cientifica/sobrenatural</li>
                       <li>🎥 Doramas de comédia, ação e romance</li>
                       <li>📼 Animes de Fantasia/Ficção</li>
                       <li>⚔ RPG</li>
                       <li>🎮 Jogos em grupo com amigos</li>
                    </div>
                    <p className={estilos.director}><strong>CREATER:</strong> Nicole Camacho </p>
                </section>
            </main>
        </div>
    );
}
