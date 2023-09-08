import React, {useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

interface BookButtonsProps{
    isSubscribed: boolean;
    onSubscribeClick: () => Promise<void>;
    onUnsubscribeClick: () => Promise<void>;
}
function BookButtons(props: BookButtonsProps): JSX.Element {
    const { isSubscribed, onUnsubscribeClick, onSubscribeClick } = props;
    const user = useContext(UserContext);
    const location = useLocation();
    const OnAdmin = location.pathname.startsWith ("/admin");

    function isOnAdmin(): boolean {
        return user !== undefined && user.role === "ADMIN" && OnAdmin;
    }

    if(isOnAdmin()){
        return(
        <div>
            <button>See workout details</button>
        </div>
        )
    }
    if (isSubscribed){
        return (
            <div>
                 <button onClick={onUnsubscribeClick}>Unsubscribe</button> 
            </div>
        )
    }else {
        return (
        <div>
             <button onClick={onSubscribeClick}>Subscribe</button>
        </div>
        )
    }
}

export default BookButtons