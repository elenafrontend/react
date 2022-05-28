import React, {useState} from 'react';
import AppInput from "./UI/input/AppInput";
import AppButton from "./UI/button/AppButton";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      ...post
    }
    create(newPost)
    setPost({title: '', body: ''});
  }

  return (
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
  );
};

export default PostForm;