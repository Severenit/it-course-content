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
  <img src="https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b" alt="Spider-Man" class="cardImage" />
  <div class="cardDetails">
    <h2 class="cardName">
      Spider-Man
    </h2>
    <h3 class="cardHumanName">
      Peter Parker
    </h3>
    <p class="cardDescription">
      Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.
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

В этом видео мы с вами используем массив героев:

```js
const CHARACTER = [
  {
    "id": 1011334,
    "name": "Spider-Man",
    "description": "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fspider-man.png?alt=media&token=8ff4b083-81ed-449f-823c-c79110735d1b"
    },
    "humanName": "Peter Parker",
    "isLike": false,
  },
  {
    "id": 1021331,
    "name": "Doctor Strange",
    "description": "As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fdoctor-strange.png?alt=media&token=299d8900-328f-4b0d-9116-aa9e0308a4b6"
    },
    "humanName": "Stephen Strange",
    "isLike": false,
  },
  {
    "id": 1167381,
    "name": "Captain America",
    "description": "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-america.png?alt=media&token=80c42b19-614d-46fa-9c83-8ab4ff218495"
    },
    "humanName": "Steve Rogers",
    "isLike": false,
  },
  {
    "id": 1127131,
    "name": "Iron Man",
    "description": "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Firon-man.png?alt=media&token=e9a4443f-0dbc-4f49-aef9-7f8e7b261fab"
    },
    "humanName": "Tony Stark",
    "isLike": false,
  },
  {
    "id": 1113431,
    "name": "Hulk",
    "description": "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fhulk.png?alt=media&token=5ae03f4c-e513-4b3c-bae2-c82e6d6add8a"
    },
    "humanName": "Bruce Banner",
    "isLike": false,
  },
  {
    "id": 1010536,
    "name": "Capitan Marvel",
    "description": "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    "thumbnail": {
      "path": "https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcapitan-marvel.png?alt=media&token=fb83366e-4902-4541-a732-2efbb55147e5"
    },
    "humanName": "Carol Danvers",
    "isLike": false,
  }
];
```

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

Итак домашнее задание, оно с подковыркой и нужно подумать.

Первое и самое главное не забудьте создать карточки и вывести 6 героев на страницу.

После того как вы научитесь лайкать и отлайкивать героев, в последнем видео урока, мы научились делать проброску событий наверх и даже узнали id карточки по которой мы кликнули.

Так вот наша задача найти по этому id героя, и поменять ему поля **isLike** в положение `true` или `false`

> ❗❗️❗ОБРАТИТЕ ВНИМАНИЕ❗❗️️❗️
> Мы еще это не обговаривали в уроке, но уже скоро будем, но хочется отметить что наш setCharacter ожидает обновленный массив данных.
> Т.е. мы должны создать копию нашего предыдущего массива character, и работать только с ней.

Для выполнения этого задания вам могут понадобиться методы `.map()` или метод `.find()` и spread операция.

Я специально даю это задание на подумать, т.к. хочу что бы вы нашли решение самостоятельно, ведь рассказать как оно должно быть легче всего, а вот вначале попробовать самим, а потом узнать, а почему так, намного ценнее.
