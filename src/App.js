
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './Components/Login/Login'
import UserDetails from './Components/UserDetails/UserDetails'
import UsersList from './Components/UsersList/UsersList'
import Header from './Components/Header/Header'

// import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/users-list' element={<UsersList />} />
        <Route path='/users-list/:name' element={<UserDetails />} />
        {/* <Route path='details' element={< />} /> */}
        {/* </Route>         */}
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </div>
  )
}

export default App
