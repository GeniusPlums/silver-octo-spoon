'use client'
import React, { useState, useEffect } from 'react';

const MingleEatTalk: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#171611] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

const Header: React.FC<{ isMenuOpen: boolean; setIsMenuOpen: (isOpen: boolean) => void }> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#383529] px-4 sm:px-8 lg:px-16 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
              fill="currentColor"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Mingle Eat Talk</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden lg:flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal" href="#">How it works</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Community</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Blog</a>
        </nav>
        <div className="flex gap-2">
          <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dfbf20] text-[#171611] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Join now</span>
          </button>
          <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#383529] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign In</span>
          </button>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#171611] border-b border-[#383529] lg:hidden">
          <nav className="flex flex-col items-center py-4">
            <a className="text-white text-sm font-medium leading-normal py-2" href="#">How it works</a>
            <a className="text-white text-sm font-medium leading-normal py-2" href="#">Events</a>
            <a className="text-white text-sm font-medium leading-normal py-2" href="#">Community</a>
            <a className="text-white text-sm font-medium leading-normal py-2" href="#">Blog</a>
            <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dfbf20] text-[#171611] text-sm font-bold leading-normal tracking-[0.015em] mt-2">
              <span className="truncate">Join now</span>
            </button>
            <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#383529] text-white text-sm font-bold leading-normal tracking-[0.015em] mt-2">
              <span className="truncate">Sign In</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <UpcomingEventsSection />
        <TestimonialsSection />
        <MembershipTiersSection />
        <CallToActionSection />
        <SocialProofSection />
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative mb-12 h-[480px] overflow-hidden rounded-xl bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://example.com/networking-image.jpg")` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Connect, Grow, Succeed</h1>
        <p className="text-xl mb-8">Your gateway to meaningful professional relationships</p>
        <button className="bg-[#dfbf20] text-[#171611] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#c5a91c] transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="my-12 text-white">
      <h2 className="text-3xl font-bold mb-6">About M.E.T</h2>
      <p className="text-lg mb-8">
        Mingle Eat Talk is more than just a networking platform. We're a community dedicated to fostering genuine connections and professional growth. Our unique approach combines curated networking events, powerful relationship management tools, and a focus on meaningful interactions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Curated Connections</h3>
          <p>We match you with professionals who align with your goals and interests.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Beyond Networking</h3>
          <p>Build lasting relationships through shared experiences and collaborative opportunities.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Career Acceleration</h3>
          <p>Leverage your network to unlock new opportunities and accelerate your professional growth.</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <div className="my-12 text-white">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-[#dfbf20] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
          <p>Sign up and build your professional profile to showcase your skills and interests.</p>
        </div>
        <div className="text-center">
          <div className="bg-[#dfbf20] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Connect & Engage</h3>
          <p>Attend events, join discussions, and connect with like-minded professionals.</p>
        </div>
        <div className="text-center">
          <div className="bg-[#dfbf20] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Grow Your Network</h3>
          <p>Nurture relationships and leverage your connections for mutual growth and success.</p>
        </div>
      </div>
    </div>
  );
};

const UpcomingEventsSection: React.FC = () => {
  const events = [
    { title: "Tech Networking Mixer", date: "May 15, 2023", location: "Virtual" },
    { title: "Women in Leadership Forum", date: "June 2, 2023", location: "New York, NY" },
    { title: "Startup Pitch Night", date: "June 10, 2023", location: "San Francisco, CA" },
  ];

  return (
    <div className="my-12 text-white">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-[#26241c] p-4 rounded-lg border border-[#524f3d]">
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-[#b7b39e] mb-2">{event.date}</p>
            <p className="text-[#b7b39e] mb-4">{event.location}</p>
            <button className="bg-[#dfbf20] text-[#171611] px-4 py-2 rounded-full font-bold hover:bg-[#c5a91c] transition duration-300">
              Register
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-[#dfbf20] hover:underline">View all events</a>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      image: "https://example.com/jane-smith.jpg",
      text: "Mingle Eat Talk has transformed my professional networking experience. The connections I've made here have been invaluable to my career growth."
    },
    {
      name: "John Doe",
      image: "https://example.com/john-doe.jpg",
      text: "The events on M.E.T are top-notch. I've met incredible people and learned so much from the diverse community here."
    },
    {
      name: "Emily Johnson",
      image: "https://example.com/emily-johnson.jpg",
      text: "As an entrepreneur, M.E.T has been crucial in helping me find mentors and collaborators. It's more than just networking - it's about building meaningful relationships."
    }
  ];

  return (
    <div className="my-12 text-white">
      <h2 className="text-3xl font-bold mb-6">What Our Members Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#26241c] p-6 rounded-lg border border-[#524f3d]">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <p className="text-[#b7b39e] mb-4 italic">"{testimonial.text}"</p>
            <p className="font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MembershipTiersSection: React.FC = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Personal CRM",
        "Notes & Reminders",
        "10 Introductions/Month",
        "1,000 Contacts",
        "25 Events/Month",
        "5 Search Filters"
      ]
    },
    {
      name: "Basic",
      price: "$9/month",
      features: [
        "Everything in Free",
        "Unlimited Introductions",
        "2,000 Contacts",
        "50 Events/Month",
        "10 Search Filters"
      ]
    },
    {
      name: "Premium",
      price: "$19/month",
      features: [
        "Everything in Basic",
        "Priority Support",
        "First Access to New Features",
        "4,000 Contacts",
        "100 Events/Month",
        "20 Search Filters"
      ]
    }
  ];

  return (
    <div className="my-12 text-white">
      <h2 className="text-3xl font-bold mb-6">Membership Tiers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div key={index} className="bg-[#26241c] p-6 rounded-lg border border-[#524f3d]">
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <p className="text-3xl font-bold mb-4">{tier.price}</p>
            <ul className="mb-6">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mb-2 flex items-center">
                  <span className="text-[#dfbf20] mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#dfbf20] text-[#171611] px-4 py-2 rounded-full font-bold hover:bg-[#c5a91c] transition duration-300">
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CallToActionSection: React.FC = () => {
  return (
    <div className="my-12 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Professional Network?</h2>
      <p className="text-xl mb-8">Join Mingle Eat Talk today and start building meaningful connections!</p>
      <button className="bg-[#dfbf20] text-[#171611] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#c5a91c] transition duration-300">
        Join Now
      </button>
    </div>
  );
};

const SocialProofSection: React.FC = () => {
  const partners = [
    { name: "TechCrunch", logo: "https://example.com/techcrunch-logo.png" },
    { name: "Forbes", logo: "https://example.com/forbes-logo.png" },
    { name: "Startup Grind", logo: "https://example.com/startup-grind-logo.png" },
    { name: "Women in Tech", logo: "https://example.com/women-in-tech-logo.png" },
  ];

  return (
    <div className="my-12 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Trusted By</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <img key={index} src={partner.logo} alt={partner.name} className="h-12 opacity-70 hover:opacity-100 transition duration-300" />
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#26241c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-[#dfbf20]">About Us</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">How It Works</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Features</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-[#dfbf20]">FAQs</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul>
              <li><a href="#" className="hover:text-[#dfbf20]">Twitter</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Facebook</a></li>
              <li><a href="#" className="hover:text-[#dfbf20]">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-[#383529] px-4 py-2 rounded-l-full focus:outline-none" />
              <button type="submit" className="bg-[#dfbf20] text-[#171611] px-4 py-2 rounded-r-full font-bold hover:bg-[#c5a91c] transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#383529] text-center">
          <p>&copy; 2023 Mingle Eat Talk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MingleEatTalk;