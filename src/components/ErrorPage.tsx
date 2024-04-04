import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const routeError: any = useRouteError();

  return (
    <section>
      <div>Error Page!!!</div>
      <div>{ routeError?.status } : { routeError?.statusText }</div>
    </section>
  )
}

export default ErrorPage;