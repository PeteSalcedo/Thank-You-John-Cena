import React from 'react';

import Drawer from '@material-ui/core/Drawer';

const SideDrawer = (props) => {
    return (
        <Drawer
        anchor="right"
        open={this.state.drawerOpen}
        onClose={(value)=> this.toggleDrawer(value)}
        >
        Drawer
        </Drawer>
    )
}

export default SideDrawer