import { useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error(error);
            alert("Payment failed. Please try again.");
        } else {
            console.log("Payment successful!", paymentMethod);

            // Redirect to the Order Success page
            navigate("/order-success");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Enter Card Details</h2>
            <CardElement className="p-2 border border-gray-300 rounded-md mb-4" />
            <button
                type="submit"
                disabled={!stripe}
                className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
            >
                Pay ${totalAmount.toFixed(2)}
            </button>
        </form>
    );
};

export default CheckoutForm;
