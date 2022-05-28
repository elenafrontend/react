import React, {useState} from 'react';
import "./styles/App.css"
import PostList from "./components/PostList";
import AppButton from "./components/UI/button/AppButton";
import AppInput from "./components/UI/input/AppInput";

function App() {
  const [posts1, setPosts1] = useState([
    {id: 1, title: "Javascript", body: "It's description"},
    {id: 2, title: "Javascript", body: "It's description"},
    {id: 3, title: "Javascript", body: "It's description"}
  ]);
  const [posts2, setPosts2] = useState([
    {id: 1, title: "Python", body: "It's description"},
    {id: 2, title: "Python", body: "It's description"},
    {id: 3, title: "Python", body: "It's description"}
  ]);

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
        />
        <AppButton>Добавить</AppButton>
      </form>
      <PostList posts={posts1} title={'Посты про JS'}/>
      <PostList posts={posts2} title={'Посты про Python'}/>
    </div>
  );
}

export default App;
