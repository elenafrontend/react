import React from 'react';
import AppButton from "./UI/button/AppButton";

const PostItem = (props) => {

  const deletePost = () => {
    props.remove(props.post)
  }

  return (
    <div className="post">
      <div className="post__content">
        <strong>{ props.number }. { props.post.title }</strong>
        <div>
          { props.post.body }
        </div>
      </div>
      <div className="post__btns">
        <AppButton onClick={deletePost}>Удалить</AppButton>
      </div>
    </div>
  );
};

export default PostItem;