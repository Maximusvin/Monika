import './App.css';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

import dialogs from '../DATA/dialogs.json';
import messages from '../DATA/messages.json';
import posts from '../DATA/posts.json';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Navbar />
        <div className="content">
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
          />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
