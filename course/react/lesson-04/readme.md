# Урок №4: Иммутабильность в React и жизненные фазы/циклы компонента

Этот урок имеет большое теоретическое значение. Здесь разобраны очень важные моменты, которые встречаются не только на
собеседовании, но и в повседневной нашей разработке. Часто мы даже не задумываемся, а почему мы делаем так или эдак. Но
именно понимание этих вещей даст вам более глубокое понимание React и возможность не допускать ошибок в дальнейшем.

Ну а теперь посмотри видео по очереди, не пропускай ни одно видео, все они принесут тебе пользу:

## 04.01 - Разбор ДЗ

![vimeo](https://vimeo.com/700481232)

## 04.02 - Неизменяемые (Immutable) переменные

![vimeo](https://vimeo.com/700481326)


## 04.03 - Жизненный цикл компонента

![vimeo](https://vimeo.com/700483500)


## 04.04 - Методы жизненного цикла классового компонента

![vimeo](https://vimeo.com/700486681)

## 04.05 - Жизненные фазы функционального компонента

![vimeo](https://vimeo.com/700486760)


## 04.06 - Ререндер функционального компонента

![vimeo](https://vimeo.com/700486853)


## 04.07 - Условный рендеринг

![vimeo](https://vimeo.com/700487390)


# Homework #4

По окончанию домашней работы я рассчитываю от вас увидеть примерно такой результат:

![Finish Result](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F04%2FFinishResult.gif?alt=media&token=8f742c15-f3bd-4428-b0b8-146eaabf58ec)

Итак, мы узнали массу интересного из этого урока.

А теперь давайте применим знания полученные в нашем уроке.

Пойдем по порядку.

## #1 - Компонент <Button />

Давайте создадим с вами компонент *Button* в нашей общей папку *components*

Стиль уже есть в нашем компоненте `<Slider />` если вы были внимательны конечно (:

Кнопка должна быть двух видов.

![Button #1](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F04%2FScreenshot%202022-04-19%20at%208.55.38%20PM.png?alt=media&token=7c441988-0764-4881-b947-9cc2386a4c0b)

![Button #2](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F04%2FScreenshot%202022-04-19%20at%208.55.46%20PM.png?alt=media&token=4069b021-ec61-4b8e-8535-3c70c87ecb15)

Так что подумайте, какие **props** ей надо передать чтобы иметь возможность рисовать кнопку разных форматов.

## #2 - Компонент страница `<Biography />`

Итак, у нас появляется новая папка в приложение, это папка **pages**, она лежит на уровне с папкой components.

В этой папке создаем компонент **Biography**

Этот компонент должен принимать в **props** id нашего будущего героя.

А так же продолжаем учиться пробрасывать события наверх. Так что заведите событие **onBackClick** - это будет функция!

## #3 - Создаем импровизированный роутинг

Итак, давай по клику на *Read bio* в нашей карточки, мы будем брать этот **id**, записывать его в локальный стейт, и вместо текущего контента отображать нашу страницу **Biography**

Не забудьте в эту страницу передать id из локального стейта.

## #4 - Работа с данными

Ну а теперь самое интересное.

На странице **Biography** нам надо взять данные по id карточки.

Это массив, который содержит набор полей. Пройдясь по этому массиву мы можем отобразить тот или иной компонент, а у нас уже с вами есть компонент Heading и Text которые мы можем использовать в тексте.

В результате вы получите страницу показанную в примере выше, что у нас должно получиться.

```js
export const BIO = {
  1011334: [
    {
      type: 'h1',
      text: 'SPIDER-MAN'
    },
    {
      type: 'paragraph',
      text: 'With spider-like abilities, science genius Peter Parker swings above it all as Spider-Man, costumed champion of the innocent who lives and fights with the wisdom of “With Great Power Comes Great Responsibility!”',
    },
    {
      type: 'h2',
      text: 'Puny Parker',
    },
    {
      type: 'paragraph',
      text: 'High school student and child prodigy Peter Parker submerged himself in his passion for science to avoid the taunts and threats of his fellow classmates and stumbled into a world beyond his imagining. While visiting a public exhibition of new breakthroughs in radiation manipulation and genetics, Parker felt the bite of a common house spider exposed to a particle beam and felt immediately ill from it, little realizing how much his life would change in the coming hours.',
    },
    {
      type: 'paragraph',
      text: 'On the way home, the teenager unconsciously avoided a wayward automobile by making an incredible leap to the wall of a nearby building, finding himself miraculously able to stick to it by his hands and feet. Quickly realizing he had somehow acquired the abilities of a spider, he began testing his new-found powers and marveled at their width and breadth. Parker tested his spider abilities in the ring of a local wresting competition and, wearing a mask to hide his identity, easily bested the reigning champion.',
    },
    {
      type: 'paragraph',
      text: 'Parker, an orphan, lived with his kindly Aunt May and Uncle Ben and was wary of exposing them to the public scrutiny that would surely ensue if he revealed his powers to the world, so he adopted a suitable costume and the name of “Spider-Man” to hide his true identity. He also designed and crafted two wrist-worn “web-shooters” to approximate a spider’s web-spinning capability, and with them swiftly became a smash television personality. Now with money to take care of his guardians and acclaim to salve puny Peter Parker’s wounds from classmates, the young man grew cold to everything but his media-darling career.',
    },
    {
      type: 'img',
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fspider-man%2F005smp_com_inl_01.jpeg?alt=media&token=818c2f05-07b7-48f5-a73e-73fa00d2cf5e'
    },
    {
      type: 'paragraph',
      text: 'Everything changed when, in an act of selfishness, Parker allowed a burglar to escape police arrest during a Spider-Man appearance rather than intervene. Later, when he returned home, he learned of his Uncle Ben’s murder at the hands of the very same burglar and instantly felt the weight of hubris upon his young shoulders. Vowing never to use his powers again for his own gain, he tracked down his uncle’s killer as Spider-Man and brought him to justice. From that moment on, he abandoned his media star persona and spun his web solely to capture criminals of all kinds.',
    },
    {
      type: 'h2',
      text: 'Great Power',
    },
    {
      type: 'paragraph',
      text: 'Like his namesake, Spider-Man’s strength and agility stand far above those of the average human, allowing him to lift nearly ten tons and to leap and move at incredible speeds with high accuracy. He also heals faster than normal when injured, though he is not completely immune to viruses and other human ailments.',
    },
    {
      type: 'paragraph',
      text: 'An inner “spider-sense” allows him a high degree of awareness to impending danger and to gauge not only its level of threat to him personally, but also the general direction of its approach. Combined with his unique fighting style, this grants Spider-Man an edge in his battles that often times defies logic.',
    },
    {
      type: 'paragraph',
      text: 'Spider-Man has designed and built many devices to aid him in his crime fighting, but the stand-out invention among these are his web-shooters. Strapped to both his wrists and activated by finger pressure applied to touch pads on his palms, the shooters can spray a unique fluid of the hero’s creation which solidifies to various thicknesses upon exposure to air and form into “webbing.” The tensile strength of the substance may be modified with each activation of the shooters, but at its peak can stop a large vehicle and also hold several persons for nearly two hours, after which, the webbing begins to dissolve.',
    },
    {
      type: 'paragraph',
      text: 'In addition, Spider-Man carries small “spider tracers” that once placed upon a person or object transmit a specialized signal the hero may identify with his spider-sense and thus allow him to track to its origin point.',
    },
    {
      type: 'img',
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fspider-man%2F005smp_com_inl_02.jpeg?alt=media&token=c5f56536-5ace-40d9-a39f-d19d01d2b809'
    },
  ],
  1113431: [
    {
      type: 'h1',
      text: 'Hulk (Bruce Banner) In Comics Powers',
    },
    {
      type: 'h2',
      text: 'Way of the Wandering Warrior'
    },
    {
      type: 'paragraph',
      text: 'While avoiding General Ross and the U.S. Army, the Hulk took on extra-normal opponents such as the wily Gargoyle and the subterranean Tyrannus as his transformations back and forth to Bruce Banner became less erratic and more stabilized. Eventually, the change into a now-green form would usually occur mostly due to Banner’s adrenaline rushes, something the worried scientist worked desperately to control while he hid his secret from the world.'
    },
    {
      type: 'paragraph',
      text: 'When the Asgardian god of mischief Loki sought to sow chaos for his half-brother Thor, he manipulated Hulk into a clash with Thor, Iron Man, Ant-Man, and the Wasp, though he only succeeded in the inadvertent creation of a new team of heroes, the Avengers. Suspicious of his teammates, the Hulk left very shortly after the team formed, and soon began an alliance with Namor the Sub-Mariner to oppose the Avengers. When that too fell apart, the green behemoth returned to his wanderings and infrequent battles with General Ross’ “Hulkbusters” fighting unit.'
    },
    {
      type: 'paragraph',
      text: 'Believing he operated in Banner’s best interests, Rick Jones revealed the scientist’s secret to Ross and his daughter Betty, and before long the public knew the truth of the connection between Banner and the Hulk. Banner subsequently proposed to Betty, but the Hulk came between them and the young woman went on to marry Bruce Talbot, one of her father’s army majors and a steadfast rival of Banner’s. The Hulk helped the mystic Dr. Strange and Namor defeat an otherworldly threat to the Earth and joined Strange’s loose “non-team” the Defenders for many adventures in the years to come alongside various teammates.'
    },
    {
      type: 'img',
      src: ''
    },
    {
      type: 'paragraph',
      text: 'At one point, the Hulk was transported to another plane of existence, where he met the beautiful queen Jarella and fell in love with her. Then, back on Earth, Banner performed a blood transfusion on his wounded cousin Jennifer Walters, which caused her to change into a “She-Hulk,” and later Banner accepted the Hulk as an integral part of himself. When an accident allowed the Hulk to retain his alter-ego’s intelligence, the U.S. president pardoned the creature, until Banner once again lost control of his other self. Wandering once more, and near-mindless, the Hulk found himself at an other-dimensional crossroads, the result of Dr. Strange’s well-meaning spells, and entered into a new series of weird adventures there.'
    },
    {
      type: 'paragraph',
      text: 'Brought back to Earth accidentally by the Canadian super team Alpha Flight, the Hulk rampaged across the land before being separated into two wholly separate beings, himself and Bruce Banner. Believing a new future lay ahead of him, the scientist proposed again to the now-divorced Betty Ross, but their hopeful new wedded life fell quickly into chaos when the Hulk and Banner were reintegrated. After that, a strange, intelligent, and grey-skinned version of the Hulk—not unlike his first form— emerged to work as an enforcer nicknamed Mr. Fixit in Las Vegas for a time.'
    },
    {
      type: 'paragraph',
      text: 'The green Hulk eventually returned and due to the work of psychiatrist and fellow gamma-mutate Doc Samson, grew more intelligent. Now known as the Professor, this clever, smart Hulk met and joined the secretive group called the Pantheon, faced his own possible future-self, the Maestro, and reverted back to his more-brutish form when Banner received shrapnel close to his brain after an attack. The scientist also finally made peace with the ghost of his abusive father after the mutant Apocalypse removed a dangerous shard in his head and his beloved Betty seemingly died.'
    },
    {
      type: 'paragraph',
      text: 'A revived Betty came to Banner in the guise of the mysterious “Mr. Blue” to teach her husband self-hypnosis to help him control the inner Hulk. The Leader framed the green giant for murder, prompting Banner to hit the road and avoid the gamma villain’s bid to insert his own mind into the Hulk’s body. Another gamma bomb explosion temporarily resurrected the grey Hulk, and a collection of the smartest heroes on Earth called the Illuminati shot the Hulk into space for permanent exile, but a space warp transported him to the far-flung planet Sakaar where he became a popular warrior, and eventually the world’s ruler.'
    },
    {
      type: 'paragraph',
      text: 'Lasting happiness on Sakaar eluded the Hulk when the power cell in his spaceship exploded and decimated a large portion of the planet, along with his queen. Returning to Earth for revenge on the Illuminati, the Hulk went on a rampage until Iron Man devised a way to transform the behemoth back into Bruce Banner and hold him in stasis. During this time, the Hulk was befriended by boy genius Amadeus Cho, and Banner witnessed the advent of both a new Red Hulk (secretly “Thunderbolt” Ross) and Rick Jones’ transformation into the blue beast called A-Bomb. The original Hulk finally returned to put all newcomers in their place, as well as to deal with the arrival of his son Skaar from Sakaar and Betty as a Red She-Hulk.'
    },
    {
      type: 'img',
      src: ''
    },
    {
      type: 'paragraph',
      text: 'Doctor Doom managed to separate Banner and his alter-ego once again, and the now-insane scientist sequestered himself on a remote island where he waged a private war on the Hulk. When the two were finally recombined, the Hulk joined the spy organization S.H.I.E.L.D. and after being healed of a head wound by Iron Man’s Extremis formula, manifested yet another new personality, Doc Green. Intelligent again, the Hulk decided to rid the world of all gamma-mutates—including his own cousin, She-Hulk—by taking back the radiation’s effects. However, when Amadeus Cho absorbed his own gamma-powers, the boy became the new Hulk.'
    },
    {
      type: 'paragraph',
      text: 'Guilt-ridden from all the hurt his alter-ego delivered to the world, Banner placed himself into seclusion until drawn from it by another “civil war” between Earth’s champions over an Inhuman with visions of the future. One such vision illustrated the Hulk’s eventual destruction of numerous heroes, but when Iron Man and others confronted Banner to take him into their custody, the archer Hawkeye subverted their intentions and killed the scientist with an arrow through his brain.'
    },
    {
      type: 'paragraph',
      text: 'Later, the nefarious Hand ninja clan stole Banner’s body to resurrect it for their own purposes, and mad bio-engineer Arnim Zola subsequently revived the Hulk for another temporary rampage during Hydra’s recent takeover of the United States.'
    }
  ]
}

```

## #5 - Задание со *

В компоненте Header используйте useEffect в котором заведите событие при помощи addEventListener на событие scroll.

Используйте `window.scrollY` что бы узнать значение на сколько вы проскролили страницу.

Как только `scrollY` будет более 60 добавьте классу `s.header` класс `small`

Результат вы так же можете увидеть на примере выше.



Ну а на этом все, жду ваши PR, до встречи очень скоро...

Let's keep in touch!
