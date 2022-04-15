# Урок №3: Знакомимся с useState и onClick

В этом уроке, мы подключим SASS к нашему проекту, познакомимся с состоянием компонента, научимся делать самое простое событие click, а так же сверстаем карточку наших герое.

Видео начинается с момента вашего сданного дз.

Как и требовалось в прошлом домашнем задание, я между блоками Slider и Footer расположил div с цветом фона `#f7f7f7`.
Что бы отцентровать контейнер который лежит внутри моего div я использовал текущие стили:

```css
display: flex;
justify-content: center;
padding: 24px 0;
background: #f7f7f7;
```
Дальше у меня лежит Container и в нем я использовал заголовок первого уровня и второго уровня.

- Marvel Cards - заголовок 1ого уровня
- Collect your best five - заголовок 2ого уровня

Ну а теперь посмотри видео по очереди, не пропускай ни одно видео, все они принесут тебе пользу:

## 03.00 - Merge PR

![vimeo](https://vimeo.com/699478717)


## 03.01 - Препроцессор SASS

![vimeo](https://vimeo.com/699496436)


## 03.02 - Подготовка проекта

![vimeo](https://vimeo.com/699479186)


## 03.03 - Верстка карточки героя

![vimeo](https://vimeo.com/699479701)

В этом видео я все время говорю слово CHAPTER - хотя на самом деле я хотел использовать имя CHARACTER _(примечание автора)_

Вам потребуется объект вида:

```js
const CHARACTER = {
 id: 1011334,
 name: 'Spider-Man',
 description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
 thumbnail: {
   path: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b'
 },
 humanName: 'Peter Parker',
 isLike: false,
};
```

Стили которые вам могут потребоваться:

```scss
.root {
  width: 350px;
  background: #111;
  height: 470px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,.4);
  transition: all .2s ease;
  overflow: hidden;

  &:hover {
    .cardImage {
      transform: scale(1.5);
      opacity: .6;
    }

    .cardDetails {
      top: 30%;
    }

    .cardDescription {
      opacity: 1;
    }
  }
}

.cardImage {
  max-width: 100%;
  transform: scale(1);
  transform-origin: 0 0;
  margin-bottom: 0;
  transition: all .2s ease;
}

.cardDetails {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 60%;
  padding: 20px;
  transition: all .2s ease;
}

.cardName {
  margin: 0;
}

.cardHumanName {
  color: #e74c3c;
}

.cardDescription {
  color: #666;
  opacity: 0;
  transition: all .4s ease;
}

.cardMeta {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #999;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like {
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;

    path[id="bg"] {
      fill: rgba(0,0,0,0);
    }
  }

  &:hover {
    svg {
      opacity: .4;

      path[id="bg"] {
        fill: #FF1D25;
      }
    }
  }

  &.active {
    svg {
      width: 20px;
      height: 20px;

      path[id="bg"] {
        fill: #FF1D25;
      }
    }

    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
}
```

Ну а так же сама верстка карточки:

```html
<div class="root">
  <img src={src} alt={name} class="cardImage" />
  <div class="cardDetails">
    <h2 class="cardName">
      Spider-Man
    </h2>
    <h3 class="cardHumanName">
      Peter Parker
    </h3>
    <p class="cardDescription">
      https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b
    </p>

    <div class="cardMeta">
      <div class="like">
        <!-- svg иконка -->
      </div>
      <div class="readBio">
        <a href="#">Read bio</a>
      </div>
    </div>
  </div>
</div>
```

SVG иконку лайка вы можете скачать отсюда [SVG Heart](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fheart.svg?alt=media&token=933d6a15-1fec-4f5a-b84b-dc1c67c217f8)


## 03.04 - Передаем Props в карточку героя

![vimeo](https://vimeo.com/699479458)


## 03.05 - Коллекция и ключи

![vimeo](https://vimeo.com/699479891)


## 03.06 - Событие onClick

![vimeo](https://vimeo.com/699480048)


## 03.07 - useState первые шаги

![vimeo](https://vimeo.com/699480989)

## 03.08 - like Card

![vimeo](https://vimeo.com/699507054)


## 03.09 - unlike Card

![vimeo](https://vimeo.com/699481707)


## 03.10 - Поднятие состояния

![vimeo](https://vimeo.com/699491792)

# Homework #3

Should be UPD
