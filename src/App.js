import React from 'react'

const ItemValue = props => {
  const item = 'SDカード'
  const value = 1200
  return (
    <h1>
      {item} - {value}
    </h1>
  )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div>
                <ItemValue />
            </div>
        )
    }
}

export default App
