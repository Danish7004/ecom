import React from "react";
import axios from "axios";

function RazorPayment({
  totalAmount,
  token,
  setCart,
  addToCart,
  setCallbackUser,
  setCallbackProducts,
  callbackUser,
  callbackProducts
}) {
  const displayRazorpay = async () => {
    // creating a new order
    const result = await axios.post(
      "http://localhost:5000/api/payment/order",
      { totalAmount },
      {
        headers: { Authorization: token },
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_O36k8mtYus6tnT", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Fashion Shop.",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5000/api/payment/success",
          data,
          {
            headers: { Authorization: token },
          }
        );

        alert(result.data.msg);
        setCart([]);
        addToCart([]);
        setCallbackUser(!callbackUser)
        setCallbackProducts(!callbackProducts)
      },
      prefill: {
        name: "Tester",
        email: "tester@tester.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button onClick={displayRazorpay}>Pay Now</button>
    </div>
  );
}

export default RazorPayment;
