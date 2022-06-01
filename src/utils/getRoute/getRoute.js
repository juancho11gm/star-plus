function getRoute() {
  const { pathname } = window.location;
  const route = pathname.slice(1).toLocaleLowerCase();
  return route.length === 0 ? '/' : route;
}

export { getRoute };
