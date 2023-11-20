import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

interface DisplayScreenProps {
    toDisplay: string
    resetFunction: () => void
}

export const DisplayScreen: React.FC<DisplayScreenProps> = (props) => {
    return <>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant={"h1"} onClick={props.resetFunction}>{props.toDisplay}</Typography>
        </Grid>
    </>
}

