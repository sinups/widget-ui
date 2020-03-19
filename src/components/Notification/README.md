#### Оповещение по умолчанию

```jsx
<Notification textColor="#000">У вас есть вопрос по теме статьи?</Notification>
```

#### Частично кастомные оповещение
```jsx
<Notification 
    invertColor="true" 
    avatarUrl="https://i.ibb.co/DLTcH8x/Bitmap-1.jpg"
    bgNotification="linear-gradient(90deg, #F8546E -1.04%, #8371F3 124.79%), #C4C4C4" 
    textColor="#fff">
    У вас есть вопрос по теме статьи?
</Notification>
```

#### Полностью кастомные оповещение
```jsx
<Notification 
    invertColor="true" 
    avatarUrl="https://i.ibb.co/pf122MC/Screenshot-at-Feb-17-16-34-55.png"
    bgNotification="#06062b url(https://s5.gifyu.com/images/starsdf5a4c486a790711.gif)" 
    textColor="#fff"
    consultantName="Таролог Дина Залесская"
    consultantStatus="Бесплатная помощь"
    >
    Я практикующий таролог, 20 лет...
</Notification>
```
