import React, {useState} from 'react';
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import AppSelect from "./components/UI/select/AppSelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "аа", body: "уу"},
    {id: 2, title: "тт", body: "аа"},
    {id: 3, title: "дд", body: "кк"}
  ]);
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  const sortPosts = (sortOption) => {
    setSelectedSort(sortOption);
    setPosts([...posts].sort((a, b) => a[sortOption].localeCompare(b[sortOption])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>

      <hr style={{margin: '15px 0'}}/>
      <AppSelect
        value={selectedSort}
        onChange={option => sortPosts(option)}
        defaultOption="Сортировка по"
        options={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'},
        ]}
      />

      { posts.length === 0
         ? <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
         : <PostList remove={deletePost} posts={posts} title={'Посты про JS'}/>
      }
    </div>
  );
}

export default App;
