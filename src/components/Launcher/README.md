#### Default Launcher
```jsx

initialState = {
  pulsation: false,
  open:false,
  animation3D:false,
  glyph:'chat_icons',
  glyphClose:'close'
};
const toggleAnimation = () => setState({ pulsation: !state.pulsation });
const toggleAnimation3d = () => setState({ animation3D: !state.animation3D });
const open = () => setState({  open: !state.open });

<div>
    <button className="demo_btn" onClick={toggleAnimation}>
       {state.pulsation ? 'Pulsation ...' : 'Pulsation'}
    </button>
    <button onClick={toggleAnimation3d}>
       {state.animation3D ? 'Rotate ...' : 'Rotate Animation'}
    </button>
    <button onClick={open}>
       {state.open ? 'Opened ...' : 'Open'}
    </button>
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
<Launcher animation3D></Launcher>
```
