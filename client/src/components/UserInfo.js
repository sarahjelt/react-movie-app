import React from 'react';

export const UserInfo = (props) => (
    <div className="row" style={Style.container}>
      <div>
        <div className="col s12 m6">
          <div className="card cyan lighten-3" style={Style.cardContainerLeft}>
            <div className="card-content white-text">
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="col s12 m6">
            <div className="card red lighten-1" style={Style.cardContainerRight}>
                <div className="card-content white-text">
                <span className="card-title" style={Style.cardTitle}>{props.userName}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
)

const Style = {
    container: {
        marginBottom: '30px'
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