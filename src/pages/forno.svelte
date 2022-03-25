<Page name="Prodotti da forno">
  <Navbar large sliding={false} backLink="Back">

    <NavTitle sliding>Prodotti da forno</NavTitle>
    <NavTitleLarge>Prodotti da forno</NavTitleLarge>
  </Navbar>
  <Block>
    <!--<p>Ogni sacchetto pesa 250G, ad esempio se vengono ordinati 2 sacchetti ne verra fatto solo uno da 500G e cos� via, per richieste specifiche scrivere nelle note dell'ordine</p>-->
  </Block>
    <List mediaList>
      <ListItem
        title="Cupcake"
        after="3&euro al pezzo"
        
      >
        <img slot="media" src="Cupcake.jpg" width="80" />
        
        <div class="stepper stepper-raised stepper-fill stepper-init selettore">
          <div class="stepper-button-minus meno"></div>
          <div class="stepper-input-wrap">
            <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Cupcake" class="num"/>
          </div>
          <div class="stepper-button-plus piu"></div>
        </div>

      </ListItem>

      <ListItem
        title="Muffin"
        after="2.5&euro al pezzo"
        
      >
        <img slot="media" src="Muffin.jpg" width="80" />
                <div class="stepper stepper-raised stepper-fill stepper-init selettore">
          <div class="stepper-button-minus meno"></div>
          <div class="stepper-input-wrap">
            <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Muffin" class="num"/>
          </div>
          <div class="stepper-button-plus piu"></div>
        </div>
      </ListItem>

      <ListItem
        title="Brownies"
        after="3&euro al pezzo"
        
      >
        <img slot="media" src="Brownies.jpg" width="80" />
                <div class="stepper stepper-raised stepper-fill stepper-init selettore">
          <div class="stepper-button-minus meno"></div>
          <div class="stepper-input-wrap">
            <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Brownies" class="num"/>
          </div>
          <div class="stepper-button-plus piu"></div>
        </div>
      </ListItem>

      <ListItem
      title="Cakepop"
      after="3.5&euro al Kg"
      
    >
      <img slot="media" src="Torta su stecco.jpg" width="80" />
              <div class="stepper stepper-raised stepper-fill stepper-init selettore">
          <div class="stepper-button-minus meno"></div>
          <div class="stepper-input-wrap">
            <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Torta su stecco" class="num"/>
          </div>
          <div class="stepper-button-plus piu"></div>
        </div>
    </ListItem>

    </List>
    
    <Snackbar class="snack" bind:active={snackbar} center timeout={3000}>
      Prodotti aggiunti al carrello
    </Snackbar>
    <Snackbar class="snack" bind:active={snackem} center timeout={3000}>
      Carrello vuoto
    </Snackbar>
    <Block>
    <Button fill on:click={check}  class="butconf" >Aggiungi al carrello</Button>
    
  </Block>
  <!-- The actual snackbar -->

</Page>
<script>
//import {carrello} from './carrello.js'
import { Snackbar} from 'svelte-materialify';
let snackem=false
var cont=0
let snackbar = false;
var prodotti=["Cupcake", "Muffin", "Brownies", "Torta su stecco"]
    import {
      Page,
      Navbar,
      NavTitle,
      NavTitleLarge,
      Block,
      List,
      ListItem,
      Button,
    } from 'framework7-svelte';
function check(){
if(JSON.stringify(carrello)!="{}"){
  for(var i=0;i<prodotti.length;i++){
  if(document.getElementById(prodotti[i]).value!=0){ 
    cont++
    if(carrello[prodotti[i]]==null){
        carrello[prodotti[i]]=parseInt(document.getElementById(prodotti[i]).value)
      }else{
        carrello[prodotti[i]]=parseInt(document.getElementById(prodotti[i]).value) + parseInt(carrello[prodotti[i]])
      }
      if(prodotti[i]=="Cupcake" || prodotti[i]=="Brownies"){
        totale=totale+3
      }else if(prodotti[i]=="Muffin"){
        totale=totale+2.5
      }else{
        totale=totale+3.5
      }
  }else{}
}
}else{
for(var i=0;i<prodotti.length;i++){
  if(document.getElementById(prodotti[i]).value!=0){ 
    carrello[prodotti[i]]=document.getElementById(prodotti[i]).value
    if(prodotti[i]=="Cupcake" || prodotti[i]=="Brownies"){
        totale=totale+3
      }else if(prodotti[i]=="Muffin"){
        totale=totale+2.5
      }else{
        totale=totale+3.5
      }
    cont++
  }else{}
}
}
if (cont>0) {
  snackbar=true
}else{
  snackem=true
}

}
  </script>