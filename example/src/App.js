import React, { Component } from "react";
import "./App.css";
import { Button,Loader,Badge } from 'wgt-ui'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Button className="MyButton">
  Click me
</Button>
<Badge>99+</Badge>
<Button destructive>Destructive Button</Button>
<Loader size="small" />
      </div>
    );
  }
}

export default App;
