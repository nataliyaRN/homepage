import React from "react";
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Link, Toolbar, Typography} from "@mui/material";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export default function Header() {

    const navigate = useNavigate();
    const navigateToProjekte = () => {
        navigate('/projekte');
    }
    const navigateToAusbildung = () => {
        navigate('/ausbildung');
    }
    const  navigateToDashboard = () => {
        navigate('/');
    }
    const  navigateToContact = () => {
        navigate('/kontakt');
    }

    return (
        <AppBar position='static' className={`container w-container`} style={{backgroundColor:'var(--gray)'}}>
            <Toolbar className={`navbar-wrap`}>
                <IconButton className={`brand w-nav-brand`} size='large' area-label='logo' edge='start'>
                    <IntegrationInstructionsIcon/>
                </IconButton>
                <Box>
                    <Button className={`nav-link w-nav-link`} onClick={navigateToDashboard}>Home</Button>
                    <Button className={`nav-link w-nav-link`} onClick={navigateToProjekte}>Projekte</Button>
                    <Button className={`nav-link w-nav-link`} onClick={navigateToAusbildung}>Ausbildung</Button>
                    <Button className={`nav-link w-nav-link`} onClick={navigateToContact}>Kontakt</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}