<script>
  import {
    Page,
    Navbar,
    NavTitle,
    Block,
    Button,
  } from "framework7-svelte";
  let user = "prova";
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar sliding={false}>
    <NavTitle sliding>Carrello</NavTitle>
  </Navbar>
  <Block>
    <div class="list simple-list contacts-list indexed-list-init">
      <div class="list-group">
        <ul id="cart">
          <li />
        </ul>
      </div>
    </div>
    <p id="tot">Totale={totale}€</p>
  </Block>
  <Block>
    <Button fill href="/prenotazioni/">Conferma l'ordine</Button>
  </Block>
</Page>
