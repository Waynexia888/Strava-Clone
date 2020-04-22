// import React from 'react'
// import CommentItem from './comment_item'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
// import { fetchAllActivities } from '../../../actions/activity_action'
// import { fetchActivityComments, removeComment } from '../../../actions/comment_actions';
// import CommentItemModal from './comment_item_modal'

// const mapStateToProps = (state, ownProps) => ({
//     activities: state.entities.activities,
//     comments: state.entities.comments,
//     users: state.entities.users
// })

// const mapDispatchToProps = (dispatch) => ({
//     fetchAllActivities: (page) => dispatch(fetchAllActivities(page)),
//     removeComment: (commentId) => dispatch(removeComment(commentId)),
// })

// class CommentIndex extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             viewAllComments: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     componentDidUpdate(prevProps) {
//         if (Object.values(prevProps.comments).length !== Object.values(this.props.comments).length) {
//             this.props.fetchAllActivities(this.props.page)

//         }
//     }

//     handleClick() {
//         this.setState({ viewAllComments: !this.state.viewAllComments })
//     }




//     render() {

//         const actComments = this.props.activity.comment_ids.map(commentId => this.props.comments[commentId])
//         let allComments = []
//         let allCommentsModal = []
//         if (actComments[0]) {
//             allComments = actComments.map(comment => {
//                 if (comment) {
//                     return (<CommentItem
//                         key={comment.id}
//                         comment={comment}
//                         user={this.props.users[comment.user_id]}
//                         activity={this.props.activity}
//                         removeComment={this.props.removeComment}
//                         currentUser={this.props.currentUser}
//                     />)
//                 }
//             })

//             allCommentsModal = actComments.map(comment =>
//                 comment ?
//                     <CommentItemModal
//                         key={comment.id}
//                         comment={comment}
//                         user={this.props.users[comment.user_id]}
//                         activity={this.props.activity}
//                         removeComment={this.props.removeComment}
//                         currentUser={this.props.currentUser}
//                     /> : "")
//         }

//         return (
//             <div>
//                 <div id='comments'>
//                     <div>
//                         {allComments.slice(0, 2)}
//                     </div>
//                     {actComments.length > 2 ?
//                         <p onClick={this.handleClick}
//                             id="view-all-comments">
//                             See all {actComments.length} comments
//                     </p>


//                         : ""}
//                 </div>

//                 {this.state.viewAllComments ?
//                     <div className="comment-modal">
//                         <div className="close">
//                             <img onClick={this.handleClick} src={window.images.close} alt="" />
//                         </div>
//                         <div id="modal-content">
//                             <section id="modal-header">
//                                 <div className="profile-picture-small">
//                                     <img src={this.props.users[this.props.activity.user_id].photoUrl} />
//                                 </div>
//                                 <h1>{this.props.activity.title}</h1>
//                             </section>
//                             {allCommentsModal}
//                         </div>

//                     </div>
//                     : ""
//                 }
//             </div>
//         )
//     }
// }

// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps)(CommentIndex))