import React from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Index() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error(`Razorpay SDK failed to load. Are you online?`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });

      return;
    }

    const result = await axios.post("payment/order");

    if (!result) {
      toast.error(`Server error. Are you online?`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });

      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_ofe3CfgKY0lM7M", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post("/payment/success", data);
        console.log(result);
        toast.info(`${result.data.msg}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
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
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Buy React now!</p>
        <button
          style={{
            background: " #0993e4",
            borderRadius: "20px",
            width: "80%",
            height: "3rem",
          }}
          className="App-link"
          onClick={displayRazorpay}
        >
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default Index;
