import { BrowserRouter, Link, Route } from "react-router-dom"
import ErrInfo from "./component/ErrInfo/ErrInfo"
import Homepage from "./component/Homepage/Homepage"
import Page from "./component/Page/page"
import Preview from "./component/Preview/Preview"
import Ready from "./component/Ready/Ready"
import Swap from "./component/Swapp/Swap"
import Swapping from "./component/Swapping/Swapping"
function Router(){
    return<BrowserRouter>
        <Route path='/'exact component={Homepage}/>
        <Route path='/page/:id'exact component={Page}/>
        <Route path='/preview/:id'exact component={Preview}/>
        <Route path='/swapping/:id'exact component={Swap}/>
        <Route path='/error'exact component={ErrInfo}/>
        <Route path='/swapping'exact component={Swapping}/>
        <Route path='/ready'exact component={Ready}/>
    </BrowserRouter>
}
export default Router