import { Link } from 'react-router-dom';
export function Menu() {
    const menuOption = [
        { id: '1', path: 'Home', label: 'Inicio' },
        { id: '2', path: 'Robots List', label: 'Robots list' },
    ];
    return (
        <>
            <nav>
                <ul>
                    {menuOption.map((item) => (
                        <li>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
