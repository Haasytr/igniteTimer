import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
