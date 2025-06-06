//PostCard
import React, { useState } from "react";

import Comment from "./Comment";

const PostCard = ({ content, date, postId, comments: initialComments }) => {
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="mb-8">
      <div className="bg-[#1E2023] p-4 rounded text-sm text-white">
        <p className="mb-4">{content}</p>

        <div className="text-xs text-gray-400 flex justify-end items-center space-x-4">
          <span>{date}</span>
          <button
            onClick={() => setShowComment((prev) => !prev)}
            className="hover:text-white flex items-center space-x-1"
          >
            <img className="w-4" src="/film_HomePage/comment.svg" />
          </button>
          <span>{comments.length}</span>
        </div>
      </div>

      {showComment && (
        <div className="mt-4 flex justify-end">
          <Comment
            postId={postId}
            existingComments={comments}
            onAddComment={handleAddComment}
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;
