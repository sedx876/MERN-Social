import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer gradient">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="black-text">Footer Content</h5>
                <p className="black-text">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="black-text">Links</h5>
                <ul>
                  <li><a className="black-text" href="#!">Link 1</a></li>
                  <li><a className="black-text" href="#!">Link 2</a></li>
                  <li><a className="black-text" href="#!">Link 3</a></li>
                  <li><a className="black-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container black-text">
            © 2021 Copyright Text
            <a className="black-text right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer
