### Loader

Loaders help reduce the use of awkward blank screens.
They’re CSS animated SVGs telling people that the app is loading data or processing a task, such as saving or submitting user-inputted data.
You should use only one spinner on a page at a time. Don’t show spinners if a task takes less than 0.3 s to process.

### Loader Sizes

#### Small

Use for inline spinners and inside other elements such as buttons or input fields.

```js
<Loader size="small" />
```

#### Medium

Use for larger components, like charts, tables, cards, etc.

```js
<Loader size="medium" />
```

#### Large (page loader)

Use for loading a page or UI sections. Place the spinner vertically and horizontally centered on the element, section or screen it is loading.

```js
<Loader size="large" />
```

### Custom colors

The default color of the progress indicators is LiveChat’s action blue. You can change the color using the props primaryColor and secondaryColor.

```js
<Loader primaryColor="#d64646" secondaryColor="#eec4c5" size="large" />
```


### Label

You can provide a brief description of the process, like “Loading …”.

```js
<Loader size="small" label="Loading…" />
```
