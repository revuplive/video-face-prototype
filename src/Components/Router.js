import { BrowserRouter, Link, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ErrInfo from "./ErrInfo/ErrInfo";
import Preview from "./Preview/Preview";
import Ready from "./Ready/Ready";
import Swap from "./Swapp/Swap";
import Swapping from "./Swapping/Swapping";
import Page from "./Page/page";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/page/:id" exact component={Page} />
      <Route path="/preview/:id" exact component={Preview} />
      <Route path="/swapping/:id" exact component={Swap} />
      <Route path="/error" exact component={ErrInfo} />
      <Route path="/swapping" exact component={Swapping} />
      <Route path="/ready" exact component={Ready} />
    </BrowserRouter>
  );
}
export default Router;
