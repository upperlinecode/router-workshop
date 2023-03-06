import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Record<string, string>;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>The page you are looking for is not found</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
