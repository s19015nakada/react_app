import React from 'react'

const TitleAndImg = props => {
  const title = '書道'
  const imgUrl = 'http://uta.pw/shodou/img/28/214.png'
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <img src={imgUrl} />
      </p>
    </div>
  )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return <TitleAndImg />
    }
}

export default App
