#### Default Launcher
```jsx
import Button from '../Button'
initialState = {
  pulsation: false,
  open:false,
  animation3D:false,
};
const toggleAnimation = () => setState({ pulsation: !state.pulsation });
const toggleAnimation3d = () => setState({ animation3D: !state.animation3D });
const open = () => setState({  open: !state.open });

<div>
    <Button size="compact" primary onClick={toggleAnimation}>
       {state.pulsation ? 'Pulsation ...' : 'Pulsation'}
    </Button>
    <Button size="compact" primary onClick={toggleAnimation3d}>
       {state.animation3D ? 'Rotate ...' : 'Rotate Animation'}
    </Button>
    <Button size="compact" primary onClick={open}>
       {state.open ? 'Opened ...' : 'Open'}
    </Button>
    <hr/>

    <Launcher  
        open={state.open} 
        animation3D={state.animation3D}         
        pulsation={state.pulsation}
        onClick={open}
    >
    </Launcher>
</div>
```

#### Open Launcher
```jsx
<Launcher open></Launcher>
```
#### Pulsation and 3D animation  Launcher
```jsx
<Launcher animation3D pulsation theme="#3bbf51"></Launcher>
```
