import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouters } from './routers';
import MasterLayout from './components/layout/MasterLayout';

import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <Routes>
                {publicRouters.map((route, index) => {
                    let Children = route.component;
                    let Page;
                    if (route.layout != null) {
                        Page = Page.layout;
                    } else Page = MasterLayout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Page>{<Children />}</Page>}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
