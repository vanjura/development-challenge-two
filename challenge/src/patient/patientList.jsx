//Base
import axios from 'axios'
import React, { Component } from 'react'

//Material
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

//Component
import IconButton from '../template/iconButton'
import PageHeader from '../template/pageHeader'
import IconButtonWithLink from '../template/iconButtonWithLink'

//Contantes de funcionamento
const URL = ' https://q3u8t2ztl1.execute-api.sa-east-1.amazonaws.com/default/patient'

var loading = false

//Contantes MaterialUI
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default class Patient extends Component {


    constructor(props) {
        super(props)
        this.state = {
            list: []
        };
        this.refresh()
        // const classes = useStyles()
    }

    refresh() {
        loading = true
        axios.get(URL)
            .then(res => {
                loading = false
                this.setState({ ...this.state, list: res.data })
            })
    }

    handleRemove(data) {
        loading = true
        axios.delete(URL, { data: { email: data.email } })
            .then(res => {
                loading = false
                this.refresh()
            })
            .catch(err => {
                loading = false
                console.log(err)
            })
    }

    render() {
        const list = this.state.list || []
        const renderRows = () => {
            return list.map((data, index) => {
                var link = '#/edit/' + data.email
                return (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.tel}</td>
                        <td>{data.email}</td>
                        <td>{data.county}</td>
                        <td>{data.state}</td>
                        <td>
                            <IconButton style='danger' icon='trash-o' onClick={() => this.handleRemove(data)} />
                            <IconButtonWithLink style='warning' icon='pencil' href={link} />
                        </td>
                    </tr>
                )
            })
        }

        return (
            <div>
                <Backdrop style={{zIndex: 99}} open={loading}>
                    <CircularProgress color="primary" />
                </Backdrop>
                
                <PageHeader name='Lista' small='lista'></PageHeader>
                <br />
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <TableContainer component={Paper}>
                            <Table style={{ minWidth: 700 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ background: '#3498db', color: '#fff' }}>Nome</TableCell>
                                        <TableCell style={{ background: '#3498db', color: '#fff' }} >Telefone</TableCell>
                                        <TableCell style={{ background: '#3498db', color: '#fff' }} >E-mail</TableCell>
                                        <TableCell style={{ background: '#3498db', color: '#fff' }} >Cidade</TableCell>
                                        <TableCell style={{ background: '#3498db', color: '#fff' }} >Estado</TableCell>
                                        <TableCell style={{ background: '#3498db', color: '#fff' }} ></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list.map((row) => (
                                        <TableRow key={row.email}>
                                            <TableCell component="th" scope="row">{row.name}</TableCell>
                                            <TableCell >{row.tel}</TableCell>
                                            <TableCell >{row.email}</TableCell>
                                            <TableCell >{row.county}</TableCell>
                                            <TableCell >{row.state}</TableCell>
                                            <TableCell align="right">
                                                <Button onClick={() => this.handleRemove(row)}>
                                                    <DeleteIcon />
                                                </Button>
                                                <Button href={"#/edit/" + row.email}>
                                                    <EditIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </React.Fragment>
                

            </div>
        )
    }
}