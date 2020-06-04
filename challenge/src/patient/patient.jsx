import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import PageHeader from '../template/pageHeader'
import PatientForm from './patientForm'

const URL = ' https://q3u8t2ztl1.execute-api.sa-east-1.amazonaws.com/default/patient'
var editEmail = ''
var loading = false


export default class Patient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            sex: 'F',
            weight: '',
            height: '',
            tel: '',
            address: '',
            number: '',
            neighborhood: '',
            county: '',
            state: '',
            emailError: '',
            nameError: '',
            sexError: '',
            weightError: '',
            heightError: '',
            telError: '',
            addressError: '',
            numberError: '',
            neighborhoodError: '',
            countyError: '',
            stateError: '',
        }

        if (this.props.params.email) {
            this.state.email = this.props.params.email
            editEmail = this.state.email
            this.handleEdit(this.state.email)
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        var contemErr = false
        const dados = this.state
        var email = dados.email

        let entries = Object.entries(dados);
        var count = 0;

        for (const [idx, url] of Object.entries(dados)) {
            count++

            var include = idx.includes("Error");

            if (!include) {
                var erroridx = idx + 'Error'
                if (this.state[idx] === "") {
                    this.state[erroridx] = "Obrigatório."
                    this.setState({ ...this.state })
                    contemErr = true
                }else{
                    this.state[erroridx] = ""
                    this.setState({ ...this.state })
                }
            }

            if (count == entries.length) {
                if (!contemErr) {
                    loading = true
                    axios.post(`${URL}/getbyemail`, { email })
                        .then((res) => {
                            if (editEmail === undefined) {
                                console.log("if editEmail == ''");
                                if (res.data.data.Item) {
                                    loading = false
                                    this.setState({ ...this.state, emailError: "O e-mail informado já existe em outro paciente." })
                                } else {
                                    axios.post(URL, dados)
                                        .then(res => {
                                            loading = false
                                            document.location.href = '#/list';
                                        })
                                        .catch(err => {
                                            loading = false
                                            console.log(err)
                                        })
                                }
                            } else {
                                axios.post(URL, dados)
                                    .then(res => {
                                        loading = false
                                        document.location.href = '#/list';
                                    })
                                    .catch(err => {
                                        loading = false
                                        console.log(err)
                                    })
                            }
                        })
                        .catch(err => {
                            loading = false
                            console.log(err)
                        })
                }
            }
        }
    }

    handleChange(event) {
        console.log(event);
        console.log(event.target);

        const target = event.target;

        const value = target.value;
        const name = target.id || target.name;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleEdit(email) {
        loading = true
        axios.post(`${URL}/getbyemail`, { email })
            .then((res) => {
                loading = false
                this.state = res.data.data.Item
                this.setState({ ...this.state })
            })
            .catch(err => {
                loading = false
                console.log(err)
            })
    }

    render() {

        if (this.state.toList === true) {
            return <Redirect to='#/list' />
        }

        if (editEmail !== this.props.params.email) {
            editEmail = this.props.params.email
            if (this.props.params.email == undefined) {
                this.state = {
                    email: '',
                    name: '',
                    sex: 'F',
                    weight: '',
                    height: '',
                    tel: '',
                    address: '',
                    number: '',
                    neighborhood: '',
                    county: '',
                    state: '',
                    emailError: '',
                    nameError: '',
                    sexError: '',
                    weightError: '',
                    heightError: '',
                    telError: '',
                    addressError: '',
                    numberError: '',
                    neighborhoodError: '',
                    countyError: '',
                    stateError: '',
                }
            }
        }

        return (
            <div>
                <Backdrop style={{zIndex: 99}} open={loading}>
                    <CircularProgress color="primary" />
                </Backdrop>
                <PageHeader name='Paciente' small='Cadastro'></PageHeader>
                <PatientForm
                    edit={this.props.params.email == undefined ? false : true}
                    state={this.state}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
            </div>
        )
    }
}



