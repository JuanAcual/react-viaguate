import React from 'react';
import { Button } from 'semantic-ui-react';
import { MdMenu } from 'react-icons/md';
import { MdClear } from 'react-icons/md';

export default () => {
    return (
        <div className="nav width-100">
            <div className="cards-container">
                <div className="logo"><span>Logo</span></div>
                <div className="menu-options">
                    <Button basic><span className="nav-menu">Accomodations</span></Button>
                    <Button basic><span className="nav-menu">Transportation</span></Button>
                    <Button basic><span className="nav-menu">Things To Do</span></Button>
                    <Button basic><span className="nav-menu">Tours info</span></Button>
                </div>
                <div className="sub-menu">
                    <MdClear />
                    <span className="sub-menu">Get Offerts</span>
                    <MdClear />
                    <span className="sub-menu">Social Media</span>
                    <MdClear />
                    <span className="sub-menu">Contact</span>
                    <MdMenu className="sandwich"/>
                </div>
            </div>
        </div>
    );
}