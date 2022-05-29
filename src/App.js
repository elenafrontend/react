import React, {useMemo, useState} from 'react';
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "аа", body: "уу"},
    {id: 2, title: "тт", body: "аа"},
    {id: 3, title: "дд", body: "кк"}
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})

    // Sorting
  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort(
        (a, b) => a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  // Searching
  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(
      post => post.title.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [sortedPosts, filter.query])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      { searchedAndSortedPosts.length === 0
         ? <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
         : <PostList remove={deletePost} posts={searchedAndSortedPosts} title={'Посты про JS'}/>
      }
    </div>
  );
}

export default App;
