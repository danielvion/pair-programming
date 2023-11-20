import * as React from "react";
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Config from "../../data/config/Config.ts";
import {Delete} from "@mui/icons-material";

interface ConfigurationListProps {
    configurationArray: Config[]
    removeConfigOption?: (index: number) => void
}

export const ConfigurationList: React.FC<ConfigurationListProps> = (props) => {

    return (
        <List dense={true}>
            {props.configurationArray.map((config, index) => <ListItem>
                    <ListItemIcon>
                        <Delete onClick={() => {
                            if (props.removeConfigOption)
                                props.removeConfigOption(index)
                        }}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={config.name}
                    />
                </ListItem>,
            )}
        </List>
    );
}