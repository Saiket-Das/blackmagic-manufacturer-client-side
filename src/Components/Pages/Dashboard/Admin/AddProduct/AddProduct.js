import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStoragedKey = '66894da5806b42c23eb9065ba4bd446d'


    const onSubmit = async (data) => {

        const formData = new FormData();
        const image = data.img[0];
        formData.append('image', image);

        const imgbbURL = `https://api.imgbb.com/1/upload?key=${imgStoragedKey}`

        fetch(imgbbURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageURL = result.data.url;
                    const productInfo = {
                        name: data.name,
                        price: data.price,
                        stock: data.stock,
                        brand: data.brand,
                        cetagory: data.cetagory,
                        description: data.description,
                        img: imageURL
                    }

                    fetch('https://dry-caverns-08201.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add product')

                            }
                        })

                }
            })



    }
    return (
        <div>
            <div className='flex lg:h-screen justify-center items-center'>
                <div style={{ width: '600px' }} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold uppercase">ADD Product </h2>
                        <form
                            className='grid grid-cols-1 gap-1 justify-items-center p-5'
                            onSubmit={handleSubmit(onSubmit)}
                        >

                            {/* -------- Product name -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Product name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('name',
                                        { required: true })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }
                                </label>
                            </div>

                            {/* -------- Product Price -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Product Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('price',
                                        { required: true })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }
                                </label>
                            </div>

                            {/* -------- Total Stock -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Product stock</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Total stock"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('stock',
                                        { required: true, min: 1000 })
                                    }
                                />
                                <label className="label">
                                    {errors.stock?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }

                                    {errors.stock?.type === 'min' &&
                                        <span className="label-text-alt text-red-500">
                                            At-least add 1000 stock.
                                        </span>
                                    }
                                </label>
                            </div>

                            {/* -------- Brand name -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Brand name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Brand name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('brand',
                                        { required: true }
                                    )}
                                />
                                <label className="label">
                                    {errors.brand?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }
                                </label>
                            </div>


                            {/* -------- Cetagory -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Select cetagory</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cetagory"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("cetagory",
                                        { required: true })}
                                />
                                <label className="label">
                                    {errors.cetagory?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }
                                </label>
                            </div>



                            {/* -------- Prodcut description -------- */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Description</span>
                                </label>
                                <textarea
                                    type="text"
                                    cols="50"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Product description'
                                    {...register("description",
                                        { required: true })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }
                                </label>
                            </div>

                            {/* -------- Your City -------- */}
                            <div className="form-control w-full max-w-xs mb-8">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder='Your city'
                                    {...register("img",
                                        { required: true })}
                                />
                                <label className="label">
                                    {errors.img?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">
                                            Input is required
                                        </span>
                                    }
                                </label>
                            </div>

                            <input type="Submit" className="btn btn-secondary w-full max-w-xs flex justify-center" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;