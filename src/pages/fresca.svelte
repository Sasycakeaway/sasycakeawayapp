<Page name="pastfresca">
    <!-- Top Navbar -->
    <Navbar large sliding={false} backLink="Back">
      <NavTitle sliding>Sasycakeaway</NavTitle>
      <NavTitleLarge>Sasycakeaway</NavTitleLarge>
    </Navbar>
    <List mediaList>
        <ListItem
          title="Zeppole di San Giuseppe"
          after="20€ al KG"
          
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
          after="20€ al KG"
          
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
          after="20€ al KG"
          
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
  
        <ListItem
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
      </ListItem>
  
      <ListItem
      title="Pasticciotti Leccesi"
      after="20€ al KG"
     
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
      </ListItem>
      <ListItem
      title="Strudel tradizionale di Mele "
      after="20€ al KG"
      
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
      <Button fill on:click={check} class="butconf" >Aggiungi al carrello</Button>
  
  </Page>
  <script >
  
   let prodotti=["Zeppole", "Pastiera", "Cannoli siciliani", "Piccidde't", "Pasticciotti", "Bonet", "Tiramisù", "Strudel di mele"]
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
      ListInput
    } from 'framework7-svelte';
    function check(){
if(JSON.stringify(carrello)!="{}"){
  for(var i=0;i<prodotti.length;i++){
      
  if(document.getElementById(prodotti[i]).value!=0){ 
    if(carrello[prodotti[i]]==null){
        carrello[prodotti[i]]=parseInt(document.getElementById(prodotti[i]).value)
      }else{
        carrello[prodotti[i]]=parseInt(document.getElementById(prodotti[i]).value) + parseInt(carrello[prodotti[i]])
      }
    totale=totale+(5*document.getElementById(prodotti[i]).value)
  }else{}
}
}else{
for(var i=0;i<prodotti.length;i++){
  if(document.getElementById(prodotti[i]).value!=0){ 
    carrello[prodotti[i]]=document.getElementById(prodotti[i]).value
    totale=totale+(5*document.getElementById(prodotti[i]).value)
  }else{}
}
}
}
  </script>