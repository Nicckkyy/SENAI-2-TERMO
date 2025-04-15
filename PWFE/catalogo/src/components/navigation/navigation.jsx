import estilo from './navigation.module.css'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className={estilo.container}>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to='serie'><li>Series</li></Link>
                <Link to='perfil'><li>Perfil</li></Link>
            </ul>
        </nav>
    )
}