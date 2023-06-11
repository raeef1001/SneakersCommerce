import React from 'react';
import { Link } from 'react-router-dom';
const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@shop.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;