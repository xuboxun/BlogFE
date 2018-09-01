import { userRoutes } from './user';
import {adminRoutes} from './admin';


export const routes = [
    ...userRoutes,
    ...adminRoutes
];
