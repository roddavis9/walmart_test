import React from "react";
import DisplayName from "../DisplayName/DisplayName";

const Products = () => {
    return (
        <div className="componentRow">
            <div className="leftColumn">
                This is a &quot;Products&quot; Page
            </div>
            <div className="rightColumn">
                <DisplayName />
            </div>
        </div>

    );
}

export default Products;
