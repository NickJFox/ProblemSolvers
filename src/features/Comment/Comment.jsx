import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { TiEdit } from 'react-icons/ti';
import { TbArrowBigDown } from "react-icons/tb";
import { TbArrowBigUp } from "react-icons/tb";

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
    <div className="comment" style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px' }}>
      {editMode ? (
        <div style={{ backgroundColor: 'white' }}>
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            style={{ backgroundColor: 'white' }}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div style={{ backgroundColor: 'white' }}>{comment}</div>
      )}

      <div className="icons" style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', marginTop: '10px' }}>
        <div onClick={increment} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: 'white' }}>
          <TbArrowBigUp 
            size={18}
            style={{ 
              color: 'black', 
              fill: count > 0 ? '#04db37' : 'none', 
              stroke: 'black', 
              backgroundColor: 'white' 
            }} 
          />
        </div>
        <span style={{ backgroundColor: 'white', fontSize: '18px' }}>{count}</span>
        <div onClick={decrement} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: 'white' }}>
          <TbArrowBigDown
            size={18} 
            style={{
              color: 'black',
              fill: count < 0 ? '#f03b35' : 'none',
              stroke: 'black',
              backgroundColor: 'white'
            }}
          />
        </div>
        <div onClick={removeComment} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: 'white' }}>
          <FaRegTrashCan 
            className="delete-icon" 
            style={{ marginLeft: '25px', backgroundColor: 'white' }} 
          />
          <span style={{ marginLeft: '5px', backgroundColor: 'white' }}>Delete</span>
        </div>
        <div onClick={handleEdit} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: 'white' }}>
          <TiEdit 
            className="edit-icon" 
            style={{ marginLeft: '25px', backgroundColor: 'white' }} 
          />
          <span style={{ marginLeft: '5px', backgroundColor: 'white' }}>Edit</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;


