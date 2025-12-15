import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yummy Bootstrap Template",
  description: "Restaurant website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Inter:wght@100;300;400;500;600;700;800;900&family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS */}
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/glightbox/css/glightbox.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />

        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Footer */}
        <footer id="footer" className="footer dark-background">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon"></i>
                <div className="address">
                  <h4>Address</h4>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-telephone icon"></i>
                <div>
                  <h4>Contact</h4>
                  <p>
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                    <br />
                    <strong>Email:</strong> <span>info@example.com</span>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-clock icon"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    <strong>Mon-Sat:</strong> <span>11AM - 23PM</span>
                    <br />
                    <strong>Sunday:</strong> <span>Closed</span>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center mt-4">
            <p>
              © <strong className="px-1">Yummy</strong> All Rights Reserved
            </p>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>

        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Preloader */}
        <div id="preloader"></div>

        {/* Vendor JS */}
        <Script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/php-email-form/validate.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/purecounter/purecounter_vanilla.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Main JS */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
