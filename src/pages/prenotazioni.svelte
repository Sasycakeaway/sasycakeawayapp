<Page name="prenotazioni">
    <!-- Top Navbar -->
    <Navbar sliding={false} backLink="Back">
      <NavTitle sliding>Sasycakeaway</NavTitle>
      <NavTitleLarge>Sasycakeaway</NavTitleLarge>
    </Navbar>
    <List inlineLabels>
          <ListItem>
            <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Nome</div>
              <div class="item-input-wrap">
                <input type="text" placeholder="Il tuo nome" id="nome" />
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>
        </ListItem>
        <ListItem>
          <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Cognome</div>
            <div class="item-input-wrap">
              <input type="text" placeholder="Il tuo cognome" id="cognome" style="margin-right: -25px;"/>
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
      </ListItem>
      <ListItem>
        <li class="item-content item-input">
        <div class="item-inner">
          <div class="item-title item-label">Email</div>
          <div class="item-input-wrap">
            <input type="text" placeholder="La tua email" id="email"/>
            <span class="input-clear-button"></span>
          </div>
        </div>
      </li>
    </ListItem>
    <ListItem>
      <li class="item-content item-input">
      <div class="item-inner">
        <div class="item-title item-label">Indirizzo</div>
        <div class="item-input-wrap">
          <input type="text" placeholder="L'indirizzo di consegna" id="indirizzo" style="margin-right: -25px;"/>
          <span class="input-clear-button"></span>
        </div>
      </div>
    </li>
  </ListItem>
  <ListItem>
    <li class="item-content item-input">
    <div class="item-inner">
      <div class="item-title item-label">Telefono</div>
      <div class="item-input-wrap">
        <input type="text" placeholder="Il tuo numero di telefono" id="telefono" style="margin-right: -25px;"/>
        <span class="input-clear-button"></span>
      </div>
    </div>
  </li>
</ListItem>
  <ListItem>
    <li class="item-content item-input">
      <div class="item-inner">
        <div class="item-title item-label">Consegna</div>
        <div class="item-input-wrap" >
          <input type="date" id="consegna" placeholder="Consegna" style="margin-left: 15px;" />
        </div>
      </div>
    </li>
  </ListItem>
    <ListItem>
      <li class="item-content item-input">
      <div class="item-inner">
        <div class="item-title item-label">Note</div>
        <div class="item-input-wrap">
          <input type="text" placeholder="Note dell'ordine" id="note" style="margin-right: -25px;"/>
          <span class="input-clear-button"></span>
        </div>
      </div>
    </li>
  </ListItem>
  <ListItem>
    <label class="item-checkbox item-content">
      <input type="checkbox" id="domicilio"/>
      <i class="icon icon-checkbox" ></i>
      <div class="item-inner">
        <div class="item-title">Consegna a domicilio</div>
      </div>
    </label>
    </ListItem>
    </List>
    <Button on:click={manda} href="/conferma/">Ordina</Button>
  </Page>
  <script >

    import {
      Page,
      Navbar,
      NavTitle,
      NavTitleLarge,
      List,
      ListItem,
      Button,
    } from 'framework7-svelte';
    function manda(){
      emailjs.send("service_ccwtjlr","template_q7p6jls",{
      nome: (document.getElementById("nome").value) + " " + (document.getElementById("cognome").value),
      indirizzo: document.getElementById("indirizzo").value,
      phone: document.getElementById("telefono").value,
      prodotti: (JSON.stringify(carrello)) + (JSON.stringify(trasformista)),
      domicilio: document.getElementById("domicilio").checked,
      data: document.getElementById("consegna").value,
      note: document.getElementById("note").value,
      });
      totale=0;
      carrello={}
    }
  </script>