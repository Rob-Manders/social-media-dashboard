
import Theme from './context/Theme'
import Container from './components/Container'
import Header from './components/Header'
import Section from './components/Section'
import ThemeToggler from './components/ThemeToggler'
import Followers from './components/Followers'
import Stat from './components/Stat'

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
                  <Stat stat='Page Views' platform='facebook' value={87} prevValue={84} />
                  <Stat stat='Likes' platform='facebook' value={52} prevValue={84} />
                  <Stat stat='Likes' platform='instagram' value={5462} prevValue={84} />
                  <Stat stat='Profile Views' platform='instagram' value={52000} prevValue={84} />
                  <Stat stat='Retweets' platform='twitter' value={117} prevValue={84} />
                  <Stat stat='Likes' platform='twitter' value={507} prevValue={84} />
                  <Stat stat='Likes' platform='youtube' value={107} prevValue={84} />
                  <Stat stat='Total Views' platform='youtube' value={1407} prevValue={84} />
               </Section>
            </div>
         </Container>
      </Theme>
   )
}