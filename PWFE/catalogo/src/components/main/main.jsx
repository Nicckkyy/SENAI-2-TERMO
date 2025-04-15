import estilo from './main.module.css';
import { List } from '../list/list';
import banner from '../../../9152-destaque.png'

export function Main() {
    return (
        <main className={estilo.container}>
            <div className={estilo.banner}>
                <img src={banner} alt="" />
            </div>
            <div className={estilo.list}>
                <List />
            </div>
        </main>
    )
}