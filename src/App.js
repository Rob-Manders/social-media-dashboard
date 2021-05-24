
import Theme from './context/Theme'
import Container from './components/Container'
import ThemeToggler from './components/ThemeToggler'

export default function App() {
   return (
      <Theme>
         <Container>
            <h1>Social Media Dashboard</h1>
            <p>Test</p>
            
            <ThemeToggler />
         </Container>
      </Theme>
   )
}