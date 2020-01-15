import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount () {
    console.log('componentDidMount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillmount')
  }

    render () {
        console.log('render')
        const setStateHandler = e => {
          console.log('* call setState()')
          this.setState({ r: Math.random() })
    }
        return (
            <div>
              <button onClick={setStateHandler}>setState</button>
            </div>

        )
    }
}

export default App
