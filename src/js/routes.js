
import HomePage from '../pages/home.svelte';
import BiscottiPage from '../pages/biscotti.svelte';
import CarrelloPage from '../pages/carrello.svelte';
import ApeboxPage from '../pages/apebox.svelte';
import TrasformistaPage from '../pages/apebox/trasformista.svelte';
import NordPage from '../pages/apebox/nord.svelte';
import SudPage from '../pages/apebox/sud.svelte';
import AbbuffataPage from '../pages/apebox/abbuffata.svelte';
import VegetarianoPage from '../pages/apebox/vegetariano.svelte';
import PrenotazioniPage from '../pages/prenotazioni.svelte';
import ConfermaPage from '../pages/conferma.svelte'
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/biscotti/',
    component: BiscottiPage,
  },
  {
    path: '/carrello/',
    component: CarrelloPage,
  },
  {
    path: '/apebox/',
    component: ApeboxPage,
  },
  {
    path: '/trasformista/',
    component: TrasformistaPage,
  },
  {
    path: '/nord/',
    component: NordPage,
  },
  {
    path: '/sud/',
    component: SudPage,
  },
  {
    path: '/grandeabbuffata/',
    component: AbbuffataPage,
  },
  {
    path: '/vegetariano/',
    component: VegetarianoPage,
  },
  {
    path: '/prenotazioni/',
    component: PrenotazioniPage,
  },
  {
    path: '/conferma/', 
    component: ConfermaPage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
];

export default routes;
