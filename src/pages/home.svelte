<Page name="home" >

  <Navbar sliding={false}>
    
    <NavTitle sliding={false}>Sasy's cake away</NavTitle>
  
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
  <Col >  
    <Link href="/fresca/">    
    <Card class="apebox">
      <span slot="header"><img src="./pasticceria.png" width="50px"/></span>
      <span slot="content"><div align="center">P.fresca</div></span>
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
    NavTitle,
    Link,
    Block,
    Row,
    Col,
    Card
  } from 'framework7-svelte';
  let user="prova"
  
</script>