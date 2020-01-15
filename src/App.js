import React from 'react'

const Maxim = props => {
  return (
    <div>
      <p style={css1}>探すのに時があり</p>
      <p style={css2}>捨てるのに時がある</p>
    </div>
  )
}

const css1 = {
  color: 'red',
  'background-color': '#f0f0ff',
  'font-size': '2em'
}

const css2 = {
  color: 'blue',
  backgroundColor: '#fff0ff',
  fontSize: '2em'
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
