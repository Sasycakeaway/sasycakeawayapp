<Page name="ingredienti" >

    <Navbar sliding={false} backLink="Back">
      <NavTitle sliding={false}>Ingredienti</NavTitle>
    </Navbar>
    <iframe
			src="pdfjs/web/viewer.html?file=/ingredienti.pdf"
            width="410"
            height="800"
			style="border: none;"
            title="Ingredienti"
		/>
  </Page>
  <script >

    import {
      Page,
      Navbar,
      NavTitle,
      Block,
    } from 'framework7-svelte';
    let user="prova"
    
  </script>