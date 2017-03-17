import React from 'react'
import OtherContent from '../containers/OtherContent.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Header from '../components/Header.jsx'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Paragraph />
        <OtherContent />
      </div>
    )
  }
}
