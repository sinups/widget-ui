```jsx
const required = value => (value ? undefined : "Required");
const minValue = value => (value >= 18 ? undefined : `Should be greater than 18`);

const onSubmit = value => console.log(value);

<Form rules={{required, minValue}} onSubmit={onSubmit}>
  <input type="text" name='test-1' label="Test" placeholder="wow" validation={'required'} />
  <input type="number" name='test-2' label="Test 2" validation={['required', 'minValue']} />
  <textarea type="text" name='test-3' label="Test 3"/>
</Form>
```
