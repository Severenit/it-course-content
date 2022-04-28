# Урок №5: Знакомимся с React Router v6

Я рад вас приветствовать на прекрасной теме – роутинг. Наконец-то мы с вами начнем создавать не просто приложение, а
настоящий SPA. Несмотря на то, что мы познакомимся с вами с основами, и закрепим знания, нам еще предстоит много
интересного узнать в теме роутинга.

Ну а теперь посмотри видео по очереди, не пропускай ни одно видео, все они принесут тебе пользу:

## 05.01 - Разбор ДЗ

![vimeo](https://vimeo.com/702938305)

## 05.02 - Создаем Button (ДЗ)

![vimeo](https://vimeo.com/702934189)

## 05.03 - Знакомьтесь React Router

![vimeo](https://vimeo.com/702934884)

## 05.04 - Routes && Route

![vimeo](https://vimeo.com/702935208)

## 05.05 - Link

![vimeo](https://vimeo.com/702935427)

## 05.06 - Outlet

![vimeo](https://vimeo.com/702935623)

## 05.07 - Динамические url

![vimeo](https://vimeo.com/702936154)

## 05.08 - useNavigate

![vimeo](https://vimeo.com/702936381)

# Homework #5

Итак домашнее задание на сегодня:

Нам нужно реализовать четыре страницы:

- Main Page
- Characters Page
- About Game Page
- Contacts Page

Обратите внимание, что на странице Characters нам надо отобразить пока что 6 наших героев, которе при нажатии на "Read
Bio" откроют еще одну страницу уже с описанием героя...

Герои на главной странице будут вести на конкретного героя в подразделе Characters

На странице Contacts расположите свою фотографию и информацию о себе))

На странице About Game расположите информацию следующую

```text
Triple Triad is played on a blank 3-by-3 square game board. Squall plays against one opponent at a time in turn-based gameplay. Both players have five cards in their hand at the start of the game. The absolute simplest explanation of the game is that it plays like the card game, WAR. A number on one player's card will be played against a number on the other player's card. The high number wins the turn.

Each player is assigned a color at the start of the game, either red or blue. One player's cards will have a red background. The other player's cards will be blue. This is done to indicate both initial ownership of the card, and points as the game continues to progress. Each card of the player's color on the grid is a point. As cards are played and adjacent sides compared, they may change colors to show which player has won the turn and is currently winning the game.

When a card changes to the player's color, this is called capturing a card. If it is not their turn, the player cannot capture any cards. A card may change colors multiple times during play. Multiple cards may change color during a turn. Once the grid is filled with cards, the game is determined to be a win/loss or a draw. At this point, the player that has the most cards of their color on the grid wins the game.

Each card in this mini-game features four numbers that form a cross in the top left corner. The numbers range from one through nine and A, which is number 10. Each number in the cross corresponds to a side of the card. Creatures and characters are used as card art. Cards may also have an elemental icon, which is specific to the Elemental rule set, and is not in play unless there are also elemental icons on the grid.

A card may be played anywhere on the Triple Triad grid, including spaces where there is no adjacent card. However, due to the limited number of available spaces on the grid, cards must eventually be played against one another.

When one player's card is placed adjacent to the other player's card(s) on the grid, the touching sides are compared, and the high number of each touching side wins that turn. Depending on where on the grid a card is placed, a card may be played against multiple cards at the same time. For instance, if a card is placed in the center space on the grid, each side of the player's card will be compared with the adjacent side of each other card to the top, bottom, left and right, as long as those other cards belong to the opponent.

If the grid is filled with cards, and both players possess an equal number of cards of their color, a Draw will occur. Depending on the rules in play, the game may end here, with no cards exchanged. Or, it may result in a sudden death scenario where the grid is cleared, and the game is played until one player wins. Again, depending on the rules in effect, the winner will claim a prize of one of the loser's card.
```
