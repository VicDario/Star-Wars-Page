import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

function Footer () {
    return (
        <footer className="d-flex justify-content-around aling-content-center px-5">
            <div className="ps-2">
                <a className="link" href='https://github.com/VicDario' target="_blank">
                    <FontAwesomeIcon className="social-icon" icon={faGithubSquare} />
                </a>
                <a className="link" href='https://twitter.com/VicDariof' target="_blank">
                    <FontAwesomeIcon className="social-icon" icon={faTwitterSquare} />
                </a>
            </div>
            <div className="pe-2">
                <p className="text-white">Made with <FontAwesomeIcon icon={faHeart} /></p>
            </div>
        </footer>
    )
}

export default Footer;