<Page name="home" >

  <Navbar sliding={false}>
    
    <NavTitle sliding={false}>Sasy's cake away</NavTitle>
  
  </Navbar>
  <Block strong>
    <p>Ciao, benvenuto nell'app di Sasy's cake away</p>
  </Block>
  <div align="center">
    <Swiper navigation speed={500} slidesPerView={2} spaceBetween={20}>
      <SwiperSlide> 
        <Link href="/biscotti/">   
        <Card class="biscotti">
          <span slot="header"><img src="./biscuits1.png" width="50px" /></span>
          <span slot="content"><div align="center" >Biscotti</div></span>
      </Card>
    </Link>
  </SwiperSlide>
      <SwiperSlide> 
        <Link href="/apebox/">    
        <Card class="apebox">
          <span slot="header"><img src="./box1.png" width="50px"/></span>
          <span slot="content"><div align="center">Apebox</div></span>
      </Card>
    </Link>
  </SwiperSlide>
      <SwiperSlide>
        <Link href="/fresca/">    
          <Card class="biscotti">
            <span slot="header"><img src="./pasticceria.png" width="50px" class="pastimg"/></span>
            <span slot="content">
              <div align="center">Pasticceria fresca

              </div>
            </span>
        </Card>
      </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/forno/">   
        <Card class="biscotti">
          <span slot="header"><img src="./iconcup.png" width="50px" class="imgf" /></span>
          <span slot="content"><div align="center" >Prodotti da forno</div></span>
      </Card>
    </Link>
  </SwiperSlide>
    </Swiper>
  <Row>

    <Col >  
     
  </Col>
  <Col >  
    
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
    Card,
    Swiper,
    SwiperSlide,
    BlockTitle
  } from 'framework7-svelte';
  let user="prova"
  
</script>