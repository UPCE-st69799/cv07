import React, {useEffect, useState} from "react";
import './Header.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setLogin} from "../../features/login/loginSlice";

const Header = () => {
    // TODO: 2.	Upravte zdrojový kód tak aby po stisknutí tlačítka „Přihlásit se“ v komponentně Header.tsx se aktualizoval stav i v komponentě Task.tsx a zobrazil tasky z backendu.

    const isLoggedIn = useAppSelector((state) => state.login.value)
    const dispatch = useAppDispatch();

    useEffect(()=> {
        console.log(`State changed in ${Header.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(setLogin(true));
    };

    return <div className="header">
        <button onClick={clickHandle}>Přihlásit se</button>
    </div>
};

export default Header;