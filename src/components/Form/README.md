```jsx
const required = value => (value ? undefined : "Обязательное <br> поле");
const minValue = value => (value >= 18 ? undefined : `Вам должно быть <br> больше 18 лет`);

const onSubmit = value => console.log(value);

<div style={{display:'block'}}>
<Form rules={{required, minValue}} onSubmit={onSubmit}>
  <input type="text" name='test-1' label="Test" validation={'required'} />
  <input type="text" name='test-2' label="Test 2" validation={['required', 'minValue']} />
</Form>
</div>
```
