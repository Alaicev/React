import React from "react";

class ProfileStatus extends React.Component{


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMod = () => {
        if (this.props.userId === undefined) {
            this.setState({
                editMode: true,
            })
        }
    }

    deActivateEditMod = () => {
        this.setState({
            editMode: false
        })
        this.props.apdateStatus(this.state.status)
    }

    onStatusChange =(e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMod}>{this.state.status || "Status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMod} type="text" value={this.state.status}/>
                    </div>
                }

            </>
        )
    }

}

export default ProfileStatus