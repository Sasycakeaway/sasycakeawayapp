<App { ...f7params } themeDark>

 <!-- Views/Tabs container -->
 <Views tabs class="safe-areas">
  <!-- Tabbar for switching views-tabs -->
  <Toolbar tabbar labels bottom class="pagine">
    <Link tabLink="#view-home" tabLinkActive iconIos="f7:house" iconAurora="f7:house" iconMd="f7:house" text="Home" />
    <Link tabLink="#view-carrello"  iconIos="f7:cart" iconAurora="f7:cart" iconMd="f7:cart" text="Carrello" on:click={prova}/>
    <Link tabLink="#view-contatti" iconIos="f7:map" iconAurora="f7:map" iconMd="f7:map" text="Contatti"/>
  </Toolbar>

  <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
  <View id="view-home" main tab tabActive url="/" />
  <View id="view-carrello" tab url="/carrello/" />
  <View id="view-contatti" tab url="/contatti/" />


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

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
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
  function prova(){
    document.getElementById('cart').innerHTML="";
    if(Object.keys(carrello).length==0&&Object.keys(trasformista).length==0){
      var node = document.createElement('li');
node.appendChild(document.createTextNode('Il carrello è vuoto'));

document.getElementById('cart').appendChild(node);
}else{
for(var i=0;i<Object.keys(carrello).length;i++){
  var nome=Object.getOwnPropertyNames(carrello)[i]
  var img = document.createElement('img');
  img.src = Object.getOwnPropertyNames(carrello)[i] + '.jpg';
  img.width="40"
  img.className="imgcar"
var node = document.createElement('li');
node.id=Object.getOwnPropertyNames(carrello)[i]+"car"
node.appendChild(document.createTextNode(Object.getOwnPropertyNames(carrello)[i]));
node.appendChild(img);
var img = document.createElement('img');
  img.src = 'delete.png';
  img.width="70"
  img.className="cestino"
  img.id=Object.getOwnPropertyNames(carrello)[i]
  img.setAttribute("onclick", "pop(this)")
  node.appendChild(img);
document.getElementById('cart').appendChild(node);

}
if(Object.keys(trasformista).length!=0){
  for(var i=0;i<Object.keys(trasformista).length;i++){
  var nome="Il trasformista"
  var img = document.createElement('img');
  img.src = "trasformista.png"
  img.width="40"
  img.className="imgcar"
var node = document.createElement('li');
node.id=Object.getOwnPropertyNames(trasformista)[i]
node.appendChild(document.createTextNode("Il trasformista"));
node.appendChild(img);
var img = document.createElement('img');
  img.src = 'delete.png';
  img.width="70"
  img.className="cestino"
  img.id=Object.getOwnPropertyNames(trasformista)[i]
  img.setAttribute("onclick", "pop(this)")
  node.appendChild(img);
document.getElementById('cart').appendChild(node);

}
}
}
  }
</script>