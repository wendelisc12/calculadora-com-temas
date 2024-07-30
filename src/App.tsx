import { GlobalStyle } from "./global"
import { ThemeProvider } from "styled-components"
import whiteTheme from "./themes/white"

function App() {

  return (
   <ThemeProvider theme={whiteTheme}>
    <GlobalStyle/>
    <h1>oi</h1>
   </ThemeProvider>
  )
}

export default App
