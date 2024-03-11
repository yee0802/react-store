import unhappyFace from "../../assets/unhappy-face.png";
import "./index.css";

export default function PaymentCancelled() {
  return (
    <main className="payment-cancelled">
      <section className="payment-cancelled--header">
        <h1>Cancelled</h1>
      </section>

      <section className="payment-cancelled--info-container">
        <div className="payment-cancelled--info">
          <div className="payment-cancelled--info-box">
            <h1>Payment Cancelled</h1>
            <p>
              You have cancelled your payment via Stripe. We have saved the
              contents of your cart for you. If you would like to view your cart
              please click <a href="/cart">here</a>.
            </p>
          </div>

          <img
            className="payment-cancelled--img"
            src={unhappyFace}
            alt="unhappy-face"
          />
        </div>
      </section>
    </main>
  );
}
