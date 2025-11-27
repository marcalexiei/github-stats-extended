import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import {
  logout as _logout,
  setUserAccess as _setUserAccess,
} from '../../redux/actions/userActions';

import Header from './Header';
import HomeScreen from '../Home';
import { getUserMetadata } from '../../api';
import {
  useIsAuthenticated,
  useUserKey,
} from '../../redux/selectors/userSelectors';

function App() {
  const userKey = useUserKey();
  const isAuthenticated = useIsAuthenticated();

  const dispatch = useDispatch();
  const setUserAccess = (access) =>
    dispatch(_setUserAccess(access.token, access.privateAccess));

  useEffect(() => {
    async function getPrivateAccess() {
      if (userKey && userKey.length > 0) {
        const userAccess = await getUserMetadata(userKey);
        if (userAccess === null) {
          dispatch(_logout());
        } else {
          setUserAccess(userAccess);
        }
      }
    }
    getPrivateAccess();
  }, [userKey]);

  return (
    <div className="h-screen flex flex-col">
      <Router basename="/frontend">
        <Header mode="trends" />
        <section className="bg-white text-gray-700 flex-grow">
          <HomeScreen />
        </section>
      </Router>
    </div>
  );
}

export default App;
