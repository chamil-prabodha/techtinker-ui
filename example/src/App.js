import React, { Component } from 'react'

import ExampleComponent, { SimpleButton } from 'techtinker-ui'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.count = this.count.bind(this);
  }

  count() {
    this.setState({ count: this.state.count + 1 });
  }

  render () {
    return (
      <div>
        <div>
          <ExampleComponent text='Modern React component module' />
        </div>
        <div>
          <SimpleButton text='Click Me!' onClick={this.count}/>
        </div>
        <div>
        { this.state.count > 0 && (<div>Clicked {this.state.count} time{ this.state.count > 1 && ('s')}</div>)}
        </div>
      </div>
    )
  }
}
