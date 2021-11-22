import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase()
    if (loading) {
        return <Spinner animation="border" variant="danger"></Spinner>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }}></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;