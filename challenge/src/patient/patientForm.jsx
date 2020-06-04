import React from 'react'
import Grad from '../template/grid'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const URL = ' https://q3u8t2ztl1.execute-api.sa-east-1.amazonaws.com/default/patient'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <br />
                <div role='form' className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                error={props.state.emailError == '' ? false : true}
                                disabled={props.edit}
                                id="email"
                                label="E-Mail *"
                                fullWidth
                                value={props.state.email}
                                onChange={props.handleChange}
                                helperText={props.state.emailError}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                error={props.state.nameError == '' ? false : true}
                                helperText={props.state.nameError}
                                id='name'
                                label="Nome Completo *"
                                fullWidth
                                value={props.state.name}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sexo *</InputLabel>
                                <Select
                                    name='sex'
                                    value={props.state.sex}
                                    onChange={props.handleChange}
                                >
                                    <MenuItem value={'F'}>Feminino</MenuItem>
                                    <MenuItem value={'M'}>Masculino</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                error={props.state.weightError == '' ? false : true}
                                helperText={props.state.weightError}
                                id='weight'
                                label="Peso (kg) *"
                                fullWidth
                                value={props.state.weight}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                error={props.state.heightError == '' ? false : true}
                                helperText={props.state.heightError}
                                id='height'
                                label="Altura (cm) *"
                                fullWidth
                                value={props.state.height}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                error={props.state.telError == '' ? false : true}
                                helperText={props.state.telError}
                                id='tel'
                                label="Telefone *"
                                fullWidth
                                value={props.state.tel}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                error={props.state.stateError == '' ? false : true}
                                helperText={props.state.stateError}
                                id='state'
                                label="Estado *"
                                fullWidth
                                value={props.state.state}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                error={props.state.countyError == '' ? false : true}
                                helperText={props.state.countyError}
                                id='county'
                                label="Cidade *"
                                fullWidth
                                value={props.state.county}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                error={props.state.neighborhoodError == '' ? false : true}
                                helperText={props.state.neighborhoodError}
                                id='neighborhood'
                                label="Bairro *"
                                fullWidth
                                value={props.state.neighborhood}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                error={props.state.addressError == '' ? false : true}
                                helperText={props.state.addressError}
                                id='address'
                                label="Rua *"
                                fullWidth
                                value={props.state.address}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                error={props.state.numberError == '' ? false : true}
                                helperText={props.state.numberError}
                                id='number'
                                label="Número *"
                                fullWidth
                                value={props.state.number}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                style={{ background: "#3498db", color: "#fff", float: 'right' }}
                                variant="contained"
                                onClick={props.handleAdd}>
                                Salvar
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    )
}