import {BrowserRouter , Switch,Route} from "react-router-dom"
import App from "./App"
import Home from "./page/home/Home"
import Blog from "./page/blog/Blog"
import Intro from './page/intro/Intro';
import Scan from './page/scan/Scan';

import Create from './page/admin/Create';
import EditComponent from './component/EditComponent'
import LoginComponent from './component/LoginComponent'
import NotFound from './page/NotFound/NotFound404'

import AdminRoute from "./AdminRoute"

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/intro" exact component={Intro}/>
                <Route path="/intro/blog/:slug" exact component={Blog}/>
                <Route path="/scan" exact component={Scan}/>

                <AdminRoute path="/create" exact component={Create}/>
                <AdminRoute path="/intro/blog/edit/:slug" exact component={EditComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;