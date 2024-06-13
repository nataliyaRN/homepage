import Page from "../components/Page";
import {Button, makeStyles, Paper, Stack, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {styled} from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'var(--gray)',
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
        <section className={`section hero-section`}>
            <Stack spacing={2} style={{marginTop: '15px'}}>
                <form autoComplete="off" onSubmit={handleSubmit} style={{height: '100%'}}>
                    <Item><TextField
                        label="Ihre Email Adresse"
                        required
                        variant="outlined"
                        color="secondary"
                        type="email"
                        sx={{
                            mb: 3,
                            marginTop: '13px',
                            width: '50%',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white'
                            }
                        }}/>
                    </Item>
                    <Item>
                        <TextField label='Ihr Angebot'
                                   required
                                   variant="outlined"
                                   multiline
                                   rows={2}
                                   maxRows={10}
                                   sx={{
                                       mb: 3,
                                       marginTop: '13px',
                                       width: '50%',
                                       '& .MuiOutlinedInput-root': {
                                           backgroundColor: 'white'
                                       }
                                   }}/>
                    </Item>
                    <Item>
                        <div className={`hero-button-block hero-title-main-block`}>
                            <Button variant="outlined" color="secondary" type="submit"
                                    className={`button-primary w-button outline`}>Absenden</Button>
                        </div>
                    </Item>
                </form>
            </Stack>
        </section>
    </Page>
);
}