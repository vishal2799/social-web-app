import './App.css';
import { Routes, Route } from 'react-router-dom'
import AuthContextProvider from './Context/Auth/AuthContext'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'
import Profile from './routes/Profile/Profile'
import Stories from './routes/Stories/Stories'
import NoMatch from './routes/NoMatch/NoMatch'
import Search from './routes/Search/Search'
import User from "./containers/User/User";
import Users from "./routes/Users/Users";
import Friends from './routes/Friends/Friends'
import Friend from './routes/Friends/Friend/Friend'
import Settings from './routes/Settings/Settings'
import AccountInformation from './routes/Settings/Account-Information/Account-Information';

function App() {

  return (
    <AuthContextProvider>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="stories" element={<Stories />} />
      <Route path="settings" element={<Settings />}/>
      <Route path="account-information" element={<AccountInformation />} />
      <Route path="search" element={<Search />} />
      <Route path="friends" element={<Friends />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an friend</p>
          </main>
        }
      />
      <Route path=":friendId" element={<Friend />} />
      </Route>
      <Route path="users/:userId" element={<User />} />
       {/* <Route path="users" element={<Users />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an User</p>
          </main>
        }
      />
      <Route path=":userId" element={<User />} /> 
      </Route> */}
      <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
