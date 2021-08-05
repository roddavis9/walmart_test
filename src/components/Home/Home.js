import React from "react";
import DisplayName from "../DisplayName/DisplayName";

const Home = () => {



    return (
        <div className="componentRow">
            <div className="leftColumn">
                This is a &quot;Home&quot; Page
            </div>
            <div className="rightColumn">
                <DisplayName />
            </div>
        </div>

    );
}

export default Home;
