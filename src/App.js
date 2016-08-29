import React from 'react'
import './style.sass'

class App extends React.Component {
  render () {
    return <div>
      <body>
        <header>
          <img src="http://vector.me/files/images/2/2/22059/twilight_zone.png" />
          <h1>The Big Three</h1>
          <h2>An Examination of the Classic Show's Best Writers</h2>
        </header>
        <main>
          <div className="icons">
            <ul>
              <li><img src="http://cache.redgiant.com/_assets/images/community/content/image_redgianttv_list_32.jpg" /></li>
              <li><img src="http://i.imgur.com/tb3gJO3.jpg" /></li>
              <li><img src="http://3.bp.blogspot.com/-dkOIpAQdfik/U9mLyP9JZvI/AAAAAAAAvwk/fCVr6Xx20PM/s1600/zone7.png" /></li>
              <li><img src="https://images-na.ssl-images-amazon.com/images/I/61oq4Z0OrfL._SL1024_.jpg" /></li>
              <li><img src="http://1.bp.blogspot.com/-CUvaAKKVL5c/U9mLvSzxnNI/AAAAAAAAvwA/Gt7jLdhBWM4/s1600/zone11.png" /></li>
            </ul>
          </div>
          <div className="intro">
            <p>After five seasons and 156 episodes, "The Twilight Zone" has become one of the most iconic Anthology Series of all time.  Since its final episode On June 19th of 1964, the series has been imitated, replicated, remade as both a series and a feature film, and even spawned a theme park attraction. </p>
            <p>In examining the series, one will inevitably see three names appear over and over again: Rod Serling (the Creator and Showrunner), Richard Matheson, and Charles Beaumont.  Name a famous episode, and it's almost certain to have been scripted by one of these three writers.  What's particularly interesting though, is that upon closer examination, it becomes easy to guess the writer based on the content of the episode.  The following will discuss this notion in depth, and refer to each of the three writers' particular characteristics as an "Identifier".</p>
          </div>
          <div className="serlingHeader">
            <ul>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Rod_Serling_photo_portrait_1959.JPG" /></li>
              <li><h3>Rod Serling</h3></li>
              <li><img src="https://thenightgallery.files.wordpress.com/2012/04/serling-typewriter.jpg" /></li>
            </ul>
          </div>
          <div className="rodSerling">
            <ul>
              <li>Born: 1924, Syracuse NY</li>
              <li>Known For: Creating "The Twilight Zone" and "Night Gallery"</li>
              <li>Identifier: Character-Driven</li>
            </ul>
            <p>While Rod Serling is inarguably best-known for "The Twilight Zone", not many people know about his social and political activism.  He was a significant voice of the Civil Rights Movement, spoke out against Censorship, and was very open about his anti-war sentiment.  This heavily influenced the style of episodes that he wrote.  Many of his episodes were about war and its consequences.  He even approached incredibly difficult subjects like The Holocaust and the impacts of racism.  Famously, his episode "I Am the Night, Color Me Black", which told the story of a town that plunges into darkness right before a lynching, came very close to never being seen.  CBS finally agreed to air it, but lost advertisers in doing so. </p>
            <p>A Serling "Twilight Zone" episode is almost always Character-Driven.  Perhaps the most famous episode of the entire series is "Eye of the Beholder", a story about a woman whose face is covered by bandages after an operation meant to make her look less hideous and more like the rest of the world turns out to be an incredible beauty- at least by our standards- and everyone else has horrific pig faces. </p>
            <p>This is a perfect example of a Serling-style episode.  It's a bottle episode (the whole thing takes place in one location) and is driven by the array of emotions the woman goes through as she prepares to remove her bandages.  There's no wild or wacky circumstances, no men in silver space suits, not even much action.  The entire episode relies on our connection with this woman as she prepares for the results of what she hopes will be a life-changing operation.  The Oh-Henry style reveal (which "Twilight Zone" mastered) also features a signature Serling move- it has a message. In making his episodes Character-Driven, Rod Serling created opportunities to tell stories that were more than just Sci-Fi TV; they were morality tales.</p>
          </div>
          <div className="mathesonHeader">
            <ul>
              <li><img src="http://vignette3.wikia.nocookie.net/twilightzone/images/a/a3/Richard_Matheson.jpg/revision/latest?cb=20090821061126" /></li>
              <li><h3>Richard Matheson</h3></li>
              <li><img src="https://www.mysteryscenemag.com/images/writers/MathesonRichardheadshot.jpg" /></li>
            </ul>
          </div>
          <div className="richardMatheson">
            <ul>
              <li>Born: 1926, Allendale NJ</li>
              <li>Known For: "I am Legend", "What Dreams May Come"</li>
              <li>Identifier: Narrative-Driven</li>
            </ul>
            <p>An unbelievable number of Richard Matheson's novels, short stories, and TV episodes have been converted into films yet he is relatively unknown.  He's certainly not a household name. And yet his legacy lives on in the sixteen fantastic episodes of "Twilight Zone" he wrote, his dozens and dozens of short stories, and his novels which have been adapted to films such as "I am Legend", "What Dreams May Come", "Stir of Echoes", "The Incredible Shrinking Man", and most recently "The Box" and "Real Steel".</p>
            <p>Matheson is revered by other authors and filmmakers.  Stephen King cites him as one of his greatest influences, alongside giants such as Ray Bradbury and H.P. Lovecraft.  When he passed away, Stephen Spielberg (who's second project ever was as the Director of Matheson's screenplay "Duel") has said that Matheson's "Twilight Zone" episodes are his favorites.  He is also credited as influencing the works of George A. Romero, Anne Rice, Richard Kelly, Roger Corman, and Edgar Wright.</p>
            <p>The reason for this reverence is perhaps because Richard Matheson was an incredible storyteller.  His "Twilight Zone" episodes were almost always plot-driven.  Take his most famous episode, "Nightmare at 20,000 Feet".  The episode tells the story of a man (played by William Shatner in one of his first roles) who, midway through a flight, spots a monster crouching on the wing of the airplane.  Every time he tries to point it out, though, the monster disappears from view.  Thinking the man is crazy, the flight attendants continue on with their work.  This continues and reaches a climax when he decides to take matters into his own hands by stealing a police officer's gun, climbing out the emergency exit, and killing the monster.  When the plane lands, the man is carried way in a straightjacket.  The final shot of the episode is of the airplane's wing, where there is clearly damage that was caused by the monster.  This is clearly a Matheson episode because it tells a full story, is more concerned with action than with emotion, and includes a signature of his- paranoia.  If Serling's episodes are often morality-tales, Matheson's are often allegories.</p>
          </div>
          <div className="beaumontHeader">
            <ul>
              <li><img src="http://www.valancourtbooks.com/uploads/2/7/0/1/27017582/7637198.jpg?1429875165" /> </li>
              <li><h3>Charles Beaumont</h3></li>
              <li><img src="http://www.azquotes.com/public/pictures/authors/bd/d0/bdd0650ae9787dbc70288225c54ce38b/5542c5b989d92_charles_beaumont.jpg" /></li>
            </ul>
          </div>
          <div className="charlesBeaumont">
            <ul>
              <li>Born: 1929, Chicago IL</li>
              <li>Known For: "The Masque of Red Death", "Twilight Zone"</li>
              <li>Identifier: Concept-Driven</li>
            </ul>
            <p>Perhaps the least well-known of the three, Charles Beaumont is certainly most famous for his addition to the "Twilight Zone".  Unlike Rod Serling he never craved the spotlight, and unlike Richard Matheson very few of his works were adapted for the screen.  Nonetheless, Beaumont's contribution to the speculative fiction genre at large cannot be overstated.  Beaumont's body of work is especially impressive considering the fact that he only lived to the age of 38. </p>
            <p>Dean Koontz once stated "Charles Beaumont was one of the seminal influences on writers of the fantastic and macabre."  This is evidenced most prominently by his work writing for "The Twilight Zone", where he penned twenty-two episodes including classics such as "The Howling Man", "Long Distance Call", "Living Doll", and perhaps most famously, "Number 12 Looks Just Like You". </p>
            <p>"Number 12 Looks Just Like You" is about a dystopian society where, at a certain age, all young adults must choose from a limited collection of beautiful and flawless bodies to inhabit for the remainder of their lives.  This process is known as the "Transformation" and it is required in order to be a functioning part of society.  On the eve of her Transformation, a young woman decides that she wants to maintain her unique, albeat average-looking (at least according to this society's standards) body, rather than conform to societal rules and look the same as everyone else.  She expresses this desire to her mother, whose immediate response is to offer her a glass of "Liquid Smile" so that she calms down and accepts that the Transformation is required.  This is a classic Beaumont premise.  It addresses the notion of conformity and psychopharmacology- two things that seemed to often pop up in the young writer's work.  It has a narrative for sure, and it definitely is interested in its main character's point of view, but it absolutely differs in that the most important aspect of the episode is not the plot or the person but the concept.  This is the key indicator of a Beaumont episode.  If Serling told morality-tales, and Matheson told allegories, than Charles Beaumont no doubt told cautionary-tales.</p>
          </div>
        </main>
        <footer>
          <ul>
            <li>Copyright 2016</li>
            <li>Special thanks to Wikipedia</li>
            <li><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png" /></li>
          </ul>
        </footer>
      </body>
    </div>
  }
}

export default App
