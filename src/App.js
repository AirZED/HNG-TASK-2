import { Fragment } from "react";

//importing components
import TreeLink from "./components/TreeLink";
import Profile from "./components/Profile";
import MediaIcons from "./components/MediaIcon";

//importing styles
import classes from "./App.module.css";
import Footer from "./components/Footer";

function App() {
  //links shortened
  const links = (
    <Fragment>
      <TreeLink href="https://twitter.com/Mfonisoh1">Twitter Link</TreeLink>
      <TreeLink href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </TreeLink>
      <TreeLink href="http://books.zuri.team" id="books">
        Zuri Books
      </TreeLink>
      <TreeLink
        href="https://books.zuri.team/python-for-beginners?ref_id=MfonisoUkpabio"
        id="book__python"
      >
        Python Books
      </TreeLink>
      <TreeLink href="https://backgroundcheck.zuri.team/">
        Background Check for Coders
      </TreeLink>
      <TreeLink href="https://books.zuri.team/design-rules">
        Design Books
      </TreeLink>
      <MediaIcons />
    </Fragment>
  );
  return (
    <div className={classes.App}>
      <Profile />
      <main>{links}</main>
      <Footer />
    </div>
  );
}

export default App;
