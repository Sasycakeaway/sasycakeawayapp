<Page name="pasticceria">
    <Navbar large sliding={false} backLink="Back">
  
      <NavTitle sliding>Apebox</NavTitle>
      <NavTitleLarge>Apebox</NavTitleLarge>
    </Navbar>
      <List mediaList>
        <ListItem
            link="/nord/"
          title="Benvenuti al nord"
          after="12€"
          text="Formaggi e affettati del Nord, pane con lardo, focaccia genovese con patè di olive, piada al crudo di parma e tocchetti di frico su pane nero"
        >
          <img slot="media" src="Benvenuti al Nord.jpg" width="80" />
          
          <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Benvenuti al Nord" />
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
  
        </ListItem>
        <ListItem
        link="/sud/"
          title="Benvenuti al sud"
          after="15€"
         text="Formaggi e affettati dal Sud, cassatine salate, babà con pecorino,zeppole salate, biscotti salati e tette delle monache salate"
        >
          <img slot="media" src="Benvenuti al Sud.jpg" width="80" />
                  <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Benvenuti al Sud" />
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
        </ListItem>
        <ListItem
        link="/grandeabbuffata/"
          title="La grande abbuffata"
          after="15€"
          text="Affettati e formaggi misti, flan di zucchine con salsa di toma, biscottini salati, tartellette alla crema di piselli e bacon, insalata di riso alla cantonese e Quiche Lorrein"
        >
          <img slot="media" src="La grande abbuffata.jpg" width="80" />
                  <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="La grande abbuffata" />
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
        </ListItem>
        <ListItem
        link="/vegetariano/"
        title="Il vegetariano"
        after="12€"
        text="Formaggi misti, flan di zucchine con salsa di toma, babà con pecorino, tartelline alla crema di parmigiano, verdura di stagione e brutti e buoni salati"
      >
        <img slot="media" src="Il vegetariano.jpg" width="80" />
                <div class="stepper stepper-raised stepper-fill stepper-init selettore">
            <div class="stepper-button-minus meno"></div>
            <div class="stepper-input-wrap">
              <input type="text" value="0" min="0" max="100" step="1" autorepeat={false} wraps={false}  id="Il vegetariano" />
            </div>
            <div class="stepper-button-plus piu"></div>
          </div>
      </ListItem>
      <ListItem
      link="/trasformista/"
      title="Il trasformista"
      after="18€"
      text="Crea il tuo box"
    >
      <img slot="media" src="trasformista.png" width="80" />
    </ListItem>
      </List>
      <Snackbar class="snack" bind:active={snackbar} center timeout={3000}>
        Prodotti aggiunti al carrello
      </Snackbar>
      <Snackbar class="snack" bind:active={snackem} center timeout={3000}>
        Carrello vuoto
      </Snackbar>
      <Block>
      <Button fill on:click={check} class="butconf">Conferma la prenotazione</Button>
    </Block>
  </Page>
  <script>
  //import {carrello} from './carrello.js'
  import { Snackbar} from 'svelte-materialify';

let snackbar = false;
let snackem=false
var cont=0
  var prodotti=["Benvenuti al Nord", "Benvenuti al Sud", "La grande abbuffata", "Il vegetariano"]
      import {
        Page,
        Navbar,
      
        NavTitle,
        NavTitleLarge,

        List,
        ListItem,
      
        Button,
        Block
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
    case "Benvenuti al Nord":
      totale=totale+(12*document.getElementById(prodotti[i]).value)
      break;
    case "Benvenuti al Sud":
      totale=totale+(15*document.getElementById(prodotti[i]).value)
      break;
    case "La grande abbuffata":
      totale=totale+(15*document.getElementById(prodotti[i]).value)
      break;
    case "Il vegetariano":
      totale=totale+(15*document.getElementById(prodotti[i]).value)
      break;
    default:
      break;
  }

}
  }
 
}
else{
for(var i=0;i<prodotti.length;i++){
if(document.getElementById(prodotti[i]).value!=0){
  cont++
  carrello[prodotti[i]]=document.getElementById(prodotti[i]).value
  switch (prodotti[i]) {
    case "Benvenuti al Nord":
      totale=totale+(12*document.getElementById(prodotti[i]).value)
      break;
    case "Benvenuti al Sud":
      totale=totale+(15*document.getElementById(prodotti[i]).value)
      break;
    case "La grande abbuffata":
      totale=totale+(15*document.getElementById(prodotti[i]).value)
      break;
    case "Il vegetariano":
      totale=totale+(15*document.getElementById(prodotti[i]).value)
      break;
    default:
      break;
  }
}
}

}
if (cont>0) {
  snackbar=true
}else{
  snackem=true
}
}
</script>