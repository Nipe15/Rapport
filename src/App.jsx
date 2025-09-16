import { useState } from 'react'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { ContentWrapper } from './Components/ContentWrapper/ContentWrapper.jsx'
import { Header } from "./Components/Header/Header.jsx"
import { Footer } from './Components/Footer/Footer.jsx'
import GlobalStyles from './GlobalStyles.js'

function App() {
  return (
    <>
      <GlobalStyles />
        <ContentWrapper>
            <Header />
              <AppRouter>
              
              </AppRouter>
            <Footer />
        </ContentWrapper>
    </>
  )
}

export default App
