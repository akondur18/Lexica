
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the import paths as necessary
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import LandingPage from './LandingPage';
import FeedBackPage from './FeedBackPage';
import ListeningPage from './ListeningPage';
import Frame457 from './Frame457';
import Loremipsumodorame from './Loremipsumodorame';
import Pulsatingcircle from './Pulsatingcircle';
import SplitScreen from './SplitScreen';
import SplitScreenWithWords from './SplitScreenWithWords';
import Verification from './Verification';
import YouAreVerified from './YouAreVerified';
import CloneCreation from './CloneCreation';
import Toggle1 from './Toggle1';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button onClick={() => window.location.href = '/Landing'}>Landing</button>
          <button onClick={() => window.location.href = '/signup'}>Home</button>
          <button onClick={() => window.location.href = '/login'}>Log In</button>
          <button onClick={() => window.location.href = '/home'}>Select Your Language</button>
          <button onClick={() => window.location.href = '/feedback'}>Feedback</button>
          <button onClick={() => window.location.href = '/listening'}>Listening</button>
          <button onClick={() => window.location.href = '/split-screen-words'}>Start Recording</button>
          <button onClick={() => window.location.href = '/verification'}>Verification</button>
          <button onClick={() => window.location.href = '/verified'}>You Are Verified</button>
          <button onClick={() => window.location.href = '/clone'}>Clone Creation</button>
        </nav>

        <Routes>
          <Route path="/Landing" element={<LandingPage />} />
          
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/feedback" element={<FeedBackPage />} />
          <Route path="/listening" element={<ListeningPage />} />
          <Route path="/frame457" element={<Frame457 />} />
          <Route path="/lorem" element={<Loremipsumodorame />} />
          <Route path="/pulsating" element={<Pulsatingcircle />} />
          <Route path="/split-screen" element={<SplitScreen />} />
          <Route path="/split-screen-words" element={<SplitScreenWithWords />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verified" element={<YouAreVerified />} />
          <Route path="/clone" element={<CloneCreation />} />
          <Route path="/toggle" element={<Toggle1 />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
// import CloneCreation from './CloneCreation'; // Adjust the path as necessary
// import HomePage from './HomePage';
// import FeedBackPage from './FeedBackPage';
// import SplitScreenWithWords from './SplitScreenWithWords';
// import LandingPage from './LandingPage';
// import LogInPage from './LogInPage';
// import SignUpPage from './SignUpPage';
// import Verification from './Verification';


// const App = () => {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />  {/* Make sure to use JSX here */}
//           <Route path="/split-screen" element={<SplitScreenWithWords />} />  {/* Use JSX here as well */}
//         </Routes>
//       </Router>
//     );
//   };

// export default App;

// */