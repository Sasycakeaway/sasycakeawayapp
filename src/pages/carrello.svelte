<Page name="home">
    <!-- Top Navbar -->
    <Navbar sliding={false}>
      <NavTitle sliding>Carrello</NavTitle>
      <NavTitleLarge>Carrello</NavTitleLarge>
    </Navbar>
    <Block>
      <div class="list simple-list contacts-list indexed-list-init">
        <div class="list-group">
          <ul id="cart">
            <li>
            </li>
          </ul>
        </div>
      </div>
      </Block>
      <Block>
        <Button fill href="/prenotazioni/">Conferma l'ordine</Button>
    </Block>
  </Page>
  <script>

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
      Card
    } from 'framework7-svelte';
    let user="prova"


</script>