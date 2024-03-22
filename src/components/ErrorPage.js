import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const routeError = useRouteError();

  return (
    <section>
      <div>Error Page!!!</div>
      <div>{ routeError.status } : { routeError.statusText }</div>
    </section>
  )
}

export default ErrorPage;