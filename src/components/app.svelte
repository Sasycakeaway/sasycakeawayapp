<App { ...f7params } >

 <!-- Views/Tabs container -->
 <Views tabs class="safe-areas">
  <!-- Tabbar for switching views-tabs -->
  <Toolbar tabbar labels bottom class="pagine">
    <Link tabLink="#view-home" tabLinkActive iconIos="f7:house" iconAurora="f7:house" iconMd="f7:house" text="Home" />
    <Link tabLink="#view-carrello"  iconIos="f7:cart" iconAurora="f7:cart" iconMd="f7:cart" text="Carrello" on:click={prova}/>
    <Link tabLink="#view-contatti" iconIos="f7:map" iconAurora="f7:map" iconMd="f7:map" text="Contatti"/>
    <Link tabLink="#view-info" iconIos="f7:info_circle" iconAurora="f7:info_circle" iconMd="f7:info_circle" text="Informazioni"/>
  </Toolbar>

  <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
  <View id="view-home" main tab tabActive url="/" />
  <View id="view-carrello" tab url="/carrello/" />
  <View id="view-contatti" tab url="/contatti/" />
  <View id="view-info" tab url="/about/" />

</Views>

</App>
<script>

  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';
  import {
    f7,
    f7ready,
    App,
    View,
    Link,
    Toolbar, 
    Views,
  } from 'framework7-svelte';
  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';
  
  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'Sasys cake away', // App name
    theme: 'auto', // Automatic theme detection


    id: 'io.andrea055.sasycakeaway', // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,

    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  onMount(() => {
    f7ready(() => {

      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
  if(navigator.onLine){
 } else {
  alert('Il tuo dispositivo è offline, tutti gli ordini eseguiti non verranno registrati e le immagini dei prodotti non verranno visualizzate correttamente.');
 }
  function prova(){
  }
</script>