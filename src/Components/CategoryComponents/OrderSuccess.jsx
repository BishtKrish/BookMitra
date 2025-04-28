import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-green-600">🎉 Order Placed Successfully!</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Thank you for your purchase. Your order has been confirmed.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
