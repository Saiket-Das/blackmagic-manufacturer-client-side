import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './MyProfile.css'


const MyProfile = () => {

    const [user] = useAuthState(auth);
    const email = user.email;

    const { data: profileDetails, isLoading } = useQuery('products', () =>
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const { address, city, degree, education, facebookLink, instagram, institution, name, phone, photo, skill } = profileDetails

    return (
        <div>
            <h2 className='mt-5 mb-10 text-3xl text-secondary font-bold text-center uppercase'>My Profile</h2>



            <div className='mx-auto flex lg:min-h-fit justify-center items-center'>


                <div>
                    <div className="col-md-4">
                        <div className="card user-card">

                            <div className="card-block">
                                <div className="user-image">

                                    <img src={photo} className="img-radius" alt="User-Profie" />

                                </div>
                                <h6 className="text-2xl font-bold text-secondary m-t-25 m-b-10">{name}</h6>


                                <div className='mt-3 mb-5'>
                                    <p className="text-">{education} in {degree}</p>
                                    <p className="text-muted">{institution}</p>
                                </div>

                                <hr />
                                <p className="text-muted mt-3">Activity Level: 80%</p>
                                <ul className="list-unstyled activity-leval mb-5">
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li></li>
                                </ul>

                                <hr />

                                <p className=' mt-5 mb-2 text-secondary font-semibold text-xl'>Potential Skills</p>
                                <p className="mb-7">{skill}</p>
                                <hr />
                                <div className="row justify-content-center user-social-link mb-8">
                                    <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                                    <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                                </div>



                                <div className="bg-gray-100  m-t-10 p-20">
                                    <div className="row">

                                        <div className='flex '>
                                            <ul className="wrapper mx-auto">

                                                {/* --------------- FACEBOOK --------------- */}
                                                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                                                    <li className="icon facebook">
                                                        <span className="tooltip">Facebook</span>
                                                        <span>  <FontAwesomeIcon icon={faFacebookF} /></span>
                                                    </li>
                                                </a>

                                                {/* --------------- INSTAGRAM --------------- */}
                                                <a href={instagram} target="_blank" rel="noopener noreferrer">
                                                    <li className="icon instagram">
                                                        <span className="tooltip">Instagram</span>
                                                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                                                    </li>
                                                </a>

                                            </ul>
                                        </div>
                                    </div>

                                </div>




                                <div className="row about-list">
                                    <div className=" grid grid-cols-3 p-4">
                                        <div className="media">
                                            <label>City</label>
                                            <p>{city}</p>
                                        </div>
                                        <div className="media">
                                            <label>Home Address</label>
                                            <p>{address}</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <p>{phone}</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MyProfile;