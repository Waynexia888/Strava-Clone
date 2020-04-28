import React from 'react'

const CommentItemModal = ({ comment, user, currentUser, removeComment }) => {

    return (
        <div id="comment-item-modal">
            <div className="profile-picture-small-modal">
                <img src={user.photoUrl} alt="" />
            </div>

            <div className="comment-content">
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{comment.body}</p>
            </div>

            {currentUser.id === user.id ?
                <p id="delete-comment-modal" onClick={() => removeComment(comment.id)}>
                    <img id="x-modal" src={window.images.x} alt="" />
                </p> : ""
            }

        </div>
    )
}

export default CommentItemModal