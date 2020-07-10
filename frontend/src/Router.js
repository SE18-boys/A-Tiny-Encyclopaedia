import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import HomeView from "./view/HomeView";
import DetailsView from "./view/DetailsView";
import {history} from "./utils/history";
import LoginForm from "./components/LoginForm";
import SignUpView from "./view/SignUpView";
import AddEntryView from "./view/AddEntryView";

class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/Details" component={DetailsView} />
                    <Route exact path="/SignUp" component={SignUpView} />
                    <Route exact path="/AddEntry" component={AddEntryView} />
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;
