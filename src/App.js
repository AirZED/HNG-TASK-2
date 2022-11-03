import { Switch, Route } from "react-router-dom";

//importing Components
import Layout from "./components/Layout/Layout";

//importing pages
import LinkTree from "./views/LinkTree";

//importing styles
import classes from "./App.module.css";
import ContactMe from "./views/ContactMe";

function App() {
  return (
    <Layout className={classes.App}>
      <Switch>
        <Route path={"/"} exact>
          <LinkTree />
        </Route>
        <Route path={"/contact"}>
          <ContactMe />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
