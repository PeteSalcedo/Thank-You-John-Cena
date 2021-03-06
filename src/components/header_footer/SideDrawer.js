import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=>props.onClose(false)}
        >
        <List component= "nav">
        <ListItem button onCLick={() => console.log('featured')}>
            Upcoming events 
        </ListItem>
        <ListItem button onCLick={() => console.log('Venue Info')}>
            Events Information
        </ListItem>

        <ListItem button onCLick={() => console.log('Highlights')}>
            Highlight
        </ListItem>

        <ListItem button onCLick={() => console.log('Prices')}>
            Prices
        </ListItem>
        </List>
        </Drawer>
    )
}

export default SideDrawer;