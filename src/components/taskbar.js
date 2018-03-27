import React from "react";

const Taskbar = () => {
        return (
            <div>
                <input onChange={this.handleChange} type="text" />
                <button onClick={() => alert('clicked')} className="btn-primary">Submit</button>
            </div>
        );
    }

export default Taskbar;
