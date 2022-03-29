# Урок по основам TypeScript

В этом уроке мы разберем:
- Type
- Массивы в TS
- Объект, interface
- Функции в TS
- Generics

Так что, перед тем как выполнить задание, посмотрите видео:

![youtube](https://youtu.be/ahntAVi3GM4)

Вы можете проверить знания пройденные в данном уроке и попробовать выполнить следующие задания:

## Homework TS

### №1 Работа с простыми типами

Напиши тип функции, конкатенирующей две строки

```js
concat('Hello ', 'World') // -> Hello World;
```

### №2 Работа с интерфейсами

Напиши интерфейс для описания следующих данных

```js
const myHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
```

### №3 Типизация функций, используя Generic

В уроке про Generics мы написали интерфейс массива MyArray...

Добавь типизацию для метода reduce

```ts
interface MyArray<T> {
	[N: number]: T;

	reduce();
}
```

До встречи очень скоро...

Let's keep in touch!
