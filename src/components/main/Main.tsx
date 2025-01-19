import {Link} from "react-router";
import {TextField} from "../TextField";

export const Main = () => {
    return (
        <main>
            <header>
                <Link to={'/'}>Главная страница</Link>
                <Link to={'/profile'}>Профиль</Link>
            </header>
            <TextField/>
        </main>
    );
};
