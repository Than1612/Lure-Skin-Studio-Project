import React from 'react';
import './policy.css'; 

function Policy() {
  return (
    <div className="policy-container">
      <h1 className="policy-heading">Our Policies</h1>
      <br></br>
      <br></br>

      <section className="policy-section">
        <h2 className="policy-subheading">Cancellation Policy</h2>
        <p className="policy-paragraph">
          Cancellations will be possible provided an order has not been shipped. There will be a cancellation charge of Rs.50/-. Orders once shipped cannot be cancelled.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">Returns & Refund Policy</h2>
        <p className="policy-paragraph">
          In the unlikely event that the product you have ordered from us is not received in good condition, damaged or defective, you may return the product. For the process of return, the product should be unused and in the same condition as you received it with its original packaging & the tags. The product return is valid within 24 hours from the date on which these goods were delivered.
          <br />
          Send a picture of the damaged product to our mail id in the contact section. We will review and get back to you in 24 working hours. Lure skincare is not responsible for damage of product’s after delivery.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">Privacy Policy</h2>
        <p className="policy-paragraph">
          Your privacy is important to us. We firmly believe in the security of your personal information. This policy describes how your personal information is collected, used, and shared when you visit or shop from our website.
        </p>
        <p className="policy-paragraph">
          We host our website and backend systems on reliable, well-tested infrastructure that is regularly monitored and backed in Wix. We collect certain information from you, including your name, billing address, shipping address, contact, and purchase information. We may use this information to fulfill your order, send you a marketing email, screen our orders for potential risk or fraud, and improve the user experience. We do not rent, sell, or distribute our customer base to anyone.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">Shipping Policy</h2>
        <p className="policy-paragraph">
          We ship from Erode, Tamil Nadu, India. Please allow 5-7 days (excluding weekends and holidays) for your order to be processed for shipping. Successfully placed orders will receive an e-mail confirmation with the order details. Please allow 48-72 hours for tracking information to become available. We are not responsible for errors in the address provided by you.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">Payment Policy</h2>
        <p className="policy-paragraph">
          We do not store/retain your payment credentials on our servers. This information is authorised by a secure third-party payment gateway. We use Secure Socket Layer (SSL) technology to encrypt all of your private information when placing an order. We accept payments via Credit/Debit Cards, UPI, Paytm, and Razorpay.
        </p>
      </section>
    </div>
  );
}

export default Policy;
