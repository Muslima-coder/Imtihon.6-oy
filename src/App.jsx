import { CaseSttudies, Header, Hero, HomePages, Ready, Supportive, Utilities } from "./modules"
import Footer from "./modules/footer"



function App(){
  
  return(
  <>
  <Header/>
  <main>
  <Hero/>
  <HomePages/>
  <CaseSttudies/>
  <Supportive/>
  <Utilities/>
  <Ready/>
  </main>
  <Footer/>
  </>
  )
}

export default App


