import React, { useState } from 'react';
import './Post.css';

const Post = (props) => {
  const { id, img, name, post, onDelete } = props;

  const [showMore, setShowMore] = useState(false);

  

  return (
    <div className='PostContainer'>
      <div className='nameId'>
        <img src={img}></img>
        <span>{name}</span>
        <button className='btn btn-danger m-2' onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
      <div className='Para'>
        {/* <p id='text'>{post}</p> */}
        <p>
          {showMore ? post : `${post.substring(0, 50)}`}
        </p>
        <button id='show' className='btn m-2' onClick={() => setShowMore(!showMore)}>
          Show more
        </button>

      </div>
    </div>
  );
};

export default Post;
