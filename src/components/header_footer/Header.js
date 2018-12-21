import React,  { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
           <AppBar position="fixed"
           style={{
               backgroundColor:'#2f2f2f',
               boxShadow:'none',
               padding:'10px 0px'
           }}>
               Header
           </AppBar>
        )
    }
}

export default Header;