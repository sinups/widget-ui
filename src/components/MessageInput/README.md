```jsx
  const config = {
    0: { msg: 'Опишите подробности', color: '#F9969A' },
    10: { msg: 'Хороший вопрос', color: '#F4BD51' },
    20: { msg: 'Отличный вопрос', color: '#45C942' },
  };

<div style={{maxWidth: '350px', display: 'block', margin: '30px auto' }}>
<MessageInput requiredChar={10}  charForFullWidth={20} requiredChar={5} config={config}/>
</div>
```
