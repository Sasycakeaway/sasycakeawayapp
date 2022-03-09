<Page name="trasformista">
    <Navbar large sliding={false} backLink="Back">
  
        <NavTitle sliding>Crea il tuo trasformista</NavTitle>
        <NavTitleLarge>Crea il tuo trasformista</NavTitleLarge>
      </Navbar>
      <Block>
      <div align="center">
      <img src="trasformista.png" width="70%"  />
    </div>
</Block>
<div align="center">
<Block><a>Ricorda, puoi selezionare solo 6 ingredienti</a></Block>
</div>
      <List>
        <ListItem> 
          <label class="item-checkbox item-content">
            <input type="checkbox" id="formnord" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Selezione di formaggi misti dal Nord Italia</div>
            </div>
          </label>
        </ListItem>
        <ListItem>        
        <label class="item-checkbox item-content">
          <input type="checkbox" id="affnord" />
          <i class="icon icon-checkbox"></i>
          <div class="item-inner">
            <div class="item-title">Selezione di affettati misti del Nord Italia</div>
          </div>
        </label>
      </ListItem>   
        <ListItem>        
        <label class="item-checkbox item-content">
          <input type="checkbox" id="formsud" />
          <i class="icon icon-checkbox"></i>
          <div class="item-inner">
            <div class="item-title">Selezione di formaggi dal Sud Italia</div>
          </div>
        </label>
      </ListItem> 
        <ListItem>      
           <label class="item-checkbox item-content">
          <input type="checkbox" id="affsud" />
          <i class="icon icon-checkbox"></i>
          <div class="item-inner">
            <div class="item-title">Selezione di affettati misti dal Sud Italia</div>
          </div>
        </label>
      </ListItem>  
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="panelardo" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Bottoncini di pane con lardo</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="focaccia" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Focaccia genovese con patè di olive tagiasche</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="minipiada" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Minipiada al crudo di parma</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="frico" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Tocchetti di frico su pane nero</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="cassatine" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Cassatine siciliane salate</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="baba" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Babà alla crema di pecorino</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="biscottini" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Biscottini salati della casa</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="tette" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Tette delle monache salate</div>
            </div>
          </label>
        </ListItem> 
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="flantoma" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Flan di zucchine con salsa di toma</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="tartellettebacon" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Tartellette alla crema di piselli e bacon croccante</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="riso" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Insalata di riso alla cantonese</div>
            </div>
          </label>
        </ListItem>
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="quiche" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Quiche lorrein</div>
            </div>
          </label>
        </ListItem> 
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="tartelletteverdura" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Tartellette alla crema di parmigiano e verdura di stagione</div>
            </div>
          </label>
        </ListItem> 
        <ListItem>
          <label class="item-checkbox item-content">
            <input type="checkbox" id="brutsalati" />
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Brutti e buoni salati</div>
            </div>
          </label>
        </ListItem>
      </List>
      <Snackbar class="snack" bind:active={snackbar} center timeout={3000}>
        Prodotti aggiunti al carrello
      </Snackbar>
      <Snackbar class="snack" bind:active={snackem} center timeout={3000}>
        Carrello vuoto
      </Snackbar>
      <Block>
      <Button fill on:click={checkino}>Aggiungi al carrello</Button>
    </Block>
</Page>

<script >
  var k=0
  import { Snackbar} from 'svelte-materialify';
  let snackbar = false;
let snackem=false
var cont=0

  var prodotti=["formnord","affnord","formsud","affsud","panelardo", "focaccia", "minipiada", "frico", "cassatine", "baba", "biscottini", "tette", "flantoma", "tartellettebacon", "riso", "quiche","tartelletteverdura", "brutsalati"]
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
function checkino(){
  var contatore=0
  var ingredienti=[]
  for(var i=0;i<prodotti.length;i++){
    if(document.getElementById(prodotti[i]).checked){
      contatore++

    }


  }

  if(contatore>6){
      alert("Hai superato 6 ingredienti, riprova selezionando solo 6 ingredienti")
    }else{
      for(var i=0;i<prodotti.length;i++){

if(contatore<6&&document.getElementById(prodotti[i]).checked==true){
  ingredienti.push(prodotti[i])
}


}
for(var i=0;i<prodotti.length;i++){

document.getElementById(prodotti[i]).checked=false
}
console.log(ingredienti)
if(JSON.stringify(ingredienti)!="[]"){
trasformista[k]=ingredienti
k++
totale=totale+18
snackbar=true
}


    }
if(contatore==0){
  snackem=true
}
}
</script>