import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { TiEdit } from 'react-icons/ti';
import { TbArrowBigDown } from "react-icons/tb";
import { TbArrowBigUp } from "react-icons/tb";
import { timeSince } from '../../utils/timesince'; // Import timeSince function
import './Comment.css'; // Import CSS file

const Comment = ({ comment, removeComment, editComment, increment, decrement, count, timestamp }) => {
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
      <div className="comment-header">
        <img src="/avatar.png" alt="Avatar" className="avatar" />
        <span id="username">SkyWalker23</span>
        <span id="timestamp">{timeSince(new Date(timestamp))}</span>
      </div>
      {editMode ? (
        <div style={{backgroundColor: 'white'}}>
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div id="commentDiv">{comment}</div>
      )}

      <div className="icons">
        <div onClick={increment} className="icon-container">
          <TbArrowBigUp
            size={18}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fill: count > 0 ? '#04db37' : 'none',
              stroke: 'black',
            }}
          />
        </div>
        <span style={{ fontSize: '18px', backgroundColor: 'white'}}>{count}</span>
        <div onClick={decrement} className="icon-container">
          <TbArrowBigDown
            size={18}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fill: count < 0 ? '#f03b35' : 'none',
              stroke: 'black',
            }}
          />
        </div>
        <div onClick={removeComment} className="icon-container">
          <FaRegTrashCan className="delete-icon" />
          <span id="delete">Delete</span>
        </div>
        <div onClick={handleEdit} className="icon-container">
          <TiEdit className="edit-icon" />
          <span id="edit">Edit</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
