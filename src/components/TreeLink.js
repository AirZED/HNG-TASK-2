import classes from "./TreeLink.module.css";

const TreeLink = (props) => {
  return (
    <a
      className={classes.link}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      id={props.id && props.id}
    >
      {props.children}
    </a>
  );
};

export default TreeLink;
