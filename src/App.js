import React, {useEffect, useState} from 'react';
import "./styles/App.css"
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import AppModal from "./components/UI/modal/AppModal";
import AppButton from "./components/UI/button/AppButton";
import {usePosts} from "./hooks/usePosts";
import {PostService} from "./api/PostService";
import AppLoader from "./components/UI/loader/AppLoader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);


  useEffect(() => {
    fetchPosts();
  }, [])

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 2000);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  // Getting post from child component
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

      {
        isPostsLoading
          ? <div className="wrapper"><AppLoader /></div>
          : <PostList remove={deletePost} posts={searchedAndSortedPosts} title={'Посты про JS'}/>
      }
    </div>
  );
}

export default App;
