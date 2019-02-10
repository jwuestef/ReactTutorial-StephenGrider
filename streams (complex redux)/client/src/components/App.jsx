import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'

import history from '../history'



// Using <Router /> instead of <BrowserRouter /> in order to allow us to control navigation
// Use Switch to limit it to show ONE component at a time, the first route it matches! Otherwise /new and /5 will trigger at the same time
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}



export default App