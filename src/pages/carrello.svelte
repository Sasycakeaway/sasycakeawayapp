<script>
  import {
    Page,
    Navbar,
    NavTitle,
    Block,
    Button,
    List,
    ListItem,
    SwipeoutActions,
    SwipeoutButton
  } from "framework7-svelte";

  let user = "prova";
  let check,transf;
  let prodotti = [];
  let qty = [];
  let transf_raw = [];
  let sub_prodotti;
  let transf_elab = [];
  let tot;
  function removetransf(prod) {
    console.log("OK")
    for(var prodotti of Object.keys(trasformista))
    {
      if(prod==prodotti){
        totale=totale-18
        trasformista[prod]=0
          delete carrello[prodotti]
          document.getElementById(prod).innerHTML=""
          test()
      }else{
      }
    }
  }
  function remove(prod){
    console.log("OK")
    for(var prodotti of Object.keys(carrello))
    {
      if(prod==prodotti){
        if(prod=="Muffin" || prod == "Pasticciotti"){
          totale = totale - 2.5;
        }else if(prod == "Cupcake" || prod == "Zeppole" || prod == "Cannoli siciliani" || prod == "Brownies" ){
          totale = totale - 3;
        }else if(prod == "Benvenuti al Nord"){
          totale=totale-12
        }else if(prod == "Benvenuti al Sud" || prod == "La grande abbuffata" || prod == "Il vegetariano"){
          totale=totale-15
        }else if(prod == "Strudel di mele" || prod == "Pastiera"){
          totale=totale-5.75
        }else if(prod == "Profiteroles"){
          totale=totale-4
        }else if(prod == "Torta su stecco"){
          totale=totale-3.5
        }else{
          totale = totale - 5;
        }
        
        carrello[prodotti]--
        if(carrello[prodotti]==0){
          delete carrello[prodotti]
        }else{
        }
        
      }
  }
  test()
}
  function test(){
    check=JSON.stringify(carrello)
    prodotti = Object.getOwnPropertyNames(carrello)
    qty = Object.values(carrello)
    transf = JSON.stringify(trasformista)
    transf_elab = Object.getOwnPropertyNames(trasformista)
    sub_prodotti = Object.values(trasformista)
    tot = totale
  }
</script>

<Page name="home" on:pageTabShow={test} >
  <Navbar sliding={false}>
    <NavTitle sliding>Carrello</NavTitle>
  </Navbar>
  <Block>
   
    <List mediaList>



          {#if check == "{}" && transf == "{}"}
          <ListItem title="Il carrello è vuoto">
          </ListItem>
          {:else}
          {#each prodotti as prodotti,i}
          <ListItem
              title={prodotti}
              subtitle={"Quantità "+ qty[i]}
            >
              <img slot="media" src={prodotti+".jpg"} width="80" />
              <img slot="after" src="delete.png" width="80" on:click={remove(prodotti)} />
    </ListItem>
            
          {/each}
          {#if transf != "{}" }
          {#each transf_elab as i}
          <div id={i.toString()}>
          <ListItem
          title="Il trasformista"
          
          >
          <img slot="media" src={"trasformista.png"} width="80" />
          <img slot="after" src="delete.png" width="80" on:click={removetransf(i.toString())} />
          </ListItem>
         </div>
          {/each}
         
          {/if}
          {/if}
    </List>
    <div class="list simple-list contacts-list indexed-list-init">
      <div class="list-group">
        <ul id="cart">
          <li />
        </ul>
      </div>
    </div>
    <p id="tot">Totale={tot}€</p>
  </Block>
  <Block>
    {#if check == "{}"}
    <Button fill href="/prenotazioni/" disabled>Conferma l'ordine</Button>
    {:else}
    <Button fill href="/prenotazioni/">Conferma l'ordine</Button>
    {/if}
  </Block>
</Page>
