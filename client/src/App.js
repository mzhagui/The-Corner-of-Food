import './App.css';

import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Posts from './screens/Posts';
import PostCreate from './screens/PostCreate';
import PostDetail from './screens/PostDetail';
import PostEdit from './screens/PostEdit'

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from './services/auth';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
        <Route path='/posts/:id/edit'>
        {currentUser ? <PostEdit currentUser={currentUser} /> : <Redirect to="/login" />}
      </Route>
        <Route path='/posts/new'>
          <PostCreate />
        </Route>
        <Route path='/posts/:id'>
          <PostDetail/>
        </Route>
        <Route path='/posts'>
        <Posts  />
      </Route>
          <Route exact path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
         <Route exact path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer/> 
          </Route> 
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
