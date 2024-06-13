import {
    Box,
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow, Typography
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, {useState} from "react";

type PropsType = {
   id: string;
   time: string;
   businessDesc: string;
   stack: string;
   place: string;
};

export default function ProjectTable({id, time, businessDesc, stack, place}: PropsType) {
    const [open, setOpen] = useState(false);

    return <TableContainer component={Paper} className='table-header'>
        <Table sx={{ minWidth: 650 }}  className='table-header'>

                <TableRow>
                    <TableCell className='table-header'></TableCell>
                    <TableCell className='table-header'>Zeit</TableCell>
                    <TableCell className='table-header'>Ort</TableCell>
                    <TableCell className='table-header'>fachliche Beschreibung</TableCell>
                </TableRow>

            <TableBody className='table-body'>
                <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className='table-body'>
                    <TableCell className='table-body'>
                        <IconButton
                            aria-label='expand row'
                            size='small'
                            sx={{backgroundColor:'#6d9a8b', color:'white'}}
                            onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" className='table-body'>
                        <Typography sx={{fontSize: '0.875rem'}}>{time}</Typography>
                    </TableCell>
                    <TableCell align="left" className='table-body'>
                        <Typography sx={{fontSize: '0.875rem'}}>{place}</Typography>
                    </TableCell>
                    <TableCell align="left" className='table-body'>
                        <Typography sx={{fontSize: '0.875rem'}}>{businessDesc}</Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='table-collapsible' colSpan={4}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography  gutterBottom component="div" >
                                    {stack.split("&").map((curs, idx) => (
                                        <Typography style={{fontSize: '0.875rem'}} key={idx}>{curs}</Typography>
                                    ))}
                                </Typography>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
}