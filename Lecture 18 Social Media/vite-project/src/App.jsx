import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import WelcomeMsg from "./components/WelcomeMsg";
import PostContainer from "./components/PostContainer";
import { useState } from "react";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/PostList";



function App() {

  let [selectedTab, setSelectedTab] = useState("Home");

  
  return (
    <PostListProvider>
      <Header />
        <div className="sidebar">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="Content-body">
            {selectedTab === 'Home' ? <PostContainer /> : <CreatePost /> }
          </div>
        </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
