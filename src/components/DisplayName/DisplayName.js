import React, {useContext} from "react";
import {AppContext} from "../../App";

const DisplayName = () => {

    const {
        firstName,
        lastName
    } = useContext(AppContext)

    return (
        <div className="displayContainer">
            <div>
                First Name:&nbsp;&nbsp;{firstName}
            </div>
            <div>
                Last Name:&nbsp;&nbsp;{lastName}
            </div>
        </div>

    );
}

export default DisplayName;
