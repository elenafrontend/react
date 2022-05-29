import React, {useMemo, useState} from 'react';
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import AppModal from "./components/UI/modal/AppModal";
import AppButton from "./components/UI/button/AppButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "аа", body: "уу"},
    {id: 2, title: "тт", body: "аа"},
    {id: 3, title: "дд", body: "кк"}
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);

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
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }


  return (
    <div className="App">

      <AppButton
        onClick={() => setModal(true)}
        style={{marginTop: 20}}
      >
        Создать пост
      </AppButton>

      <AppModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </AppModal>

      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        remove={deletePost}
        posts={searchedAndSortedPosts}
        title={'Посты про JS'}
      />
    </div>
  );
}

export default App;
