export class Router {

  routes = {}

  add(routeName, page, backgroundPath) {
    this.routes[routeName] = page
    this.background = backgroundPath;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, "", event.target.href);
  
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    this.changeBackground();
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    });
  };

  changeBackground() {
    const { pathname } = window.location;

    const { body } = document;

    switch (pathname) {

      case '/':
        body.className = 'home';
      break;

      case '/universe':
        body.className = 'universe-img-background';
      break;

      case '/exploration':
        body.className = 'exploration-img-background';
      break;

      default:
        body.className = '';
       break;
    }
  }
}