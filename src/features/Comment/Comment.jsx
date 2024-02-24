// Comment.jsx

import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Comment = ({ comment, removeComment, editComment, increment, decrement, count }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleEdit = () => {
    setEditMode(true);
    setEditedComment(comment);
  };

  const handleSave = () => {
    editComment(editedComment);
    setEditMode(false);
  };

  return (
    <div className="comment">
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>{comment}</div>
      )}
      <div className="icons">
        <RiCloseCircleLine onClick={removeComment} className="delete-icon" />
        <TiEdit onClick={handleEdit} className="edit-icon" />
        <IoIosArrowUp onClick={increment} style={{ color: count > 0 ? 'green' : 'black'}} />
        <span>{count}</span>
        <IoIosArrowDown onClick={decrement} style={{ color: count < 0 ? 'red' : 'black'}} />
      </div>
    </div>
  );
};

export default Comment;
