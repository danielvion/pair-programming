import {Navigate, Route, Routes} from "react-router-dom";
import {DashboardScene} from "../scenes/DashboardScene.tsx";

export const AppRoutes: React.FC<unknown> = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/dashboard"/>}/>
        <Route path="/dashboard" element={<DashboardScene/>}/>
    </Routes>
}