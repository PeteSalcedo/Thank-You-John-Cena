import React, { Component } from 'react';

class TimeUntil extends Component {
    state = {

    }

    render(){
        return(
        <div className="countdown_wrapper">
         <div className="countdown_top">
         Event starts IN
         </div>
          <div className="countdown_bottom">
            <div className="countdown_item" >
            <div className="countdown_time" >
              23
            </div>
            <div className="countdown_tag">
                Days
            </div>
            </div>
            <div className="countdown_item" >
            <div className="countdown_time" >
              2
            </div>
            <div className="countdown_tag">
               Hrs
            </div>
            </div>
            <div className="countdown_item" >
            <div className="countdown_time" >
              20
            </div>
            <div className="countdown_tag">
                Mins
            </div>
            </div>
            <div className="countdown_item" >
            <div className="countdown_time" >
              23
            </div>
            <div className="countdown_tag">
                secs
            </div>
            </div>
            
            
            
            
         </div>
        </div>
        )
    }
}
export default TimeUntil;