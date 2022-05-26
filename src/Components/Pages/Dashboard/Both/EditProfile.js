import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';



const EditProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const email = user.email;
    // const navigate = useNavigate()

    const onSubmit = (data) => {
        const myProfile = {
            name: user.displayName,
            email: user.email,
            phone: data.phone,
            photo: data.photo,
            education: data.education,
            degree: data.degree,
            institution: data.institution,
            batch: data.batch,
            city: data.city,
            address: data.address,
            facebook: data.facebook,
            instagram: data.instagram,
            skill: data.skills,
        }
        console.log(myProfile);

        fetch(`https://dry-caverns-08201.herokuapp.com/users/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    if (data) {
                        console.log(data);
                        // navigate('/')
                        reset()
                    }
                }
            });
    }
    return (
        <div>
            <h2 className='text-center text-xl mt-5 mb-5 uppercase'>Edit Profile</h2>

            <div className='mx-auto flex lg:min-h-fit justify-center items-center'>
                <div className='border-2 w-9/12 p-10' >


                    <form
                        onSubmit={handleSubmit(onSubmit)}>

                        <div className=' grid grid-col-1 lg:grid-cols-2 gap-3 justify-items-center p-5'>
                            {/* -------- Your Name -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Your name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs font-semibold"
                                    readOnly disabled
                                    {...register('name',
                                        { value: `${user.displayName}` },
                                    )}
                                />
                            </div>

                            {/* -------- Your Email -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary ">Your email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full max-w-xs font-semibold"
                                    readOnly disabled
                                    {...register('email',
                                        { value: `${user.email}` },
                                    )}
                                />
                            </div>


                            {/* -------- Your Phone number -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Your phone number</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your phone number'
                                    {...register('phone')}
                                />
                            </div>


                            {/* -------- Product Name -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Photo URL</span>
                                </label>
                                <input
                                    type="url"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Photo URL'
                                    {...register('photo')}
                                />
                            </div>


                            {/* -------- Your Education level -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Your Education level
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your education level'
                                    {...register('education')}
                                />
                            </div>


                            {/* -------- Current Year -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Exam / Degree Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Current batch"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("degree")}
                                />
                            </div>


                            {/* -------- Institution Name -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Institution Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Institution name'
                                    {...register('institution')}
                                />
                            </div>


                            {/* -------- Current Year -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Current Batch</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Current batch"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("batch")}
                                />
                            </div>


                            {/* -------- Your City -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary"> City name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Write your city name'
                                    {...register('city')}
                                />
                            </div>

                            {/* -------- Your Home Address -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Home Address</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Area, House, Block, Floor"
                                    {...register('address')}
                                />
                            </div>

                            {/* -------- Your City -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary"> Fcaebook <link rel="apple-touch-icon" href="favicon.png" /></span>
                                </label>
                                <input
                                    type="url"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your Instagram profile link'
                                    {...register('facebook')}
                                />
                            </div>

                            {/* -------- Your City -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary"> Instagram Link</span>
                                </label>
                                <input
                                    type="url"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your Instagram profile link'
                                    {...register('instagram')}
                                />
                            </div>
                        </div>




                        {/* SKILLS LIST  */}
                        <div className="form-control max-w-xs mx-auto flex justify-center">
                            <label className="label text-center mx-auto flex justify-center">
                                <span className="label-text font-bold text-secondary ">Your skills</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Write down your all skills"
                                className="textarea textarea-bordered w-full max-w-xs mb-5"
                                rows="4" cols="15"

                                {...register("skills",)}
                            />
                        </div>



                        <input type="Submit"
                            className="btn btn-secondary w-full max-w-xs mx-auto flex justify-center" />

                    </form>


                </div>
            </div >
        </div >
    );
};

export default EditProfile;

// style={{ width: '800px', height: '500px' }} 