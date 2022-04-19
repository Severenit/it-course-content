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
      text: 'Spider-Man (Peter Parker) In Comics Powers'
    },
    {
      type: 'h2',
      text: 'Biography',
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
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fhulk%2F006hbb-com-mnt-ih186-07.jpeg?alt=media&token=69999bf2-8ec0-4c1e-829f-3dc2ab130f11'
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
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fhulk%2F006hbb-com-mnt-ih501-04.jpeg?alt=media&token=d8ba1146-f265-4ada-b60a-41027eb64080'
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
  ],
  1127131: [
    {
      type: 'h1',
      text: 'Iron Man (Tony Stark) In Comics Powers'
    },
    {
      type: 'h2',
      text: 'COOL EXEC, HEART OF STEEL'
    },
    {
      type: 'paragraph',
      text: 'Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father’s footsteps, inheriting Stark Industries upon his parents’ untimely death. Tony designed many weapons of war for Stark Industries, far beyond what any other company was creating, while living the lifestyle of a bon vivant.'
    },
    {
      type: 'paragraph',
      text: 'Fate would take a dark turn for Tony Stark once he decided to consult on a weapons contract overseas in enemy terrain. An improvised explosive device exploded underneath Tony’s transport, and he was brought to the brink of death.'
    },
    {
      type: 'paragraph',
      text: 'Awakening as a prisoner of the warlord Wong-Chu, Tony made a gruesome discovery: the explosion had sent a piece of shrapnel mere inches from his heart. It was only the timely intervention of fellow captive and engineer Yinsen that kept the shrapnel at bay.While held captive, and forced to work on weapons, Tony turned his near-death experience into inspiration. What if he could power an iron suit that would not only keep the shrapnel from killing Tony, but also help him to escape?'
    },
    {
      type: 'img',
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Firon-man%2F002irm_com_inl_01.jpeg?alt=media&token=d390af0a-c0fb-43e5-9ed0-10b7ea0330b1'
    },
    {
      type: 'paragraph',
      text: 'Combining their genius, Tony and Yinsen built a mighty suit of iron armor that would be dubbed Iron Man. This first suit left a lot of room for improvement, but it still did what Tony couldn’t do alone. Yinsen sacrificed his life so the final preparations could be made, and Tony, wearing the Iron Man suit for the first time, escaped and returned to the United States a changed man.With full access to his equipment, Tony built a new, more streamlined suit of armor—the first of many updated versions he would create—and dedicated his life to fighting threats to the world.'
    }
  ],
  1021331: [
    {
      type: 'h1',
      text: 'Doctor Strange (Stephen Strange) In Comics Powers'
    },
    {
      type: 'h2',
      text: 'Biography'
    },
    {
      type: 'paragraph',
      text: 'As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.'
    },
    {
      type: 'h2',
      text: 'With These Hands'
    },
    {
      type: 'paragraph',
      text: 'Awakening as a prisoner of the warlord Wong-Chu, Tony made a gruesome discovery: the explosion had sent a piece of shrapnel mere inches from his heart. It was only the timely intervention of fellow captive and engineer Yinsen that kept the shrapnel at bay.While held captive, and forced to work on weapons, Tony turned his near-death experience into inspiration. What if he could power an iron suit that would not only keep the shrapnel from killing Tony, but also help him to escape?'
    },
    {
      type: 'img',
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fdoctor-strange%2F009drs-com-mnt-drs-01.jpeg?alt=media&token=b482e335-7a08-4e29-8d8f-6b49d3f44f15'
    },
    {
      type: 'paragraph',
      text: 'Knowing his reliance on his medical abilities to support his affluent lifestyle, Strange began to seek a source of healing for his hands until the quest drained him of his resources and he faced a dark and uncertain future. Having crossed off all grounded cures from his list, he followed a path of rumor and legend to Tibet for a more esoteric shelter. There, high in the mountains, he met the Ancient One, a master mystic, and caught his first glimpse of a much larger universe.'
    },
    {
      type: 'paragraph',
      text: 'Strange embarked on a journey to learn the art of magic under the Ancient One’s tutelage when he realized that the art of medicine would remain closed off from him forever. The former medico excelled at his lessons and grew to be as adept at spells and sorcery as he once was at surgery. The Ancient One saw in Strange a most gifted pupil and after years of schooling him, presented him with powerful artifacts with which to protect the Earth from many and varied menaces.'
    },
    {
      type: 'paragraph',
      text: 'Returning to the West, Strange set up a new practice in New York City, and settled into his destined role as a sage, an occult advisor, and a Master of the Mystic Arts.'
    }
  ],
  1167381: [
    {
      type: 'h1',
      text: 'Captain America (Steve Rogers) In Comics Powers'
    },
    {
      type: 'h2',
      text: 'Biography'
    },
    {
      type: 'paragraph',
      text: 'From the dark days of world war to the explosive challenges of today, Super-Soldier Captain America stands ready as a shining sentinel of liberty to shield the oppressed and fight for freedom everywhere.'
    },
    {
      type: 'h2',
      text: 'Ninety-Eight-Pound Weakling'
    },
    {
      type: 'paragraph',
      text: 'A poor orphan from the wrong side of the tracks in the days leading up to World War II, goodhearted Steve Rogers enlisted in the army to fight the Axis Powers, but met with rejection due to his small size and underdeveloped physique. Professor Abraham Erskine, a pioneer in the development of a Super-Soldier for the United States, saw potential in Rogers and whisked him into Project Rebirth, the professor’s bold experiment in enhancing the human body to its peak powers.'
    },
    {
      type: 'paragraph',
      text: 'Rogers found himself subjected to Erskine’s treatments— a specialized serum and exposure to a unique form of radiation—and realized the professor’s dream, becoming the world’s first, fully developed Super-Soldier. Now muscular and tall, as well as possessed of amazing strength and agility, the former ninety-eight-pound weakling watched in horror as a Nazi spy shot and killed Erskine, and thereby ensured Rogers would be the last of his kind.'
    },
    {
      type: 'paragraph',
      text: 'The United States government moved swiftly to fashion Rogers into a living symbol of inspiration to the public at home and soldiers abroad. And, after extensive combat training he debuted in a colorful, patriotic uniform as Captain America. Operating out of the army’s Camp Lehigh in Virginia, Rogers posed as an ordinary soldier, but conducted secret missions stateside and abroad as his alter-ego to smash spies, saboteurs, and the occasional Super Villain who threatened the country he loved so dearly. Soon, Cap captured the attention of the Red Skull, his evil counterpart in Germany, and the two formed a lasting enmity over the course of the war. The hero also gained a near-indestructible shield with which he became supremely efficient in both offense and defense.'
    },
    {
      type: 'img',
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fcapitan-america%2F003cap-com-mnt-cac1-01.jpeg?alt=media&token=a7fdea9b-198d-43ca-a215-14b769f539aa'
    },
    {
      type: 'paragraph',
      text: 'More costumed champions began to appear and founded a fighting battalion known as the Invaders with Captain America. The Super-Soldier also struck up a close friendship with a young man named Bucky Barnes who was perceived as a kind of sidekick on Cap’s missions, though Bucky possessed his own formidable skills. Toward the end of the war, the famous fighting duo closed in on Baron Zemo, a Nazi scientist who’d committed nearly as many atrocities against the Allies as the Red Skull, and moved to destroy an experimental plane he coveted. Unfortunately, Cap and Bucky found themselves caught in the aircraft’s fiery demise while in flight, and both tumbled into the ocean, leading Cap to believe Bucky had perished in the explosion.'
    },
    {
      type: 'paragraph',
      text: 'Due to Erskine’s serum coursing through his veins, Cap’s body went into suspended animation once submerged in the frigid waters, and ended up encased in solid ice. In this manner, he slept away the decades until discovered by the Avengers, a team of Super Heroes, in modern times. Awakened and resuscitated, Cap’s astonishment in realizing he’d lost Bucky and everyone he’d ever cared for quickly gave way to his unshakable sense of duty and he once again donned his famous shield and outfit to join with the Avengers in their ongoing battle against injustice.'
    }
  ],
  1010536: [
    {
      type: 'h1',
      text: 'Captain Marvel (Carol Danvers) Powers'
    },
    {
      type: 'h2',
      text: 'Biography'
    },
    {
      type: 'paragraph',
      text: 'Former Air Force pilot and intelligence agent Carol Danvers pursued her dream of space exploration as a NASA employee, but her life forever changed when she was accidentally transformed into a human-Kree hybrid with extraordinary powers.'
    },
    {
      type: 'paragraph',
      text: 'Now, Carol is the latest warrior to embrace the mantle of Captain Marvel, and she has taken her place as one of the world’s mightiest heroes.'
    },
    {
      type: 'h2',
      text: 'Higher, Further, Faster, More'
    },
    {
      type: 'paragraph',
      text: 'As a NASA security officer, Carol investigated numerous attempts made by the Kree and Skrulls to infiltrate Kennedy Space Center and disrupt America’s space program. During a battle between the heroic Mar-Vell and his rival, Yon-Rogg, Carol was exposed to the Psyche-Magnitron, a Kree device that could make imagination into reality. Carol subconsciously envied Mar-Vell’s powers, and the machine responded to those desires by rewriting her DNA to make her a human/Kree hybrid with abilities similar to his.'
    },
    {
      type: 'paragraph',
      text: 'Carol took on the identity of Ms. Marvel and even fought alongside Mar-Vell/Captain Marvel and the Avengers. Her early career was cut short when Rogue, a member of the Brotherhood of Evil Mutants, attacked Carol and permanently drained her powers and memories. It took years for Carol to recover from her ordeal, but she finally achieved her dream of space exploration and traveled far from Earth. Carol even became cosmically empowered and took on the codename Binary.'
    },
    {
      type: 'paragraph',
      text: 'The Binary powers faded over time, leaving Carol with most of her original abilities. Carol returned to Earth and rejoined the Avengers. Years later, Carol adopted the codename Captain Marvel as a tribute to her fallen friend and mentor. Her prominence has also grown exponentially, and Captain Marvel is now the most popular heroine in the world.'
    },
    {
      type: 'img',
      src: 'https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/marvel-game%2Fcharacters%2Fcapitan-marvel%2F008cmv_com_inl_01.jpeg?alt=media&token=b2499d0e-d955-4929-b2f2-33895f5e2289'
    },
    {
      type: 'h2',
      text: 'Bird of War'
    },
    {
      type: 'paragraph',
      text: 'Carol Danvers was already in excellent shape before she was transformed by the Psyche-Magnitron. Afterwards, Carol’s body was pushed to the peak of human fitness and modified with Kree DNA. Her powers include enhanced strength, stamina, agility, and durability, as well as flight, and almost total immunity to toxins and poisons. Carol also has a “seventh sense” which gives her precognitive flashes of the future, but the power randomly manifests and has largely faded away.'
    },
    {
      type: 'paragraph',
      text: 'As Binary, Carol’s connection to the power of a white hole allows her to generate and control any form of radiation or gravity, as well as the ability to survive and travel in space without the protection of a spacesuit. Although the vast majority of Carol’s Binary powers have been lost, she still retains the ability to absorb energy and fire photonic blasts from her hands. If Carol is exposed to enough energy, her full Binary powers have the potential to temporarily reemerge.'
    }
  ],
}
```

## #5 - Задание со *

В компоненте Header используйте useEffect в котором заведите событие при помощи addEventListener на событие scroll.

Используйте `window.scrollY` что бы узнать значение на сколько вы проскролили страницу.

Как только `scrollY` будет более 60 добавьте классу `s.header` класс `small`

Результат вы так же можете увидеть на примере выше.

### Напоследок

Вам нужно реализовать возвращение со страницы Bio на главную страницу, да это не совсем страницы, а просто переключение
компонентов, но все же, по нажатию на Go Back мы возвращаемся на все карточки.





Ну а на этом все, жду ваши PR, до встречи очень скоро...

Let's keep in touch!
