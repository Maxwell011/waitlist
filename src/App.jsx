import React, { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

// Images Component
function Images() {
  const images = [
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/waitlist-image2.jpg", alt: "Image 2" },
    { src: "/waitlist-image3.jpg", alt: "Image 3" },
    { src: "/waitlist-image4.jpg", alt: "Image 4" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-40 sm:w-44 md:w-48 h-48 md:h-52 object-cover rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        />
      ))}
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz4Dp3l7R-HZJis7rSF0VLPP1DkKaijsT4ALLYxQUEv0cY3pBUTszd1g_HN2_UtZth3/exec";

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setError("Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Send data to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "waitlist_page",
        }),
      });

      // Show success message
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD54F] via-[#FBC02D] to-[#FFEE58] flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Get paid for your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">voice.</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-400/60 -rotate-1"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Join studies. Share your experience. Earn — fast, simple, anywhere.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto pt-6 md:pt-8">
            {!isSubmitted ? (
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(""); // Clear error when typing
                    }}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-5 md:px-8 md:py-6 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleWaitlistSubmit}
                    disabled={isSubmitting || !email}
                    className="px-8 py-5 md:px-12 md:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-base md:text-lg whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 md:w-6 md:h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                      </>
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="flex items-center justify-center gap-2 text-red-700 bg-red-100/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">
                      {error}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 text-green-700 bg-green-100/80 backdrop-blur-sm px-8 py-5 md:py-6 rounded-full shadow-lg animate-in fade-in zoom-in duration-500">
                <CheckCircle className="w-6 h-6 md:w-7 md:h-7" />
                <span className="font-bold text-base md:text-lg">
                  Successfully joined the waitlist!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-12 md:mt-16 w-full">
          <Images />
        </div>
      </main>
    </div>
  );
}

export default App;
