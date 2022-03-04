<Page name="about">
    <Navbar large sliding={false}>
  
      <NavTitle sliding>Informazioni</NavTitle>
      <NavTitleLarge>Informazioni</NavTitleLarge>
    </Navbar>

    <div align="center">
        <Block>
        <img src="logo.png"/>
    </Block>
    <Block>
    <p>Questa è l'app di Sasy's Cake Away con cui puoi ordinare i tuoi dolci preferiti. 
        Quest'app usa Google Analitics per fini statistici.
    </p>
</Block>
    </div>
    <List simpleList>
        <ListItem>
            <Link href="/privacy" color="black"><p>Informativa sulla privacy</p></Link>
        </ListItem>
        <ListItem>
            <Link href="/info" color="black"><p>Informazioni sull'app</p></Link>
        </ListItem>
    </List>
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
        Card,
        Stepper,
        Toggle,
      } from 'framework7-svelte';
    </script>