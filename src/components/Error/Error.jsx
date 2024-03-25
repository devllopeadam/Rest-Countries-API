import { Link, useRouteError } from "react-router-dom";
import "./error.scss";

import { motion } from "framer-motion";

const Error = () => {
  const error = useRouteError();

  return (
    <motion.div
      animate={{
        x: 30,
        y: 0,
        scale: 1,
        rotate: 0,
      }}>
      <div className="error">
        <h1>{error.message}</h1>

        <Link to={"/"}>Return To The Home Page</Link>
      </div>
    </motion.div>
  );
};

export default Error;
