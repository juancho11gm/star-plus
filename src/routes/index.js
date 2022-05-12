import { getRoute } from '../utils/getRoute';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';

const routes = {
  '/': { title: 'Star+ Home', render: Home },
  404: { title: 'Star+ 404', render: Error404 },
};

const router = () => {
  const { body } = document;

  const route = getRoute();
  const view = routes[route] || routes[404];
  document.title = view.title;
  body.innerHTML = view.render();
};

export default router;
