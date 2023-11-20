import {Navigate, Route, Routes} from "react-router-dom";
import {DashboardScene} from "../scenes/DashboardScene.tsx";
import {ConfigScene} from "../scenes/ConfigScene.tsx";

export const AppRoutes: React.FC<unknown> = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/dashboard"/>}/>
        <Route path="/dashboard" element={<DashboardScene/>}/>
        <Route path="/configuration" element={<ConfigScene/>}/>
    </Routes>
}