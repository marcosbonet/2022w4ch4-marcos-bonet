import { Menu } from '../menu/menu';

export function Header() {
    return (
        <header className={'style.header'}>
            <h1>Robots</h1>
            <Menu></Menu>
        </header>
    );
}
