import { createContext } from 'react';
import { IRobot } from '../../feature/Robots.list/models/data';

const initialContext: {
    robots: Array<IRobot>;
    handleAdd: (obj: IRobot) => void;
    handlerEraser: (deletedName: string) => void;
} = {
    robots: [],
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
};

export const RobotContext = createContext(initialContext);
