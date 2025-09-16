import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NavStyled } from "./Nav.Styled";
import { Divider } from "./Nav.Styled";

export const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (
        <NavStyled>
            <ul>
                <li><NavLink to="/">HJEM</NavLink></li>

                <li ref={dropdownRef} className="dropdown">
                    <NavLink className="dropbtn" onClick={toggleDropdown}>
                        KATEGORIER
                    </NavLink>
                    {isDropdownOpen && (
                        <ul className="dropdown-content">
                            <li><NavLink to="/kategori/fodbold">Fodbold</NavLink></li>
                            <Divider />
                            <li><NavLink to="/kategori/basketball">Basketball</NavLink></li>
                            <Divider />
                            <li><NavLink to="/kategori/formel1">Formel 1</NavLink></li>
                        </ul>
                    )}
                </li>

                <li><NavLink to="/om-os">OM OS</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </NavStyled>
        
    );
};
