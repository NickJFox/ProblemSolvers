import React, { useState } from 'react';
import Post from '/Users/nickfox/Desktop/Coding/CodeAcademy/Reddit Project/reddit/src/features/Post/Post.jsx';
import Comment from '/Users/nickfox/Desktop/Coding/CodeAcademy/Reddit Project/reddit/src/features/Comment/Comment.jsx';
import { FaRegTrashCan } from "react-icons/fa6";
import { TiEdit } from 'react-icons/ti';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiReplyFill } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";

const Str = ({ content, completeStr, removeStr, updateStr, increment, decrement }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [replyingToStrId, setReplyingToStrId] = useState(null);
  const [showComments, setShowComments] = useState(content.map(() => true)); // State to track individual show/hide comments

  const toggleComments = (index) => {
    setShowComments(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleAddComment = (postId) => {
    if (newComment.trim() === '') return; // Prevent adding empty comments
    setComments(prevComments => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), { text: newComment, count: 0 }]
    }));
    setNewComment(''); // Clear the input field after adding the comment
    setReplyingToStrId(null); // Hide the input field after adding the comment
  };

  const handleRemoveComment = (postId, commentIndex) => {
    setComments(prevComments => ({
      ...prevComments,
      [postId]: prevComments[postId].filter((_, index) => index !== commentIndex)
    }));
  };

  const handleEditComment = (postId, commentIndex, editedComment) => {
    setComments(prevComments => ({
      ...prevComments,
      [postId]: prevComments[postId].map((comment, index) => {
        if (index === commentIndex) {
          return editedComment;
        }
        return comment;
      })
    }));
  };

  const submitUpdate = value => {
    const strToUpdate = content.find(str => str.id === edit.id);
    updateStr(edit.id, { ...value, count: strToUpdate.count });
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Post edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="str-container">
      <div className="str-content">
        {content.map((str, index) => (
          <div className={str.isComplete ? 'row complete' : 'row'} key={index}>
            <div onClick={() => completeStr(str.id)}>{str.text}</div>
            <div className='icons'>
              <IoIosArrowUp onClick={() => increment(str.id)} style={{ color: str.count > 0 ? 'green' : 'black'}} />
              <span>{str.count}</span>
              <IoIosArrowDown onClick={() => decrement(str.id)} style={{ color: str.count < 0 ? 'red' : 'black' }} />

              <FaRegTrashCan onClick={() => removeStr(str.id)} className='delete-icon' style={{marginLeft: '35px'}}/>


              <TiEdit onClick={() => setEdit({ id: str.id, value: str.text })} className='edit-icon' style={{marginLeft: '35px'}}/>
              {replyingToStrId === str.id ? (
                <div>
                  <input
                    type="text"
                    placeholder="Add your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button onClick={() => handleAddComment(str.id)}>Add</button>
                </div>
              ) : (
                <RiReplyFill onClick={() => setReplyingToStrId(str.id)} style={{marginLeft: '35px'}}/>
              )}
        
              <FaRegComment onClick={() => toggleComments(index)} style={{marginLeft: '35px'}}/>
             
            </div>
            {showComments[index] && comments[str.id] && (
              <div>
                {comments[str.id]
                  .sort((a, b) => b.count - a.count)
                  .map((comment, commentIndex) => (
                    <Comment
                      key={commentIndex}
                      comment={comment.text}
                      count={comment.count}
                      increment={() => {
                        const updatedComments = [...comments[str.id]];
                        updatedComments[commentIndex] = { ...comment, count: comment.count + 1 };
                        setComments(prevComments => ({
                          ...prevComments,
                          [str.id]: updatedComments
                        }));
                      }}
                      decrement={() => {
                        const updatedComments = [...comments[str.id]];
                        updatedComments[commentIndex] = { ...comment, count: comment.count - 1 };
                        setComments(prevComments => ({
                          ...prevComments,
                          [str.id]: updatedComments
                        }));
                      }}
                      removeComment={() => handleRemoveComment(str.id, commentIndex)}
                      editComment={(editedComment) => handleEditComment(str.id, commentIndex, { text: editedComment, count: comment.count })}
                    />
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Str;
