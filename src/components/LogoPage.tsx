import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
    disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
    const theme = useTheme();
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const WHITE = theme.palette.grey[0];

    const logo = (
        <Box sx={{ width: 40, height: 40, ...sx }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 40 40">
                <defs>
                    <linearGradient id="BG" x1="100%" x2="50%" y1="9.946%" y2="50%">
                        <stop offset="0%" stopColor={PRIMARY_DARK} />
                        <stop offset="100%" stopColor={PRIMARY_DARK} />
                    </linearGradient>
                    <linearGradient id="LOGO" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor={WHITE} />
                        <stop offset="100%" stopColor={WHITE} />
                    </linearGradient>
                </defs>
                <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
                    <circle cx="20" cy="20" r="20" fill="url(#BG)" />
                    <path
                        d="M 11.998683,26.500051 V 13.5 H 10 v 13.000051 h 2.000709 z m 6.011245,0 v -3.19607 h 6.471154 c 2.302588,0 3.196069,-0.136757 3.971027,-0.604771 C 29.543129,22.036696 30,20.750164 30,18.275364 30,15.818796 29.503621,14.630527 28.17353,13.987261 27.339816,13.578002 26.684394,13.5 24.123487,13.5 H 13.999392 v 13.000051 z m 5.860304,-6.000102 h -5.870435 v -4.000405 h 5.870435 c 1.73226,0 2.129363,0.402168 2.129363,2.190143 0,1.408094 -0.477131,1.810262 -2.129363,1.810262 z"
                        fill="url(#LOGO)"
                    />
                </g>
            </svg>
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
