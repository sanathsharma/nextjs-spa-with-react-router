const routePaths = {
  project: {
    root: "/project",
    sub: {
      list: "",
      new: "new",
      view: ":projectId",
      edit: ":projectId/edit"
    },
  },
  about: {
    root: "/about"
  }
} as const;

export const adminRoutePaths = {
  root: "/admin",
  users: {
    root: "user",
    sub: {
      list: "",
      view: ":userId"
    }
  }

} as const;

export default routePaths;