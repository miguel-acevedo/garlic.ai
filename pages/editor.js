import React, {Component, PropTypes} from 'react';

class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        content: [
            {
                "title": "God Thinks This Planet Is Pretty Crappy",
                "content": "HOLLYWOOD, CA—Shaken by the recent spate of bad weather and natural disasters he’s orchestrated, a concerned God today admitted that He is beginning to worry this planet He made might not be very good. “Honestly, I don’t know if I did such a great job after all because lately there have been so many volcanoes erupting and tsunamis wiping people out and economically devastating blizzards taking place,” God told reporters gathered outside His heavenly throne. “Maybe this Earth is more trouble than it’s worth, and I should just blow it up while I still have the chance. But then again at least humanity is going to burn in torment for all eternity. Oh well—better luck next time?”"
            },
            {
                "title": "America Now Abuzz Over Speculation That Bush Had Sex With Boar",
                "content": `As President George W. Bush awaited medical tests yesterday at Bethesda Naval Hospital, rumors about an alleged weekend-long boar hunt fuelled speculation across the nation about whether or not he actually had sex with a wild hog between hunting excursions. Since details have yet to be confirmed by White House correspondents or by independent investigators, members of Bush's Council on Environmental Quality, who spent the weekend in rural Texas with the president and his entourage, remain tight-lipped about what occurred. But at a press conference in New York this morning, where he appeared alongside former vice president Al Gore to publicize a nationwide action against anthropogenic global warming, Harvard academic Dr. David L. Barker stated: "I believe I can speak for the entire scientific community when I say that we are absolutely certain Mr. Bush is aware of bestiality as a possible activity with the wildlife he encounters in his treks."`
            },
            {
                "title": "Kill Your Kittens for Vitamin A!",
                "content": `HONG KONG—In a startling health breakthrough Thursday, scientists reported a revolutionary new fat-soluble vitamin in kittens that can combat macular degeneration and other age-related diseases on humans as well as cats. "We all know plenty of people who are loving toward their elderly cats but too cheap to take them in for medical treatment," said lead researcher Hugh Josephson. "Well, not any more." Eatery owner Yuzo Chang added that he will soon be adding kitten liver to his seafood platter because “everyone knows cat liver is an aphrodisiac that will help keep my wife happy with me during all these years we have ahead of us together” and also because he has always wanted to eat cat liver since childhood when his mother cooked it “in this delicious sauce made from her own bodily fluids” but she wouldn’t let him until he became a man.`
            },
            {
                "title": "Ex-Wife Now Fondly Remembers Asshole Ex-Husband",
                "content": `ST. LOUIS-Despite a tumultuous divorce and litigation, ex-wife Lisa Serrano has gone from hating her former husband to missing him terribly. "We were married for 12 long, stressful years when I finally got wise in time to save myself," said the 43-year-old Serrano. "Running away with my boss was one of the biggest mistakes of my life, but boy did Sean make me feel pretty at the time." Serrano went on to say that though she is now happily remarried and wishes nothing but good will upon husband Sean Petersoffianovitchanovitskiyogradtheydonthaveamethodtoaccountforallthisstupidname's family, there are times when she still wonders what her ex is up to these days and catches herself mourning his absence.`
            }
        ],
        current: 0
      };
      
      this.plusOne = this.plusOne.bind(this);
      this.minusOne = this.minusOne.bind(this);
      this.handleHeadline = this.handleHeadline.bind(this);
      this.handleContent = this.handleContent.bind(this);
    }
  
    componentDidMount() {
      var addScript = document.createElement('script');
      addScript.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.slim.min.js');
      document.body.appendChild(addScript);
      var addScript = document.createElement('script');
      addScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
      document.body.appendChild(addScript);
      var addScript = document.createElement('script');
      addScript.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
      document.body.appendChild(addScript);
  
    }

    plusOne() {
        this.setState(prevstate => ({ current: prevstate.current += 1 }));
    }

    minusOne() {
        this.setState(prevstate => ({ current: prevstate.current -= 1 }));
    }

    handleHeadline(e) {
        //this.setState(prevstate => ({  }))

        const input = e.target.value;

        // this.setState(prevState => ({
        //     content: {
        //         ...prevState.content,
        //         [prevState.content[0]["title"]]: "HIIII",
        //     },
        // }));

        const newContent = this.state.content.slice() //copy the array
        newContent[this.state.current].title = input //execute the manipulations
        this.setState({content: newContent}) //set the new state

        console.log(e.target.value)
    }

    handleContent() {
        setTimeout(
            function() {
                const newContent = this.state.content.slice() //copy the array
                newContent[this.state.current].content = "NEWWW STUFF" //execute the manipulations
                this.setState({content: newContent}) //set the new state
            }
            .bind(this),
            3000
        );

    }

    giveAlert() {
        alert("Article published!")
    }

    render() {

        return (
            <div className="App">
              <header>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
              </header>

              <body>
                  <div className="container">
                      <div class="col-7">
                    <h1>Dashboard</h1>

                    <p>Your GPT-3 generated articles are ready for review.</p>
                    
                    <button onClick={this.minusOne} type="button" class="btn btn-dark" style={{"marginRight": "10px"}}>Prev</button>
                    <button onClick={this.plusOne } type="button" class="btn btn-dark">Next</button>

                    <br></br>
                    <br/>

                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Headline</label>
                            <input value={this.state.content[this.state.current].title} onChange={this.handleHeadline} type="email" class="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Body text</label>
                            <textarea value={this.state.content[this.state.current].content} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary" style={{"marginRight": "10px"}} onClick={this.handleContent}>Regenerate</button>
                        <button type="button" class="btn btn-success" onClick={this.giveAlert}>Publish</button>
                        </form>
                    </div>
                  </div>
              </body>
            </div>
        );

    }

}

export default Home;