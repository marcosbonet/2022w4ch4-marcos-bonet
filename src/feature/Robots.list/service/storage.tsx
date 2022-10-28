import { IRobot } from '../models/data';

const store = 'Robots';

export const getStore = (): Array<IRobot> => {
    const dataString = localStorage.getItem(store);
    if (!dataString) return [];
    return JSON.parse(dataString);
};

export const setStore = (data: Array<IRobot>) => {
    localStorage.setItem(store, JSON.stringify(data));
};
