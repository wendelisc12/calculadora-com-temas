import { Container, GlobalStyle } from "./global"
import { ThemeProvider } from "styled-components"
import whiteTheme from "./themes/white"
import blueTheme from "./themes/blue"
import purpleTheme from "./themes/purple"
import Header from "./containers/Header/Header"
import { useState } from "react"
import Calculadora from "./containers/Calculadora/Calculadora"

function App() {
  const [tema, setTema] = useState(whiteTheme)

  const temaEscolhido = (theme:string) => {
    setTema(theme == 'whiteTheme' ? whiteTheme : theme == 'blueTheme' ? blueTheme : purpleTheme)
  }

  return (
   <ThemeProvider theme={tema}>
    <GlobalStyle/>

    <Container>
      <Header temaEscolhido={temaEscolhido}/>
      <Calculadora />
    </Container>

   </ThemeProvider>
  )
}

export default App
