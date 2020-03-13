import React, {Component} from "react";
import "./App.css";
import {Button, Loader, Badge, TextAreaField, Breadcrumbs} from 'wgt-ui'


class App extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      error: null
    }
  }

  onInputChange = (e) => {
    if (e.target.value.length > 100) {
      this.setState({
        value: e.target.value,
        error: 'Validation message here'
      });
    } else {
      this.setState({
        value: e.target.value,
        error: null
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{ margin: '30px auto', width: 410 }}>
          <TextAreaField
            value={this.state.value}
            labelText="Text Area Field label"
            error={this.state.error}
            id="text-area-field-example-1"
            placeholder="Placeholder..."
            description="Text longer than 100 character will trigger error"
            onChange={this.onInputChange}
          />
        </div>
        <div style={{ margin: '30px auto', width: 410 }}>
          <Button className="MyButton">Click me</Button>
        </div>
        <div style={{ margin: '30px auto', width: 410 }}>
          <Badge>99+</Badge>
        </div>
        <div style={{ margin: '30px auto', width: 410 }}>
          <Button destructive>Destructive Button</Button>
        </div>
        <div style={{ margin: '30px auto', width: 410 }}>
          <Breadcrumbs content={'Виктория'} subContent={'Юрист онлайн'} />
        </div>
      </div>
    )
  }
}

export default App;
