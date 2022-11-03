import { Link } from "react-router-dom";

//imported styles
import classes from "./TreeLink.module.css";

const RouterLink = (props) => {
  return (
    <Link className={classes.link} to={props.href} id={props.id && props.id}>
      {props.children}
    </Link>
  );
};

export default RouterLink;
