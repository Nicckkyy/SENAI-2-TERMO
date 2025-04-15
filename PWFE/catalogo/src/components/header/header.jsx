// structure react for components
import estilo from './header.module.css'
import logo from '../../../logo-removebg-preview.png'

export function Header() {
    return (
        <header className={estilo.container}>
            <div className={estilo.header_logo}>
                <img src={logo} alt="" />
            </div>
            <div className={estilo.header_search}>

            </div>
            <div className={estilo.header_profile}>

            </div>
        </header>
    )
}