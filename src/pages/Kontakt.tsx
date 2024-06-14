import Page from "../components/Page";
import {Button,  Paper, Stack, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import axios from "axios";
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import {getContactFormSchema} from "./validation";

type MessageForm = {
    email: string,
    message: string,
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'var(--gray)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Kontakt() {

    const defaultValues = {
        email : '',
        message: ''
    }
    const methods = useForm<MessageForm>({
        resolver: yupResolver(getContactFormSchema()),
        defaultValues,
    });

    const { handleSubmit, formState: {errors} } = useForm<MessageForm>();
    const submitForm = async (formFields: MessageForm) => {
        console.dir(formFields.email+' '+formFields.message);

        try {
            await axios.post('http://localhost:8080/send', JSON.stringify({
                email: formFields.email,
                message: formFields.message,
            }),  {headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Request-Method':'*',}
            });

        } catch (error) {
            console.log(error);
        }

    };
    return (<Page title='Nataliya Wierts'>
        <section className={`section hero-section`}>
            <Stack spacing={2} style={{marginTop: '15px'}}>
                <FormProvider {...methods} >
                <form autoComplete="off" onSubmit={handleSubmit(submitForm)}  style={{height: '100%'}} >
                    <Item><TextField
                        label="Ihre Email Adresse"
                        required
                        name='email'
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
                                   name='message'
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
                                    className={`button-primary w-button outline`} >Absenden</Button>
                        </div>
                    </Item>

                </form>
                </FormProvider>
            </Stack>
        </section>
    </Page>
);
}