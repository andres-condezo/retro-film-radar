
import Head from 'next/head';
import Navbar from './components/navbar';
import Slider from './components/slider';
import SideMenu from './components/sideMenu';

const Home = () => {
  return (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
    <div className="container">
      <div className="grid grid-cols-2 gap-2">
        <SideMenu />
        <div className="w-full">
          <Slider />
          <div className="gap-8 columns-3">
            <div className="w-full aspect-video py-4">
              <div className="w-full aspect-video">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item One</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video py-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Two</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video py-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Three</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video py-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Four</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video py-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Five</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video py-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Six</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
      </div>
    </footer>
  </div>
)}

export default Home
