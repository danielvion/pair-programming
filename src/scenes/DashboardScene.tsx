import {MainMenu} from "../components/MainMenu/MainMenu.tsx";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {DisplayScreen} from "../components/DisplayScreen/DisplayScreen.tsx";
import {useEffect, useMemo, useState} from "react";
import {useLocation} from "react-router-dom";

export const DashboardScene: React.FC<unknown> = () => {
    const {search, pathname} = useLocation()

    const queryParam = useMemo(() => {
        const searchParams = new URLSearchParams(search)
        return Number.parseInt(searchParams.get('count') ?? '0');
    }, [search, pathname])


    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    return <>
        <MainMenu/>
        <Box sx={{padding: 10}}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Button variant={"outlined"} style={{width: "100%"}} onClick={increaseCount}>Increase</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant={"contained"} style={{width: "100%"}} onClick={decreaseCount}>Decrease</Button>
                </Grid>
            </Grid>

            <DisplayScreen resetFunction={resetCount}
                           toDisplay={"Current count: " + (queryParam != 0 ? queryParam : count)}/>
        </Box>
    </>
}