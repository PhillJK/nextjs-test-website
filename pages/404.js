import Link from "next/link";
import classes from "../styles/error.module.css";

export default function ErrorPage() {
  return (
    <div className={classes.error}>
      <h1 className={classes.error_name}>Error: 404</h1>
      <p className={classes.error_desc}>
        Client error. Please, verify the url address or go back to the{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
}
