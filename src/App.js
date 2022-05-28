import React, {useRef, useState} from 'react';
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
  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log('новый пост')
    console.log(bodyInputRef.current.value)
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
        {/* Неконтролируемый / Неуправляемый компонент */}
        <AppInput
          type="text"
          placeholder="Описание поста"
          ref={bodyInputRef}
        />
        <AppButton onClick={addNewPost}>Добавить</AppButton>
      </form>
      <PostList posts={posts1} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
