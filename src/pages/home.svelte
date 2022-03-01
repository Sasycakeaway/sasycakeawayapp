<Page name="home" >

  <Navbar sliding={false} backLink="Back">
    <NavTitle sliding={false}>Sasy's cake away</NavTitle>
    <NavTitleLarge>Sasy's cake away</NavTitleLarge>
  </Navbar>
  <Block strong>
    <p>Ciao, benvenuto nell'app di Sasy's cake away</p>
  </Block>
  <div align="center">
  <Row>
    <Col >   
      <Link href="/biscotti/">   
      <Card class="biscotti">
        <span slot="header"><img src="./biscuits1.png" width="50px"/></span>
        <span slot="content"><div align="center" >Biscotti</div></span>
    </Card>
  </Link>
  </Col>
    <Col >  
      <Link href="/apebox/">    
      <Card class="apebox">
        <span slot="header"><img src="./box1.png" width="50px"/></span>
        <span slot="content"><div align="center">Apebox</div></span>
    </Card>
  </Link>
  </Col>
  </Row>
</div>
</Page>
<script >

 
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