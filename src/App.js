
import Theme from './context/Theme'
import Container from './components/Container'
import Header from './components/Header'
import Section from './components/Section'
import ThemeToggler from './components/ThemeToggler'
import Followers from './components/Followers'

export default function App() {
   return (
      <Theme>
         <Container>
            <div className='content'>
               <Header>
                  <ThemeToggler />
               </Header>
               <Section type='followers'>
                  <Followers platform='facebook' handle='@nathanf' followers={1987} prevFollowers={1975} />
                  <Followers platform='twitter' handle='@nathanf' followers={1044} prevFollowers={945} />
                  <Followers platform='instagram' handle='@realnathanf' followers={11000} prevFollowers={9901} />
                  <Followers platform='youtube' handle='Nathan F.' followers={8239} prevFollowers={9084} />
               </Section>
               <h2>Overview - Today</h2>
               <Section type='overview'>
                  
               </Section>
            </div>
         </Container>
      </Theme>
   )
}