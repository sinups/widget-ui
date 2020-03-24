#### Оповещение по умолчанию

<h5>Поведенческие факторы</h5>
<ul>
  <li>Если текст выходит за пределы контейнера он обрезается ...</li>
</ul>

```jsx
<div style={{ margin: 'auto', width: 410 }}>
    <Header consultantName="Виктория"  headerHeight="60px">Дежурный юрист онлайн </Header>
</div>
```

#### Частично кастомные оповещение
```jsx
<div style={{ margin: 'auto', width: 410 }}>
<Header 
    invertColor="true" 
    avatarUrl="https://i.ibb.co/DLTcH8x/Bitmap-1.jpg"
    bgHeader="linear-gradient(90deg, #F8546E -1.04%, #8371F3 124.79%), #C4C4C4" 
    textColor="#fff"
    consultantName="Виктория"
    >
    Дежурный юрист онлайн - Юстива
</Header>
</div>
```

#### Полностью кастомные оповещение
```jsx
<div style={{ margin: 'auto', width: 390 }}>
    <Header 
        invertColor="true" 
        avatarUrl="https://i.ibb.co/pf122MC/Screenshot-at-Feb-17-16-34-55.png"
        bgHeader="#06062b url(https://s5.gifyu.com/images/starsdf5a4c486a790711.gif)" 
        textColor="#fff"
        consultantName="Таролог Дина Залесская"
        headerHeight="90px"
        >
        Дежурный юрист онлайн - Бесплатная помощь онлайн
    </Header>
</div>
```
