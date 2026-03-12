import { Link, useRouteError } from "react-router";

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <div className="text-center mt-24">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      {/* <p className="text-xl mt-4">Something went wrong</p> */}

      <p className="text-gray-500 mt-2">
        {error?.statusText || error?.message}
      </p>

      <Link to="/" className="btn btn-primary mt-6">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;