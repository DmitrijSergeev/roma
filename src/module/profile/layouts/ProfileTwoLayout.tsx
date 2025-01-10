import {FC, ReactNode} from "react";

type ProfileOneLayout = {
    children: ReactNode
}

export const ProfileTwoLayout:FC<ProfileOneLayout> = ({children}) => {

    console.log('ProfileTwoLayout COMPONENT')

    return (
        <div style={{width:'100%', height:'100vh', backgroundColor:'gray'}}>
            {children}
        </div>
    );
};
