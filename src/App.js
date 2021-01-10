import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Header, Cards, Basket, Details, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const muiTheme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0, sm: 425, md: 550, lg: 900, xl: 1325
            }
        }
    })

    return (
        <ThemeProvider theme={muiTheme}>
            <div className="app">
               <Router>
                    <Header
                    />

                    <Switch>
                        <Route path='/' exact>
                            <Cards
                            />
                        </Route>
        
                        <Route path='/basket' exact>
                            <Basket
                            />
                        </Route>

                        <Route path='/details' exact>
                            <Details
                            />
                        </Route>
                    </Switch>

                    <Footer
                    />
                </Router>
            </div>
        </ThemeProvider>
    )
}

export default App;