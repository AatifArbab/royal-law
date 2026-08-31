import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", role: "Client", text: "" });

  const testimonialsRef = collection(db, "testimonials");

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const q = query(testimonialsRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(data);
    } catch (err) {
      console.error("Testimonials load nahi ho sakay:", err);
      setError("Reviews load nahi ho sakay. Dobara koshish karein.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.text.trim()) {
      setError("Naam aur review likhna zaroori hai.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      await addDoc(testimonialsRef, {
        name: form.name.trim(),
        role: form.role.trim() || "Client",
        text: form.text.trim(),
        createdAt: serverTimestamp(),
      });

      setForm({ name: "", role: "Client", text: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      await fetchTestimonials();
    } catch (err) {
      console.error("Review save nahi hua:", err);
      setError("Review save nahi ho saka. Dobara koshish karein.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="testimonials" id="testimonials">
      <style>{`
        .testimonials {
          background-color: #0a0f1a;
          padding: 100px 0;
          color: #e8e8e8;
        }

        .testimonials .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .testimonials .section-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .testimonials .section-heading > p {
          color: #d4a017;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .testimonials .section-heading h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .testimonials .section-heading h2 span {
          color: #d4a017;
        }

        .testimonials .section-description {
          font-size: 16px;
          color: #a8a8a8;
          line-height: 1.7;
          display: block;
        }

        .testimonials-status {
          text-align: center;
          color: #888888;
          font-size: 15px;
          margin: 40px 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 70px;
        }

        .testimonial-card {
          background-color: #12182a;
          border: 1px solid #232b3d;
          border-radius: 10px;
          padding: 36px 30px;
          position: relative;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: #d4a017;
        }

        .quote-icon {
          font-family: Georgia, serif;
          font-size: 56px;
          color: #d4a017;
          line-height: 1;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .stars {
          color: #d4a017;
          font-size: 15px;
          letter-spacing: 3px;
          margin-bottom: 16px;
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.75;
          color: #cfcfcf;
          margin-bottom: 24px;
          min-height: 110px;
        }

        .testimonial-divider {
          height: 1px;
          background: linear-gradient(to right, #d4a017, transparent);
          margin-bottom: 20px;
        }

        .client {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .client-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #d4a017;
          color: #0a0f1a;
          font-weight: 700;
          font-size: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .client-info h4 {
          font-size: 15px;
          color: #ffffff;
          font-weight: 600;
          margin: 0 0 2px;
        }

        .client-info span {
          font-size: 13px;
          color: #888888;
        }

        .testimonial-form-wrapper {
          background-color: #12182a;
          border: 1px solid #232b3d;
          border-radius: 12px;
          padding: 44px;
          max-width: 640px;
          margin: 0 auto 60px;
        }

        .testimonial-form-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 24px;
          text-align: center;
        }

        .testimonial-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .testimonial-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .testimonial-form input,
        .testimonial-form textarea {
          width: 100%;
          background-color: #0a0f1a;
          border: 1px solid #2a3245;
          border-radius: 8px;
          padding: 13px 16px;
          font-size: 14px;
          color: #ffffff;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .testimonial-form input::placeholder,
        .testimonial-form textarea::placeholder {
          color: #6b7280;
        }

        .testimonial-form input:focus,
        .testimonial-form textarea:focus {
          border-color: #d4a017;
        }

        .testimonial-form textarea {
          resize: none;
        }

        .testimonial-form-error {
          color: #f87171;
          font-size: 14px;
          margin: 0;
        }

        .testimonial-form-success {
          color: #d4a017;
          font-size: 14px;
          margin: 0;
        }

        .testimonial-form button {
          background-color: #d4a017;
          color: #0a0f1a;
          border: none;
          border-radius: 8px;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease, opacity 0.2s ease;
        }

        .testimonial-form button:hover:not(:disabled) {
          background-color: #c29113;
        }

        .testimonial-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .testimonial-footer {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid #232b3d;
        }

        .testimonial-footer span {
          font-size: 26px;
          color: #d4a017;
          display: block;
          margin-bottom: 10px;
        }

        .testimonial-footer p {
          font-size: 14px;
          color: #888888;
          letter-spacing: 0.3px;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr 1fr;
          }
          .testimonial-form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .testimonials {
            padding: 70px 0;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .testimonials .section-heading h2 {
            font-size: 30px;
          }
          .testimonial-form-wrapper {
            padding: 30px 24px;
          }
        }
      `}</style>

      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>CLIENT EXPERIENCES</p>

          <h2>
            Trusted by Our
            <span> Clients.</span>
          </h2>

          <span className="section-description">
            We believe that effective legal representation begins with
            listening, understanding and building trust with every client.
          </span>
        </div>

        {/* Loading state */}
        {loading && (
          <p className="testimonials-status">Reviews load ho rahay hain...</p>
        )}

        {/* Empty state */}
        {!loading && testimonials.length === 0 && (
          <p className="testimonials-status">
            Abhi tak koi review nahi hai. Sab se pehla review aap de sakte
            hain!
          </p>
        )}

        {/* Testimonials */}
        {!loading && testimonials.length > 0 && (
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>

                <div className="quote-icon">
                  &ldquo;
                </div>

                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>

                <p className="testimonial-text">
                  {testimonial.text}
                </p>

                <div className="testimonial-divider"></div>

                <div className="client">

                  <div className="client-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Review Submission Form */}
        <div className="testimonial-form-wrapper">
          <h3 className="testimonial-form-heading">Apna review share karein</h3>

          <form className="testimonial-form" onSubmit={handleSubmit}>
            <div className="testimonial-form-row">
              <input
                type="text"
                placeholder="Aap ka naam"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Case ki type (optional)"
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
              />
            </div>

            <textarea
              placeholder="Hamari service k baray mein apna tajurba likhein..."
              rows={4}
              value={form.text}
              onChange={(e) => handleChange("text", e.target.value)}
            />

            {error && <p className="testimonial-form-error">{error}</p>}
            {submitted && (
              <p className="testimonial-form-success">
                Shukriya! Aap ka review save ho gaya hai.
              </p>
            )}

            <button type="submit" disabled={submitting}>
              {submitting ? "Save ho raha hai..." : "Review submit karein"}
            </button>
          </form>
        </div>

        {/* Bottom Trust Message */}
        <div className="testimonial-footer">
          <span>⚖</span>

          <p>
            Professional service. Clear communication. Client-focused
            representation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;