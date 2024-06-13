import React, {useState, MouseEvent} from "react";
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Menu, MenuItem, MenuList, Toolbar} from "@mui/material";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {

    const navigate = useNavigate();
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const openMenu = (event: MouseEvent<HTMLElement>) =>{
        setAnchorNav(event.currentTarget);
    }
    const closeMenu = (event: MouseEvent<HTMLElement>) =>{
        setAnchorNav(null);
    }
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

    const links = [
        {buttonName : "Home", buttonLink: navigateToDashboard},
        {buttonName : "Projekte", buttonLink: navigateToProjekte},
        {buttonName : "Ausbildung", buttonLink: navigateToAusbildung},
        {buttonName : "Kontakt", buttonLink: navigateToContact},
    ];

    return (
        <AppBar style={{backgroundColor:'var(--gray)'}}>
            <Toolbar className={`navbar-wrap`}>
                <IconButton className={`brand w-nav-brand`} size='large' area-label='logo' edge='start'
                sx={{display:{xs:'none', md:'flex'}}}>
                    <IntegrationInstructionsIcon/>
                </IconButton>
                <Box sx={{display:{xs:'none', md:'flex'}}}>
                    {links.map(({buttonName, buttonLink}: any) =>
                        <Button className={`nav-link w-nav-link`} onClick={buttonLink}>{buttonName}</Button>
                    )}
                </Box>
                <Box sx={{display:{xs:'flex', md:'none'}}}>
                    <IconButton size='large' edge='start' onClick={openMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu open={Boolean(anchorNav)}
                          sx={{ display:{xs:'flex', md:'none'}, padding:0,  transform: {xs:'translateY(-61%)', sm:'translateY(-67%)'}}}
                          onClose={closeMenu}
                          disableAutoFocusItem
                          >
                        <MenuList>
                            {links.map(({buttonName, buttonLink}: any) =>
                                <MenuItem onClick={buttonLink}>{buttonName}</MenuItem>
                            )}
                        </MenuList>
                    </Menu>
                    <IconButton className={`brand w-nav-brand`} size='large' area-label='logo' edge='start'
                                sx={{display:{xs:'flex', md:'none'}}}>
                        <IntegrationInstructionsIcon/>
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>
    );
}