import React from 'react';
import Score from "./Score";
import Speed from "./Speed";
import classes from "./InfoBlock.module.scss";

const InfoBlock = () => {
    return (
        <div className={classes.info}>
            <Score/>
            <Speed/>
        </div>
    );
};

export default InfoBlock;