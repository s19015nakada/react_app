import React from './react'

const Hello = props => {
  return <h1>Hello, world!</h1>
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <di>
                <Hello />
            </div>
        )
    }
}

export default App
