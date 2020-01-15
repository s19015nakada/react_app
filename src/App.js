import React from 'react'

const Maxim = props => {
  return (
    <div>
      <p>探すのに時があり</p>
      <p>捨てるのに時がある</p>
    </div>
  )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return <Maxim />
    }
}

export default App
