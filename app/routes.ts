import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
  layout("components/layout/Layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/services", "routes/services.tsx"),
    route("/teams", "routes/teams.tsx"),

    ...prefix("/blog", [
      index("routes/blog.tsx"),
      route("/create", "routes/create-blog.tsx"),
      route("/:id", "routes/blog-post.tsx"),
    ]),
  ]),

  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),

  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
