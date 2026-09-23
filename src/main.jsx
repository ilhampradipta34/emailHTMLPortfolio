import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Replace with your GitHub repository URL before publishing.
const githubBaseUrl = "https://github.com/USERNAME/NAMA-REPOSITORY/blob/main";

const emails = [
  { slug: "pulsefit", image: "/images/previews/PulseFit.png", category: "Welcome email", title: "Pulse Fit", description: "An energising first-touch experience for new members.", file: "pulsefit-welcome-en.html" },
  { slug: "weekly-loop", image: "/images/previews/newsletter.png", category: "Newsletter", title: "The Weekly Loop", description: "A thoughtful weekly digest built for easy reading.", file: "newsletter.html" },
  { slug: "nexa-pods", image: "/images/previews/productLaunch.png", category: "Product launch", title: "Nexa Pods", description: "A polished launch story for a new audio product.", file: "productLaunch.html" },
  { slug: "lumora-coffee", image: "/images/previews/discountEmail.png", category: "Promotion", title: "Lumora Coffee", description: "A warm seasonal offer for premium coffee lovers.", file: "discountEmail.html" },
  { slug: "order-confirmed", image: "/images/previews/orderConfirm.png", category: "Transactional", title: "Order Confirmed", description: "A clear, reassuring order confirmation and invoice.", file: "order-confirmation-invoice-en.html" },
  { slug: "studio-wear", image: "/images/previews/StudioWear.png", category: "E-commerce", title: "Studio Wear", description: "A considered nudge for items left in the cart.", file: "studiowear-abandoned-cart-en.html" },
  { slug: "design-summit", image: "/images/previews/invit.png", category: "Event invitation", title: "Design Summit 2026", description: "A refined invitation for a future-facing design event.", file: "design-summit-invitation-en.html" }
];

function Preview({ email }) {
  return <div className="preview">
    <img src={email.image} alt={`Preview email ${email.title}`} onError={(event) => { event.currentTarget.hidden = true; }} />
    <div className="preview-placeholder" aria-hidden="true"><span>Preview coming soon</span><small>{email.image.replace("/previews/", "")}</small></div>
  </div>;
}

function EmailCard({ email }) {
  return <article className="email-card">
    <Preview email={email} />
    <div className="card-content">
      <p className="category">{email.category}</p>
      <h2>{email.title}</h2>
      <p className="description">{email.description}</p>
      <a className="detail-link" href={`${githubBaseUrl}/${email.file}`} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
    </div>
  </article>;
}

function App() {
  return <main>
    <section className="hero">
      <p className="eyebrow">Selected email work · 2026</p>
      <h1>Digital stories,<br />delivered beautifully.</h1>
      <p className="intro">A curated collection of responsive email experiences, designed to turn every inbox moment into a memorable brand interaction.</p>
      <p className="count">07 email experiences</p>
    </section>
    <section className="email-grid" aria-label="Daftar template email">
      {emails.map((email) => <EmailCard email={email} key={email.slug} />)}
    </section>
  </main>;
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
