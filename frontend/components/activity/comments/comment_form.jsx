import React from 'react'
import CommentIndex from './comment_index'

class CommentForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            body: "",
            user_id: this.props.currentUser.id,
            activity_id: this.props.activity.id,
            makeComment: true,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createComment({ "user_id": this.state.user_id, "activity_id": this.state.activity_id, "body": this.state.body })
        this.setState({ makeComment: false })

    }

    componentDidMount() {
        this.setState({ makeComment: true })
    }



    handleChange() {
        return (e) => this.setState({ body: e.target.value })
    }

    handleClick() {
        this.setState({ makeComment: true })

    }

    render() {

        return (
            <div>

                {this.state.makeComment ?
                    <form id="add-comment" onSubmit={this.handleSubmit}>
                        <textarea
                            onChange={this.handleChange()}
                            value={this.state.body}
                            placeholder="Add Comment"
                        />

                        <input type="submit" value="Post" />
                    </form>
                    : ""
                }
            </div>
        )
    }
}

export default CommentForm;
