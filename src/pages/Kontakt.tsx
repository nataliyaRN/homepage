import Page from "../components/Page";
import {Button, Paper, Stack, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {styled} from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Kontakt() {
    const handleSubmit = (e:FormEvent) => {
        console.dir(e);

    };
    const [email, setEmail] = useState("");
    return (<Page title='Nataliya Wierts'>
        <Stack spacing={2}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Item><TextField
                label="Ihre Email Adresse"
                required
                variant="outlined"
                color="secondary"
                type="email"
                sx={{mb: 3, marginTop:'13px'}}/>
            </Item>
            <Item>
                <TextField label='Ihr Angebot'
                       required
                       variant="outlined"
                       multiline
                       rows={2}
                       maxRows={10} />
            </Item>
            <Item><Button variant="outlined" color="secondary" type="submit">Absenden</Button></Item>
        </form>
        </Stack>
    </Page>);
}