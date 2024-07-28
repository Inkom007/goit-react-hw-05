import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Page not found...</p>
      <NavLink to="/">Back to home page. </NavLink>
    </div>
  );
};

export default NotFoundPage;
