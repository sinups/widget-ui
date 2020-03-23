```jsx
import Input from '../Input'
const required = value => (value ? undefined : "Обязательное <br> поле");
const minValue = value => ((2020 - value) >= 18 ? undefined : `Вам должно быть <br> больше 18 лет`);

const onSubmit = value => console.log(value);

<div style={{display:'block'}}>
<Form rules={{required, minValue}} onSubmit={onSubmit}>
  <Input type="text" name="name" label="Имя" validation={'required'} />
  <Input type="text" mask={'9999'} name="year" label="Год рождения" validation={['required', 'minValue']} />
</Form>
</div>
```
