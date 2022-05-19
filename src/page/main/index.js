import React from 'react';
import {Route, Switch } from 'react-router-dom';
import router from '../../router';
function Mani(props) {
    const showRouter = (router) => {
        var result = null;
        if (router.length > 0) {
            result = router.map((router, index) => {
                return (
                    <Route
                        key={index}
                        path={router.path}
                        exact={router.exact}
                        component={router.mani}
                    />
                )
            })
        }
        return result;
    }
    return (
        <>
            <Switch>
                {showRouter(router)}
            </Switch>
        </>
    );
}

export default Mani;