import React, {useState} from 'react';
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "It's description"},
    {id: 2, title: "Javascript", body: "It's description"},
    {id: 3, title: "Javascript", body: "It's description"}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
