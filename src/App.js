import React, {useMemo, useState} from 'react';
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import AppSelect from "./components/UI/select/AppSelect";
import AppInput from "./components/UI/input/AppInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "аа", body: "уу"},
    {id: 2, title: "тт", body: "аа"},
    {id: 3, title: "дд", body: "кк"}
  ]);
  const  [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  // Sorting
  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort(
        (a, b) => a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  // Searching
  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(
      post => post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [sortedPosts, searchQuery])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  const sortPosts = (sortOption) => {
    setSelectedSort(sortOption);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>

      <AppInput
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        placeholder='Поиск ...'
      />

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

      { searchedAndSortedPosts.length === 0
         ? <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
         : <PostList remove={deletePost} posts={searchedAndSortedPosts} title={'Посты про JS'}/>
      }
    </div>
  );
}

export default App;
