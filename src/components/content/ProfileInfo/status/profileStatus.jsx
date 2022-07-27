import React from "react";

class ProfileStatus extends React.Component{


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMod = () => {
        this.setState({
            editMode: true,
        })
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

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMod}>{this.state.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMod} type="text" value={this.state.status}/>
                    </div>
                }
                {this.state.status === null &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMod} type="text" value={this.state.status}/>
                    </div>
                }
            </>
        )
    }

}

export default ProfileStatus