import { Router } from './router.js';

const router = new Router()

router.add('/', '/views/home.html')
router.add('/universe', '/views/universe.html')
router.add('/exploration', '/views/exploration.html')

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();