import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import toyotaLogo from "app/assets/toyota-logo.png"
import { AuthProvider } from "~/contexts/AuthContext";
import { BlogProvider } from "~/contexts/BlogContext";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900&display=swap",
  },
];

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TMMIN Engine Plant 3</title>
        <link rel="icon" type="image/png" href="https://www.toyota.co.id/img/tmmin-icon.png" />
        <meta property="og:title" content="TMMIN Engine Plant 3" />
        <meta
          property="og:image"
          content="https://www.toyota.co.id/img/tmmin-icon.png"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return null;
}
