import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <div className="app-header">
        {user ? <CreatePost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
