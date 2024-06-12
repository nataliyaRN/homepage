import { Helmet } from 'react-helmet-async';
import React, { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';
import Header from "./Header";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
}
const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
    <>
        <Helmet>
            <title>{title} </title>
            {meta}
        </Helmet>

        <Box ref={ref} {...other}>
            <Header/>
            {children}
        </Box>
    </>
));

export default Page;