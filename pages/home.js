import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Main() {
    return(
        <div>
            <Head>
                <title>Garlic.ai</title>
                <link
                rel="stylesheet"
                href="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/mdi/css/materialdesignicons.min.css"
                />
                <link rel="stylesheet" href="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/aos/dist/aos.css/aos.css" />
                <link
                rel="stylesheet"
                href="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/owl.carousel/dist/assets/owl.carousel.min.css"
                />
                <link
                rel="stylesheet"
                href="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/owl.carousel/dist/assets/owl.theme.default.min.css"
                />
                <link rel="shortcut icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="https://www.bootstrapdash.com/demo/world-vision/assets/css/style.css"/>
            </Head>


            <body>
    <div class="container-scroller">
      <div class="main-panel">
        <header id="header">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="d-flex justify-content-between align-items-center navbar-top">
                <ul class="navbar-left">
                  <li>Tues. August 18, 2020</li>
                </ul>
                <div>
                  <a class="navbar-brand" href="#"
                    ><img style={{"maxWidth": "130px"}} src="/logo.png" alt=""/></a>
                </div>
                <div class="d-flex">
                  <ul class="navbar-right">
                    <li>
                      <a href="#">ENGLISH</a>
                    </li>
                    <li>
                      <a href="#">ESPAÑOL</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div class="navbar-bottom-menu">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="navbar-collapse justify-content-center collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    class="navbar-nav d-lg-flex justify-content-between align-items-center"
                  >
                    <li>
                      <button class="navbar-close">
                        <i class="mdi mdi-close"></i>
                      </button>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/world.html">World</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/author.html">Magazine</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/news-post.html">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/business.html">Business</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/art.html">Art</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/politics.html">Politics</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/real-estate.html">Real estate</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/travel.html">Travel</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="mdi mdi-magnify"></i></a>
                    </li>
                  </ul>
                </div>
              </div> */}
            
            </nav>
          </div>
        </header>
        <div class="container">
          <div class="banner-top-thumb-wrap">
            <div class="d-lg-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-between  mb-3 mb-lg-0">
                <div>
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-1.jpg"
                    alt="thumb"
                    class="banner-top-thumb"
                  />
                </div>
                <h5 class="m-0 font-weight-bold">
                  48-Year-Old Civil Servant Farts, Has Heart Attack
                </h5>
              </div>
              <div class="d-flex justify-content-between mb-3 mb-lg-0">
                <div>
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-2.jpg"
                    alt="thumb"
                    class="banner-top-thumb"
                  />
                </div>
                <h5 class="m-0 font-weight-bold">Diet Pills Found To Stimulate Appetite For Babies</h5>
              </div>
              <div class="d-flex justify-content-between mb-3 mb-lg-0">
                <div>
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-3.jpg"
                    alt="thumb"
                    class="banner-top-thumb"
                  />
                </div>
                <h5 class="m-0 font-weight-bold">
                  Police Begin Campaign To Run Down Jaywalkers
                </h5>
              </div>
              <div class="d-flex justify-content-between mb-3 mb-lg-0">
                <div>
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-4.jpg"
                    alt="thumb"
                    class="banner-top-thumb"
                  />
                </div>
                <h5 class="m-0 font-weight-bold">
                  Weirdos Paid Big Bucks To Suck Up to the Pope
                </h5>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="owl-carousel owl-theme" id="main-banner-carousel">
                <div class="item">
                  <div class="carousel-content-wrapper mb-2">
                    <div class="carousel-content">
                      <h1 class="font-weight-bold">
                        Chick-Fil-A Founder Opens Trucks Near Gay Pride Parade
                      </h1>
                      <h5 class="font-weight-normal  m-0">
                        NEW YORK—In an effort to prove that he doesn't hate gay people, Chick-Fil-A founder Dan Cathy opened four food trucks near the site of this Sunday's Gay Pride Parade in New York City.

"We want to show America that we're not the bigots everyone thinks we are," said Cathy. "All we've ever wanted is the right to be left alone. We're not trying to force our beliefs on anyone else.
                      </h5>
                      <p class="text-color m-0 pt-2 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                    <div class="carousel-image">
                      <img src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/banner.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="carousel-content-wrapper mb-2">
                    <div class="carousel-content">
                      <h1 class="font-weight-bold">
                        Hey, Lady, Your Vagina Is Showing
                      </h1>
                      <h5 class="font-weight-normal  m-0">
                        There's absolutely no need to bare it all at the grocery store or on the subway. It's not cute. It's not funny. No matter how many of your friends tell you it is, it's not.

I'm not just talking about girls who have an entire third of their ass hanging out of their pants. That's gross. I'm talking about girls who don't even have the decency to wear a thong and instead go commando.

This isn't a fashion statement. 
                      </h5>
                      <p class="text-color m-0 pt-2 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                    <div class="carousel-image">
                      <img src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/banner_1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="carousel-content-wrapper mb-2">
                    <div class="carousel-content">
                      <h1 class="font-weight-bold">
                        Noted A-Hole Still An A-Hole
                      </h1>
                      <h5 class="font-weight-normal  m-0">
                        BOSTON—Despite his arrest last year on charges of defrauding a number of investors out of millions of dollars, noted asshole Brian T. Booker is in fact still a noted asshole, sources confirmed Friday.

"Yeah, we figured as much," said Sergeant Walter H. Henley of the Boston Police Department, who led the investigation into Booker's fraudulent business dealings.
                      </h5>
                      <p class="text-color m-0 pt-2 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                    <div class="carousel-image">
                      <img src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/banner_2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="carousel-content-wrapper mb-2">
                    <div class="carousel-content">
                      <h1 class="font-weight-bold">
                        President Builds Epic Tree House
                      </h1>
                      <h5 class="font-weight-normal  m-0">
                        ARLINGTON, VA—In an attempt to build a dwelling that would stand the test of time, President Barack Obama announced Wednesday the completion of his epically awesome tree house.

                    Standing taller than the White House itself, the two-story tree house is said to include a rope bridge connecting a crow's nest at the top to a jacuzzi and a tennis court on the ground floor, as well as a wooden throne carved from a redwood tree. It also features a variety of hidden passageways and a secret tunnel...
                      </h5>
                      <p class="text-color m-0 pt-2 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                    <div class="carousel-image">
                      <img src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/banner_3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <div class="py-3 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/Profile_1.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Henry Itondo</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Stranger Drowns In Puddle Of Own Tears
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="py-3 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/Profile_2.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Oka Tomoaki</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Cease-Fire Negotiations Break Down After Twenty Seconds
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="pt-4 pb-4 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/Profile_2.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Joana Leite</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Focus On Fun And Challenging Lifetime Activities
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="pt-3 pb-4 border-bottom">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/Profile_4.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Rita Leite</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Area Man Is Rich And Powerful Enough To Have Any Woman He Wants
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="pt-4 pb-4">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/Profile_5.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span class="fs-12 text-muted">Jurrien Oldhof</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      When’s The Last Time You Had Sex With A Robot? Meet My Wife
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="pt-3 pb-4">
                    <div class="d-flex align-items-center pb-2">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/Profile_6.jpg"
                        class="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                       <span class="fs-12 text-muted">Yamaha Toshinobu</span>
                    </div>
                    <p class="fs-14 m-0 font-weight-medium line-height-sm">
                      Man Who Mistook His Wife For A Hat Sues Her For Alimony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="world-news">
            <div class="row">
              <div class="col-sm-12">
                <div class="d-flex position-relative  float-left">
                  <h3 class="section-title">World News</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/travel.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">TRAVEL</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  Refugees flood Turkey's border with Greece
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
              <div class="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/news.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">NEWS</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
              <div class="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/art.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">ART</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  These puppies are training to assist in avalanche rescue
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
              <div class="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/business.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">BUSINESS</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  'Love Is Blind' couple opens up about their first year
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
            </div>
          </div>
           */}
          <div class="editors-news">
            <div class="row">
              <div class="col-lg-3">
                <div class="d-flex position-relative float-left">
                  <h3 class="section-title">Popular News</h3>
                </div>
              </div>
            </div>
            <div class="row">

              {/* <div class="col-lg-6  mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/glob.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                </div>
                <h1 class="font-weight-600 mt-3">
                  Large-Breasted Woman Sleeps On Sofa
                </h1>
                <p class="fs-15 font-weight-normal">
                  CATANIA, ITALY–According to a report published Thursday in the journal Science Advances, a woman with 38DD breasts was recently found sleeping on a sofa. “This is a first-of-its-kind discovery,” said lead researcher Dr. Giancarlo Giorgi, adding that he had never before seen a woman with such abnormally large breasts and was “very surprised” to find one sleeping on a sofa. 
                </p>

              </div> */}

              <div class="col-lg-6  mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/glob.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                </div>
                <h1 class="font-weight-600 mt-3">
                Curfew Imposed Throughout China On Basis Of 'Pokemon Go War' Between Teams Valor and Mystic
                </h1>
                <p class="fs-15 font-weight-normal">
                BEIJING—In an effort to prevent any further escalation of the ongoing Pokemon Go war between the factions Valor and Mystic, Chinese Defense Minister Chang Wanquan announced Thursday the imposition of a nationwide curfew effective immediately. “Due to the tense situation in East Asia, we have no choice but to take this extreme step,” said Wanquan to assembled reporters, adding that residents of every city and town in China were now required to be indoors by 9 p.m. “We must put the safety of the Chinese people first.” The curfew will remain in effect until the Pokemon Go War is resolved, Wanquan said, noting that full-scale military intervention was being considered should things get “completely out of hand.”

