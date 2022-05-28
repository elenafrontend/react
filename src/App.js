import React, {useRef, useState} from 'react';
import "./styles/App.css"
import PostList from "./components/PostList";
import AppButton from "./components/UI/button/AppButton";
import AppInput from "./components/UI/input/AppInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "It's description"},
    {id: 2, title: "Javascript", body: "It's description"},
    {id: 3, title: "Javascript", body: "It's description"}
  ]);
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {
      id: Date.now(),
      title: post.title,
      body: post.body
    }]);
    setPost({title: '', body: ''});
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <AppInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <AppInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <AppButton onClick={addNewPost}>Добавить</AppButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
