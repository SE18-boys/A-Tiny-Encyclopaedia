import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import HomeView from "./view/HomeView";
import DetailsView from "./view/DetailsView";
import {history} from "./utils/history";
import LoginForm from "./components/LoginForm";
import SignUpView from "./view/SignUpView";
import AddEntryView from "./view/AddEntryView";
import ProfileView from "./view/ProfileView";
import AddEntryDetailForm from "./components/AddEntryDetailForm";
import AddEntryDetailView from "./view/AddEntryDetailView";
import UpdateDetailView from "./view/UpdateDetailView";
import EntryAuditsView from "./view/EntryAuditsView";
import AuditDetailsView from "./view/AuditDetailsView";

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
                    <Route exact path="/Profile" component={ProfileView} />
                    <Route exact path="/Details" component={DetailsView} />
                    <Route exact path="/SignUp" component={SignUpView} />
                    <Route exact path="/AddEntry" component={AddEntryView} />
                    <Route exact path="/AddEntryDetail" component={AddEntryDetailView} />
                    <Route exact path="/UpdateEntryDetail" component={UpdateDetailView} />
                    <Route exact path="/EntryAudits" component={EntryAuditsView} />
                    <Route exact path="/AuditsDetails" component={AuditDetailsView} />
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;
