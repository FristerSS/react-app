import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom'


const permission = true;

const AdminPage = () =>
{
    const navigate = useNavigate();


    useEffect(() =>
    {
        if(permission)
        navigate('/login')
     
    })

    return(
        <h2>Panel Admina - dzień dobry</h2>
    )
}

export default AdminPage;