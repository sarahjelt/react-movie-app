import React from 'react';

export const NoMatch = () => (
  <div style={Style.container}>
    <h1>This page does not exist!</h1>
  </div>
)

const Style = {
  container: {
    minHeight: '50vh',
    marginLeft: '20px'
  }
}