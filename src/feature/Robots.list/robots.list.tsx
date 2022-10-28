import { SyntheticEvent, useContext } from 'react';
import { RobotContext } from '../../infrastructure/context/context';

export function RobotList() {
    const { robots, handlerEraser } = useContext(RobotContext);

    const handlerDeleteOnClick = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        console.log(element.alt);
        handlerEraser(element.alt);
    };

    return (
        <>
            <ul>
                {robots.map((item, index) => (
                    <li key={index.toString()}>
                        <div>
                            {' '}
                            <img
                                src={item.img}
                                alt={item.name}
                                onClick={handlerDeleteOnClick}
                            />
                            <p>{item.name}</p>
                            <p>Resistance - {item.resistance}</p>
                            <p>Speed: {item.speed}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
