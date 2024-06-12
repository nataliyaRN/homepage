import {
    Box,
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
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

    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Zeit</TableCell>
                    <TableCell>Ort</TableCell>
                    <TableCell>fachliche Beschreibung</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">{time}</TableCell>
                    <TableCell align="left">{place}</TableCell>
                    <TableCell align="left">{businessDesc}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography  gutterBottom component="div" style={{whiteSpace: "pre-wrap"}}>
                                    {stack}
                                </Typography>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
}