import checkMark from "../../assets/check-mark.svg";
import paymentSuccessImg from "../../assets/success-icon.png";
import "./index.css";

export default function PaymentSuccessful() {
  return (
    <main className="payment-successful">
      <section className="payment-successful--header">
        <h1>Success</h1>
        <div className="payment-successful--header-img">
          <img src={checkMark} alt="check-mark" />
        </div>
      </section>

      <section className="payment-successful--info-container">
        <div className="payment-successful--info">
          <div className="payment-successful--info-box">
            <h1>Payment Successful</h1>

            <p>
              Thanks for purchasing via Stripe, your payment was recieved
              successfully. If you have any issues with your order please feel
              free to contact us! To view your order please click{" "}
              <a href="#todo">here</a>.
            </p>
          </div>

          <img
            className="payment-successful--img"
            src={paymentSuccessImg}
            alt="credit-card-with-checkmark"
          />
        </div>
      </section>
    </main>
  );
}
