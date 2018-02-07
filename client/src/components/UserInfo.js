import React from 'react';

export const UserInfo = (props) => (
    <div className="row blah">
      <div>
        <div className="col s12 m6">
          <div className="card red lighten-1" style={Style.cardContainerLeft}>
            <div className="card-content white-text">
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="col s12 m6">
            <div className="card grey darken-1" style={Style.cardContainerRight}>
                <div className="card-content white-text">
                <span className="card-title" style={Style.cardTitle}>Billy Bob</span>
                </div>
            </div>
        </div>
      </div>
    </div>
)

const Style = {
    container: {
        paddingLeft: 20
    },
    cardContainerLeft: {
        marginLeft: -15,
        height: 190,
        marginTop: -20,
        marginRight: -5
    },
    cardContainerRight: {
        height: 190,
        marginTop: -20,
        marginLeft: -5,
        marginRight: -15
    },
    cardTitle: {
        marginTop: 50,
        textAlign: "right",
        fontSize: 80,
        marginRight: 100
    }
}