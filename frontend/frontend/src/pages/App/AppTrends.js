import React, { useEffect, useState } from 'react';
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
  const [stage, setStage] = useState(isAuthenticated ? 1 : 0);

  const dispatch = useDispatch();
  const setUserAccess = (access) =>
    dispatch(_setUserAccess(access.token, access.privateAccess));

  useEffect(() => {
    if (isAuthenticated && stage === 0) {
      setStage(1);
    }
  }, [isAuthenticated]);

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
        <Header mode="trends" stage={stage} setStage={setStage} />
        <section className="bg-white text-gray-700 flex-grow">
          <HomeScreen stage={stage} setStage={setStage} />
        </section>
      </Router>
    </div>
  );
}

export default App;
