<Page name="about">
    <Navbar sliding={false}>
      <NavTitle sliding>Informazioni</NavTitle>
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
        NavTitle,
        Link,
        Block,
        List,
        ListItem,
      } from 'framework7-svelte';
    </script>