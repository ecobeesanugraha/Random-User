import './index.css'
import Navbar from './components/Navbar'
import UserCard from './components/Users/UserCard'

const App = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <UserCard />
      </main>
    </>
  )
}

export default App
