import Footer from "../../src/components/footer/footer"
import Header from "../../src/components/header/header"

import'../detalhes/detalhes.css'

const Detalhes = () => {
   return(

<>
		<Header />
    <main class="app-main">
        <h1></h1>
        <div class="memory-container">
            <div class="card-imagem"></div>
        </div>
        <div class="texto">
            <p></p>
        </div>
        <p>Carregando memória...</p>
    </main>
    <Footer />
</>
   )
}

export default Detalhes;