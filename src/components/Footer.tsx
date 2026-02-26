import { Button } from "./ui/button";
import {
  Apple,
  PlaySquare,
  Instagram,
  Facebook,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer({ onPrivacyClick, onTermsClick }: { onPrivacyClick?: () => void; onTermsClick?: () => void }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (onPrivacyClick && sectionId === "home") {
      // If we are on privacy page (implied by element not found, though logic could be stricter), 
      // we might want to go home. But for now let's just handle specific clicks.
      // Actually, the existing links rely on elements being present. 
      // If we are on privacy page, elements won't exist.
      // The user will probably click "Back to Home" in PrivacyPolicy component.
      // Links in footer on Privacy page might be broken if we reuse footer there without handling.
      // But wait, I didn't put Footer in PrivacyPolicy component in my previous step.
      // So I don't need to worry about Footer behavior ON the privacy page, only on the Home page.
    }
  };

  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="italic mb-4">Instacoach</div>
            <p className="text-blue-100 text-sm leading-relaxed">
              The baseball training app that makes you better.
              AI-powered feedback, personalized plans, and
              instant results.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <button
                  onClick={() =>
                    scrollToSection("explore-programs")
                  }
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection("how-it-works")
                  }
                  className="hover:text-white transition-colors"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection("testimonials")
                  }
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:lessons@instacoach.com"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onPrivacyClick?.();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onTermsClick?.();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Download</h3>
            <div className="space-y-3">
              <a
                href="https://apps.apple.com/us/app/instacoach/id6479509952"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-13 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instacoach.clientApp"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-100">
            © 2025 Instacoach. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/instacoachapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@instacoachapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/bookinstacoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}