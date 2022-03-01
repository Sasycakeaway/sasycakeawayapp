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
          <img slot="media" src="Benvenuti al sud.jpg" width="80" />
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
      <Button fill on:click={check} class="butconf">Conferma la prenotazione</Button>
  
  </Page>
  <script>
  //import {carrello} from './carrello.js'
  
  var prodotti=["Benvenuti al Nord", "Benvenuti al Sud", "La grande abbuffata", "Il vegetariano"]
      import {
        Page,
        Navbar,
        NavLeft,
        NavTitle,
        NavTitleLarge,
        NavRight,
        Link,
        Toolbar,
        Block,
        BlockTitle,
        List,
        ListItem,
        Row,
        Col,
        Button,
        Card,
        Stepper
      } from 'framework7-svelte';
      function check(){
for(var i=0;i<prodotti.length;i++){
if(document.getElementById(prodotti[i]).value!=0){
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
  
    </script>