import { Container, GlobalStyle } from "./global"
import { ThemeProvider } from "styled-components"
import whiteTheme from "./themes/white"
import Header from "./containers/header/Header"

function App() {

  return (
   <ThemeProvider theme={whiteTheme}>
    <GlobalStyle/>

    <Container>
      <Header/>
    </Container>

   </ThemeProvider>
  )
}

export default App
