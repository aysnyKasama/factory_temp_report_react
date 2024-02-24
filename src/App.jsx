import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Views/Header_serch';
import Papers from './Views/Papers';
import './App.css';

function App() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Papers />
            </Container>
        </div>
    );
}

export default App;
