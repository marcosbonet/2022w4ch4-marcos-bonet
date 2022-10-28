import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from '../../../feature/home/components/page/home.page';
import { RobotList } from '../../../feature/Robots.list/robots.list';
export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="Robot list" element={<RobotList></RobotList>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>

            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
