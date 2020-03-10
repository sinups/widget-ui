### Primary Button

Use when there is an action that is more important than any other actions and you need to draw attention to it. Don’t use more than one primary button per screen to avoid confusing users. Not every screen needs a primary button.

```js
<Button primary>Primary Button</Button>
```


### Basic Button

The standard button for most use cases. Can be used for primary actions when the Primary button style is "too much" (e.g. "Edit" vs "Save").

```js
<Button>Basic Button</Button>
```

### Secondary Button

Secondary buttons provide a lighter weight button style. They can be used in isolation, for less prominent actions, or paired with a Primary button, e.g for the ‘Cancel’ action.

```js
<Button secondary>Secondary Button</Button>
```


### Destructive Button

Use as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals.

```js
<Button destructive>Destructive Button</Button>
```

### Button Sizes

#### Compact

Use in a table or list where space is tight.

```js
<Button size="compact" primary>
  Compact Button
</Button>
```



#### Regular

```js
<Button primary>Regular Button</Button>
```


#### Large

Use for the main call to action in empty states or for calls to action shown with large illustrations.

```js
<Button size="large" primary>
  Large Button
</Button>
```


#### Full-width

Button expanded to the full width to fill the parent container (max-width: 320px)

```js
<Button fullWidth primary>
  Full-width Button
</Button>
```



### Loading

```jsx
  initialState = { loading: true };

  toggleLoading = () => {
    setState({
      loading: !state.loading
    });
  }

  <div>
    <div style={{marginBottom: '10px'}}>
      <Button primary onClick={toggleLoading}>Turn {state.loading ? 'off' : 'on'} loading</Button>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button loading={state.loading}>Loading Button</Button>
      <Button loading={state.loading} secondary>Loading Button</Button>
      <Button loading={state.loading} destructive>Loading Button</Button>
      <Button loading={state.loading} primary>Loading Button</Button>
    </div>
  </div>
```

