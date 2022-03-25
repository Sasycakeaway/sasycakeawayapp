<Page name="home" >

  <Navbar sliding={false}>
    
    <NavTitle sliding={false}>Sasy's cake away</NavTitle>
  
  </Navbar>
  <Block strong>
    <p>Ciao, benvenuto nell'app di Sasy's cake away</p>
  </Block>

          <Row>
      <Col>        
          <Link href="/biscotti/">   
        <Card class="biscotti ali" width="64px">
          <span slot="header">
              <img src="./biscuits1.png" width="50px" class="biscimg" />
              </span>
          <span slot="content">
              <div align="center" >Biscotti</div>
              </span>
      </Card>
    </Link>
    </Col>
      <Col>        
          <Link href="/apebox/">    
        <Card class="biscotti">
          <span slot="header">
              <img src="./box1.png" width="50px" class="apeimg"/>
              </span>
          <span slot="content"><div align="center">Apebox</div></span>
      </Card>
   
 </Link>
 </Col>
 </Row>
  




 <Row>

<Col>
        <Link href="/fresca/">    
          <Card class="biscotti ali">
            <span slot="header">
      
                <img src="./pasticceria.png" width="50px" class="pastimg"/>
            
                </span>
            <span slot="content">
              <div align="center">
                  Pasticceria fresca
                  
              </div>
            </span>
        </Card>
      </Link>
      </Col>


      <Col>
        <Link href="/forno/">   
        <Card class="biscotti">
          <span slot="header">
              <img src="./iconcup.png" width="50px" class="imgf" />
              </span>
          <span slot="content">
              <div align="center" ><a href="#" style="font-size: 13px;">Prodotti da forno</a></div>
              </span>
      </Card>
    </Link>
 </Col>


 </Row>







<h4>&nbsp;</h4>
<Block>
<Button fill href="/ingredienti">Elenco degli ingredienti</Button>
</Block>
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
    Card,
    Swiper,
    SwiperSlide,
    Button
  } from 'framework7-svelte';
  let user="prova"
  
</script>