import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialMedia.css'
const SocialMedia = () => {
    return (
        <div className='mt-28 mb-28'>

            <div className='text-center'>
                <h2 className='uppercase text-3xl font-bold text-secondary'>Follow us on social media</h2>
                <p className='text-base font-semibold uppercase mt-5 mb-10'>Get all the latest news</p>
            </div>

            <div className='container '>

                <div className='flex '>
                    <ul className="wrapper mx-auto">

                        {/* --------------- FACEBOOK --------------- */}
                        <a href="https://www.facebook.com/ahan.bryan.96/" target="_blank" rel="noopener noreferrer">
                            <li className="icon facebook">
                                <span className="tooltip">Facebook</span>
                                <span>  <FontAwesomeIcon icon={faFacebookF} /></span>
                            </li>
                        </a>

                        {/* --------------- INSTAGRAM --------------- */}
                        <a href="https://www.instagram.com/ahan_bryan/" target="_blank" rel="noopener noreferrer">
                            <li className="icon instagram">
                                <span className="tooltip">Instagram</span>
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                            </li>
                        </a>

                        {/* --------------- TWITTER --------------- */}
                        <a href="https://twitter.com/twitter" target="_blank" rel="noopener noreferrer">
                            <li className="icon twitter">
                                <span className="tooltip">Twitter</span>
                                <span><FontAwesomeIcon icon={faTwitter} /></span>
                            </li>
                        </a>


                        {/* --------------- YOUTUBE --------------- */}
                        <a href="https://www.youtube.com/channel/UCC4x3A5-5YYgtslyNXZe_xw" target="_blank" rel="noopener noreferrer">
                            <li className="icon youtube">
                                <span className="tooltip">Youtube</span>
                                <span><FontAwesomeIcon icon={faYoutube} /></span>
                            </li>
                        </a>

                        {/* --------------- GITHUB --------------- */}
                        <a href="https://github.com/Saiket-Das" target="_blank" rel="noopener noreferrer">
                            <li className="icon github">
                                <span className="tooltip">Github</span>
                                <span><FontAwesomeIcon icon={faGithub} /></span>
                            </li>
                        </a>

                    </ul>


                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
