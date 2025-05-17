import React from 'react'
import Image from 'next/image'
import Title from './ui/Title'

const Carousel = () => {
    return (
        <div>
            <div className="h-screen w-full container mx-auto -mt-[88px]">
                <div className="absolute inset-0">
                    <Image src="/images/hero-bg.jpg" alt="" layout="fill" objectFit="cover" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white  px-10 text-left max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">Fast Food Restaurant</h1>
                    <p className="text-sm sm:w-2/5 w-full mb-6">
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                    </p>
                    <button className="btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
