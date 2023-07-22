import React from 'react';
import UserCSS from 'components/menu/styles/User.module.css';
import UserLogo from 'assets/icons8-user.png'

const UserS = () => {
    return (
        <div className={UserCSS.Oval}>
            <img src={UserLogo} alt="user icon"  className={UserCSS.Mask}/>
        </div>
    );
};

export default UserS;
