import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false,
      status: this.props.status,
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  componentDidUpdate = prevProps => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
