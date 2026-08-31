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