import React from "react";
import "./Header.css"
export default function Header(){
    return(
        <header>
        <div class="top-header">
            <div class="logo">
                <p>AutoAccess</p>    
            </div>
            <div class="main-header-menu">
                <ul class="main-menu">
                    <li>Cars</li>
                    <li>Spare Parts</li>
                    <li>Repairs and services</li>
                </ul>
            </div>
            <div class="second-menu">
            <ul class="main-menu">
                    <li>About</li>
                    <li>Support</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
        </header>
    )
}