Wanquan went on to warn Chinese citizens to stay off their cell phones entirely after dark, while also advising them to refrain from leaving their homes at all between 6 a.m. and noon. 
                </p>

              </div>

              <div class="col-lg-6  mb-5 mb-sm-2">
                <div class="row">
                  <div class="col-sm-6  mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-5.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Jesus Christ: Gay Icon?
                    </h5>
                    <p class="fs-15 font-weight-normal">
                     For years, the gay community has been using Jesus as the ultimate gay icon. But now, in a shocking turn of events, Jesus is coming out of the closet, and he's saying he's gay.
                    "People have been saying I'm gay for 2,000 years now," said a beaming Jesus, adding that he's "finally comfortable enough in my own skin" to reveal the truth about his sexuality. "I'm here today to tell you that yes, I am gay. And I couldn't be happier.
                    </p>
                  </div>
                  <div class="col-sm-6  mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-6.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Record High Fertility Rate for Nymphomaniacs
                    </h5>
                    <p class="fs-15 font-weight-normal">
                      Lorem Ipsum has been the industry's standard dummy text
                    </p>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-6  mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-7.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Man Accidentally Cuts Off Penis; Finds It Mistakenly In Fridge 2 Years Later
                    </h5>
                    <p class="fs-15 font-weight-normal">
                      SEATTLE—A local man reportedly realized his penis had been severed from his body Tuesday when he opened the door of his refrigerator and discovered it sitting on a shelf in a plastic container. According to sources, the man, who is not being identified at this time, walked out of his bathroom in a daze, saying, "What the hell is this doing in here?" "I thought it was a weird, giant, green cucumber at first, but then I saw it moving," he continued. 
                    </p>
                  </div>
                  <div class="col-sm-6">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-8.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                     Man With Feces-Soaked Pants Stuck To Back Of Chair At Sewage Plant
                    </h5>
                    <p class="fs-15 font-weight-normal">
                      RENO, NV—According to reports from Nevada's Washoe County Regional County Sanitation Facility, one of the center's janitors has not been seen all day after becoming caught on the back of a chair with his pants' waistband hopelessly ensnared around a leg rest and crotch stuck to the seat. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="popular-news">
            <div class="row">
              <div class="col-lg-3">
                <div class="d-flex position-relative float-left">
                  <h3 class="section-title">Editor choice</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-sm-4  mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-9.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Transvestite Telephones Wrong Number for Anal Sex
                    </h5>
                  </div>
                  <div class="col-sm-4 mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-10.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      I'm A Dork, But Miley Cyrus' 'Erotic' Wrecking Ball Video Gives Me A Chubby
                    </h5>
                  </div>
                  <div class="col-sm-4 mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-11.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Man Stabs Bible Believing It To Be Thing That Tries to Control People's Thoughts
                    </h5>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-4 mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-12.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Russia Sues U.S., Claims Humanitarian Crisis Delaying Diplomatic Relations

                    </h5>
                  </div>
                  <div class="col-sm-4 mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-13.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                       Man Commits Suicide By Jogging With Foreskin Tied Tightly Around His Neck
                    </h5>
                  </div>
                  <div class="col-sm-4 mb-5 mb-sm-2">
                    <div class="position-relative image-hover">
                      <img
                        src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-14.jpg"
                        class="img-fluid"
                        alt="world-news"
                      />
                    </div>
                    <h5 class="font-weight-600 mt-3">
                      Good Man is Tired of Being Responsible For Whole World's Problems
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="position-relative mb-3">
                  <img
                    src="https://www.bootstrapdash.com/demo/world-vision/assets/images/dashboard/star-magazine-15.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <div class="video-thumb text-muted">
                    <span><i class="mdi mdi-menu-right"></i></span>LIVE
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="d-flex position-relative float-left">
                      <h3 class="section-title">Latest News</h3>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="border-bottom pb-3">
                      <h5 class="font-weight-600 mt-0 mb-0">
                        1,500-Year-Old Forum Posts Reveal Ancient Computer Users Bitch And Moan Just Like Us
                      </h5>
                      <p class="text-color m-0 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="border-bottom pt-4 pb-3">
                      <h5 class="font-weight-600 mt-0 mb-0">
                         I Gave Birth To A Chicken Egg The Other Day
                      </h5>
                      <p class="text-color m-0 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="border-bottom pt-4 pb-3">
                      <h5 class="font-weight-600 mt-0 mb-0">
                       Crack-Smoking Handicapped Former Prostitute To Be Inducted Into National Women's Basketball Hall of Fame
                      </h5>
                      <p class="text-color m-0 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="pt-4">
                      <h5 class="font-weight-600 mt-0 mb-0">
                        Man Lets Heroin Addict Give Himself a Fix in Exchange For Work
                      </h5>
                      <p class="text-color m-0 d-flex align-items-center">
                        <span class="fs-10 mr-1">2 hours ago</span>
                        <i class="mdi mdi-bookmark-outline mr-3"></i>
                        <span class="fs-10 mr-1">126</span>
                        <i class="mdi mdi-comment-outline"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="border-top"></div>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="pages/news-post.html">News</a></li>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="pages/world.html">World</a></li>
                  <li><a href="pages/author.html">Magazine</a></li>
                  <li><a href="pages/business.html">Business</a></li>
                  <li><a href="pages/politics.html">Politics</a></li>
                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="pages/world.html">World</a></li>
                  <li><a href="pages/sports.html">Sports</a></li>
                  <li><a href="pages/art.html">Art</a></li>
                  <li><a href="#">Magazine</a></li>
                  <li><a href="pages/real-estate.html">Real estate</a></li>
                  <li><a href="pages/travel.html">Travel</a></li>
                  <li><a href="pages/author.html">Author</a></li>
                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="#">Features</a></li>
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Video</a></li>
                  <li><a href="pages/news-post.html">Newsletters</a></li>
                  <li><a href="#">Live Events</a></li>
                  <li><a href="#">Stores</a></li>
                  <li><a href="#">Jobs</a></li>
                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="#">More</a></li>
                  <li><a href="#">RSS</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">User Agreement</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="pages/aboutus.html">About us</a></li>
                  <li><a href="pages/contactus.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="d-flex justify-content-between">
                  <img src="https://www.bootstrapdash.com/demo/world-vision/assets/images/logo.svg" class="footer-logo" alt="" />

                  <div class="d-flex justify-content-end footer-social">
                    <h5 class="m-0 font-weight-600 mr-3 d-none d-lg-flex">Follow on</h5>
                    <ul class="social-media">
                      <li>
                        <a href="#">
                          <i class="mdi mdi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div
                  class="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom"
                >
                  <ul class="footer-horizontal-menu">
                    <li><a href="#">Terms of Use.</a></li>
                    <li><a href="#">Privacy Policy.</a></li>
                    <li><a href="#">Accessibility & CC.</a></li>
                    <li><a href="#">AdChoices.</a></li>
                    <li><a href="#">Advertise with us Transcripts.</a></li>
                    <li><a href="#">License.</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                  <p class="font-weight-medium">
                    © 2020 <a href="https://www.bootstrapdash.com/" target="_blank" class="text-dark">@ BootstrapDash</a>, Inc.All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
    <script src="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/js/vendor.bundle.base.js"></script>
    <script src="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/owl.carousel/dist/owl.carousel.min.js"></script>
    <script src="https://www.bootstrapdash.com/demo/world-vision/assets/js/demo.js"></script>
  </body>
        </div>
    );
}
