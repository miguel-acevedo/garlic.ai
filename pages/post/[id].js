import Head from 'next/head'
import { useRouter } from 'next/router'
import { posts } from '../../utils/content';


const Post = () => {
  const router = useRouter()
  const { id } = router.query

  //return <p>Post: {id}</p>
    // Do an API fetch here to update the data.
  const post = posts[id];

  return(
      <div>
          <Head>
                <title>World Vision</title>
                <link
                rel="stylesheet"
                href="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/mdi/css/materialdesignicons.min.css"
                />
                <link rel="shortcut icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="https://www.bootstrapdash.com/demo/world-vision/assets/css/style.css"/>
          </Head>

          <main>
    <div class="container-scroller">
      <header id="header">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
              <div class="d-flex justify-content-between align-items-center navbar-top">
                <ul class="navbar-left">
                  <li>Wed, March 4, 2020</li>
                  <li>30°C,London</li>
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
                      <a class="nav-link active" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./world.html">World</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./author.html">Magazine</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./news-post.html">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./business.html">Business</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./art.html">Art</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./politics.html">Politics</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./real-estate.html">Real estate</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./travel.html">Travel</a>
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
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="news-post-wrapper">
            <div class="news-post-wrapper-sm ">
              <h1 class="text-center">
                { id && post["title"]}
              </h1>
              <div class="text-center">
                <a href="#" class="btn btn-dark font-weight-bold mb-4">News</a>
              </div>
              <p
                class="fs-15 d-flex justify-content-center align-items-center m-0"
              >
                <img
                  src="../assets/images/dashboard/Profile_1.jpg"
                  alt=""
                  class="img-xs img-rounded mr-2"
                />
                GPT-3 | 16 August, 2020
              </p>
              <p class="pt-4 pb-4">
              { id && post["content"]}
              </p>
            </div>

            <div class="news-post-wrapper-sm mt-5">
              <h1 class="font-weight-600 text-center mb-5">
                You may also like
              </h1>

              <div class="border-top py-5">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="position-relative image-hover">
                      <img
                        src="../assets/images/news/news-6.jpg"
                        alt="news"
                        class="img-fluid"
                      />
                      <span class="thumb-title">NEWS</span>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="position-relative image-hover">
                      <h1 class="font-weight-600">
                        A hot springs where clothing is optional after dark
                      </h1>
                      <p class="fs-15">Oka Tomoaki | 23 February, 2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-top py-5">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="position-relative image-hover">
                      <img
                        src="../assets/images/news/news-7.jpg"
                        alt="news"
                        class="img-fluid"
                      />
                      <span class="thumb-title">NEWS</span>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="position-relative image-hover">
                      <h1 class="font-weight-600">
                        A hot springs where clothing is optional after dark
                      </h1>
                      <p class="fs-15">Oka Tomoaki | 23 February, 2018</p>
                    </div>
                  </div>
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
                  <li class="menu-title"><a href="./news-post.html">News</a></li>
                  <li><a href="../index.html">Home</a></li>
                  <li><a href="./world.html">World</a></li>
                  <li><a href="./author.html">Magazine</a></li>
                  <li><a href="./business.html">Business</a></li>
                  <li><a href="./politics.html">Politics</a></li>
                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="./world.html">World</a></li>
                  <li><a href="./sports.html">Sports</a></li>
                  <li><a href="./art.html">Art</a></li>
                  <li><a href="#">Magazine</a></li>
                  <li><a href="./real-estate.html">Real estate</a></li>
                  <li><a href="./travel.html">Travel</a></li>
                  <li><a href="./author.html">Author</a></li>
                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="#">Features</a></li>
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Video</a></li>
                  <li><a href="./news-post.html">Newsletters</a></li>
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
                  <li><a href="./aboutus.html">About us</a></li>
                  <li><a href="./contactus.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="d-flex justify-content-between">
                  <img src="../assets/images/logo.svg" class="footer-logo" alt="" />

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

    <script src="https://www.bootstrapdash.com/demo/world-vision/assets/vendors/js/vendor.bundle.base.js"></script>
    <script src="https://www.bootstrapdash.com/demo/world-vision/assets/js/demo.js"></script>
  </main>
      </div>
  )
}

export default Post