import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllKudos } from '../../../actions/kudo_action'
import { fetchAllActivities } from '../../../actions/activity_action'


const mapStateToProps = (state, ownProps) => ({
    kudos: state.entities.kudos,
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllActivities: (page) => dispatch(fetchAllActivities(page)),
    fetchAllKudos: (id) => dispatch(fetchAllKudos(id))
})

class KudoIndex extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.kudos).length !== Object.values(this.props.kudos).length) {
            this.props.fetchAllActivities(this.props.page)
        }
    }

    render() {
        let kudos = this.props.activity.kudo_ids.map(kudoId => this.props.kudos[kudoId])
        let users = []
        if (kudos[0]) {

            users = kudos.map(kudo => {
                if (kudo) {
                    return this.props.users[kudo.user_id];
                }
            })
        }
        users = users.filter(user => user)
        return (
            <div id="kudos">
                <div id="user-kudos"> {users.slice(0, 3).map(user => {
                    return (<div key={user.id} className="profile-picture-small-comment">
                        <img src={user.photoUrl} alt="" />
                    </div>)
                })}
                </div>

                {users.length > 0 ?
                    <p>{users.length} kudos </p> : ""
                }
                {this.props.activity.comment_ids.length >= 2 ?

                    <h1 id="num-comments">
                        {this.props.kudos.length ? <p id="dot"> . </p> : ""}
                        <p id="comment-num">
                            {this.props.activity.comment_ids.length} comments</p>
                    </h1> :
                    this.props.activity.comment_ids.length > 0 ?

                        <h1 id="num-comments">
                            {this.props.kudos.length ? <p id="dot"> . </p> : ""}
                            <p id="comment-num">
                                {this.props.activity.comment_ids.length} comment</p>
                        </h1> : ""

                }

            </div>

        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KudoIndex))