import {FC, ReactNode, useEffect, useState} from "react";

type ProfileOneLayout = {
    children: ReactNode
}

const ProfileOneLayout:FC<ProfileOneLayout> = ({children}) => {

    console.log('ProfileOneLayout COMPONENT')


    const [loading , setLoading] = useState(false)
    useEffect(() => {
        setLoading(false)
    }, []);


    if(loading) {
        return <div>{loading && <h1>Загрузка</h1>}</div>
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProfileOneLayout;