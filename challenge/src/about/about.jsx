import React from 'react'
import PageHeader from '../template/pageHeader'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

export default props => (
    <div>
        <PageHeader name='Sobre o Desafio'></PageHeader>
        <CssBaseline />
        <Container maxWidth="md">
            <h1>
                Development challenge
            </h1>
            <p>Medcloud's challenge for the general development internship vacancy.</p>
            <h2>
                Goal
            </h2>
            <div style={{ marginLeft: '23px' }}>
                <p><DoneIcon style={{ fontSize: '15px' }} /> To develop a web application to insert and list patient's information using a cloud database.</p>
            </div>
            <h2>
                Required
            </h2>
            <div style={{ marginLeft: '23px' }}>
                <p><DoneIcon style={{ fontSize: '15px' }} /> You need to develop both the front-end and the back-end.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> In the front-end you MUST use React.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> In the back-end you MUST use the AWS free-tier.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> The patient data should not be static or local.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> AWS DynamoDB as database.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> AWS Lambda for serveless computing.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> AWS API Gateway for managing your REST API.</p>
            </div>
            <h2>
                Extra Points
            </h2>
            <div style={{ marginLeft: '23px' }}>
                <p><CloseIcon style={{ fontSize: '15px' }} /> Cache the data in-browser.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> Edit and delete operations.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> Use Material UI.</p>
                <p><DoneIcon style={{ fontSize: '15px' }} /> A cool design.</p>
            </div>
        </Container>
    </div>

)