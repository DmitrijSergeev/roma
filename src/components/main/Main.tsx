import {Link} from "react-router";
import {TextField} from "../textField";
import s from './Main.module.scss'

export const Main = () => {
    return (
        <main className={s.container}>
            <header>
                <Link to={'/'}>Главная страница</Link>
                <Link to={'/profile'}>Профиль</Link>
            </header>
            <TextField/>
        </main>
    );
};
