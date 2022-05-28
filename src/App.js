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

  const deletePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>

      { posts.length === 0
         ? <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
         : <PostList remove={deletePost} posts={posts} title={'Посты про JS'}/>
      }
    </div>
  );
}

export default App;
