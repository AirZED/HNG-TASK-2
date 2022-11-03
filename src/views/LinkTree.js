import { Fragment } from "react";

//importing components for views
import TreeLink from "../components/Link/TreeLink";
import Profile from "../components/Profile/Profile";
import MediaIcons from "../components/Link/MediaIcon";
import RouterLink from "../components/Link/RouterLink";

const LinkTree = (props) => {
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
      <RouterLink href={"/contact"} id="contact">
        Contact Me
      </RouterLink>

      <MediaIcons />
    </Fragment>
  );
  return (
    <Fragment>
      <Profile />
      <main>{links}</main>
    </Fragment>
  );
};

export default LinkTree;
