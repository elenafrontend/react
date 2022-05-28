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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <AppInput
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <AppInput
          type="text"
          placeholder="Описание поста"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <AppButton onClick={addNewPost}>Добавить</AppButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
