<Page name="pastfresca">
    <!-- Top Navbar -->
    <Navbar large sliding={false} backLink="Back">
      <NavTitle sliding>Pasticceria fresca</NavTitle>
      <NavTitleLarge>Pasticceria fresca</NavTitleLarge>
    </Navbar>
    <Block>
      <p>Per lo strudel di mele e la pastiera ogni porzione pesa 250G, se vengono selezionate 2 porzioni verrà fatto un solo strudel da 500G e così via, per richieste specifiche scrivere nelle note dell'ordine</p>
    </Block>
    <List mediaList>
        <ListItem
          title="Zeppole di San Giuseppe"
          after="3€ al pezzo"
          
        >
          <img slot="media" src="Zeppole.jpg" width="80" />
          
          <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Zeppole" class="num"/>
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
  
        </ListItem>
  
       <ListItem
          title="Pastiera Napoletana"
          after="23€ al KG"
        >
          <img slot="media" src="Pastiera.jpg" width="80" />
                  <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Pastiera" class="num"/>
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
        </ListItem> 
  
        <ListItem
          title="Cannoli siciliani"
          after="3€ al pezzo"
          
        >
          <img slot="media" src="Cannoli siciliani.jpg" width="80" />
                  <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Cannoli siciliani" class="num"/>
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
        </ListItem>
  
        <!--<ListItem
        title="Piccidde’t castelluccese"
        after="20€ al KG"
        
      >
        <img slot="media" src="Piccidde't.jpg" width="80" />
                <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Piccidde't" class="num"/>
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
      </ListItem> -->
  
      <ListItem
      title="Pasticciotti Leccesi"
      after="2,5€ al pezzo"
     
    >
      <img slot="media" src="Pasticciotti.jpg" width="80" />
              <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Pasticciotti" class="num"/>
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
    </ListItem>
    <ListItem
    title="Profiteroles"
    after="4€ a porzione di 4"
   
  >
    <img slot="media" src="Profiteroles.jpg" width="80" />
            <div class="stepper stepper-raised stepper-fill stepper-init selettore">
          <div class="stepper-button-minus meno"></div>
          <div class="stepper-input-wrap">
            <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Profiteroles" class="num"/>
          </div>
          <div class="stepper-button-plus piu"></div>
        </div>
  </ListItem>
    <!-- <ListItem
      title="Bonet piemontese"
      after="20€ al KG"
      
      >
      <img slot="media" src="Bonet.jpg" width="80" />
              <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Bonet" class="num" />
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
      </ListItem>
      <ListItem
      title="Tiramisù"
      after="20€ al KG"
      
      >
      <img slot="media" src="Tiramisù.jpg" width="80" />
              <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Tiramisù" class="num"/>
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
      </ListItem>-->
      <ListItem
      title="Strudel tradizionale di Mele "
      after="23€ al KG"
      >
      <img slot="media" src="Strudel di mele.jpg" width="80" />
              <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Strudel di mele" class="num"/>
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
      <Button fill on:click={check} class="butconf" >Aggiungi al carrello</Button>
    </Block>
  </Page>
  <script >
import { Snackbar} from 'svelte-materialify';

let snackbar = false;
   let prodotti=["Zeppole", "Cannoli siciliani","Pasticciotti" , "Strudel di mele","Pastiera" , "Profiteroles"]
   // "Piccidde't",  "Bonet", "Tiramisù" attualmente disabilitato

let snackem=false
var cont=0
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
      switch (prodotti[i]) {
        case "Zeppole":
          console.log("Ci sono")
          totale=totale+(3*document.getElementById(prodotti[i]).value)
          break;
        case "Cannoli siciliani":
          totale=totale+(3*document.getElementById(prodotti[i]).value);
          break;
        case "Pasticciotti":
          totale=totale+(2.5*document.getElementById(prodotti[i]).value);
          break;
        case "Strudel di mele":
          totale=totale+(5.75*document.getElementById(prodotti[i]).value);
          break;
        case "Pastiera":
          totale=totale+(5.75*document.getElementById(prodotti[i]).value);
          break;
        case "Profiteroles":
          totale=totale+(4*document.getElementById(prodotti[i]).value);
          break;
        default:
          break;
      }
      
  }else{}
}
}else{
for(var i=0;i<prodotti.length;i++){
  if(document.getElementById(prodotti[i]).value!=0){ 
    cont++
    carrello[prodotti[i]]=document.getElementById(prodotti[i]).value
    switch (prodotti[i]) {
        case "Zeppole":
          totale=totale+(3*document.getElementById(prodotti[i]).value)
          break;
        case "Cannoli siciliani":
        totale=totale+(3*document.getElementById(prodotti[i]).value);
          break;
        case "Pasticciotti":
        totale=totale+(2.5*document.getElementById(prodotti[i]).value);
        break;
        case "Strudel di mele":
        totale=totale+(5.75*document.getElementById(prodotti[i]).value);
        break;
        case "Pastiera":
        totale=totale+(5.75*document.getElementById(prodotti[i]).value);
        break;
        case "Profiteroles":
          totale=totale+(4*document.getElementById(prodotti[i]).value);
          break;
        default:
          break;
      }
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