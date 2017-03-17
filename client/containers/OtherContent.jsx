import React from 'react'
import Stuff from '../components/Stuff.jsx'
import Things from '../components/Things.jsx'

export default class OtherContent extends React.Component {
  render(){
    return (
      <div>
        <Stuff />
        <Things />
      </div>
    )
  }
}
