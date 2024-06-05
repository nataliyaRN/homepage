import { Theme, alpha } from '@mui/material/styles';
import { ColorSchema } from '../palette';

export default function ToggleButton(theme: Theme) {
  const style = (color: ColorSchema) => ({
    props: { color },
    style: {
      '&:hover': {
        borderColor: alpha(theme.palette[color].main, 0.68),
        backgroundColor: alpha(theme.palette[color].main, 0.68),
        color: theme.palette.grey[0],
      },
      '&.Mui-selected': {
        borderColor: theme.palette[color].main,
        backgroundColor: theme.palette[color].main,
        color: theme.palette.grey[0],
      },
      '&.Mui-selected:hover': {
        borderColor: alpha(theme.palette[color].main, 0.68),
        backgroundColor: alpha(theme.palette[color].main, 0.68),
        color: theme.palette.grey[0],
      },
    },
  });

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'standard' },
          style: {
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
        style('primary'),
        style('secondary'),
        style('info'),
        style('success'),
        style('warning'),
        style('error'),
      ],
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${theme.palette.grey[500_12]}`,
          '& .MuiToggleButton-root': {
            margin: 4,
            textTransform: 'none',
            borderColor: 'transparent !important',
            borderRadius: `${theme.shape.borderRadius}px !important`,
          },
        },
      },
    },
  };
}
