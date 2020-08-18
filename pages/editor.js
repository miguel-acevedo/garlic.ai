import React, {Component, PropTypes} from 'react';

class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        content: [
            {
                "title": "4th Grader Gets Full-Tuition Scholarship To Harvard",
                "content": "CAMBRIDGE, MA—In an effort to capture the nation's best and brightest children at a young age, business magnate T. Boone Pickens announced Monday that he is offering all fourth graders throughout America full-tuition scholarships to Harvard University. “It’s our goal at 360 Degree Capital Management Inc. to invest early in America’s greatest minds by sending them to the finest schooling our country has to offer,” said Pickens, adding that as long as students participate in fun extracurricular activities such as volunteer work and playing on sports teams during their time in high school, they will be eligible for one of 40 full-ride Pell admittance packages. “To give our nation’s children even more incentive to achieve at an early age we are also offering cash consulting positions with 360 Degree Corp., which pay $100,000 a year plus bonuses while they finish undergraduate studies at top universities such as Harvard. Be on the lookout for these exciting new offers coming soon from your elementary school administrators!”"
            },
            {
                "title": "Man With Feces-Soaked Pants Stuck To Back Of Chair At Sewage Plant",
                "content": "RENO, NV—According to reports from Nevada's Washoe County Regional County Sanitation Facility, one of the center's janitors has not been seen all day after becoming caught on the back of a chair with his pants' waistband hopelessly ensnared around a legrest and crotch stuck to the seat. Sources told reporters they have seen him in this same situation hundreds of times in recent years. The 44-year-old laborer was reportedly last seen attempting to free himself using only his fingertips and calves as leverage while sitting quietly beside several bin bags containing freshly collected sewage waste that remained untreated because nobody is willing to move him out of the way for five minutes."
            },
            {
                "title": "d",
                "content": "z"
            }
        ],
        current: 0
      };
      
      this.plusOne = this.plusOne.bind(this);
      this.minusOne = this.minusOne.bind(this);
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
                            <input value={this.state.content[this.state.current].title} type="email" class="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Body text</label>
                            <textarea value={this.state.content[this.state.current].content} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary" style={{"marginRight": "10px"}}>Regenerate</button>
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