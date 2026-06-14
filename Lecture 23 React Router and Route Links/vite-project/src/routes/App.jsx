import "./App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import WelcomeMsg from "../components/WelcomeMsg";
import PostContainer from "../components/PostContainer";
import { Outlet, useLocation } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import PostListProvider from "../store/PostList";


function App() {
  const location = useLocation();

  return (
    <PostListProvider>
      <Header />
      <div className="sidebar">
        <Sidebar />
        <div className="Content-body">
          <Outlet></Outlet>
          {/* {location.pathname === "/" ? <PostContainer /> : <CreatePost />} */}
        </div>
      </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
