import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

  if ( posts.length === 0 ) {
    return <h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{ title }</h1>
      { posts.map((post, index) =>
        <PostItem
          remove={ remove }
          number={ index + 1 }
          key={ post.id }
          post={ post }
        />
      )}
    </div>
  );
};

export default PostList;