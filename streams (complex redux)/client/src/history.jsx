import createHistory from 'history/createBrowserHistory'


// We are creating a history object that we (right here) can maintain... as opposed to the BrowserRouter creating this
// This allows us to do programatic routing in React Router
export default createHistory()
