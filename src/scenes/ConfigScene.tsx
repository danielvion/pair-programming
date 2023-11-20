import {useState} from "react";
import Config from "../data/config/Config.ts";
import {Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {MainMenu} from "../components/MainMenu/MainMenu.tsx";
import {ConfigurationList} from "../components/ConfiguratonList/ConfigurationList.tsx";

const defaultConfigs: Config[] = [
    {
        name: " 1st Config Option"
    },
    {
        name: " 2nd Config Option"
    },
    {
        name: " 3rd Config Option"
    }];
export const ConfigScene: React.FC<unknown> = () => {
    const [configs, setConfigs] = useState(defaultConfigs);
    const [configName, setConfigName] = useState('');

    function addConfig() {
        setConfigs([...configs, {name: configName}])
    }

    function removeConfigOption(index: number) {
        const configCopy = [...configs];
        configCopy.splice(index, 1);
        setConfigs(configCopy);
    }

    return <>
        <MainMenu/>
        <Box p={10}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic" label="Outlined" variant="outlined"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setConfigName(event.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant={"outlined"} style={{width: "100%"}} onClick={() => addConfig()}>Add New
                        Config</Button>
                </Grid>
                <Grid item xs={12}>
                    <ConfigurationList configurationArray={configs} removeConfigOption={removeConfigOption}/>
                </Grid>
            </Grid>
        </Box>

    </>
}