import {BrowserRouter , Switch,Route} from "react-router-dom"
import App from "./App"
import Home from "./page/home/Home"
import Blog from "./page/blog/Blog"
import Intro from './page/intro/Intro';
import Scan from './page/scan/Scan';
;




const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/intro" exact component={Intro}/>
                <Route path="/intro/blog" exact component={Blog}/>
                <Route path="/scan" exact component={Scan}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;