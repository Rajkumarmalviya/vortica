import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-10" aria-label="Footer">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 text-sm sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-base font-semibold text-white">Vortica.in</h3>
          <p className="mt-3 text-gray-400">
            Engineering-focused product team for custom software, AI, and cloud solutions.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/services" className="hover:text-cyan-300">Services</Link></li>
            <li><Link href="/work" className="hover:text-cyan-300">Work</Link></li>
            <li><Link href="/about" className="hover:text-cyan-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Indore, Madhya Pradesh, India</li>
            <li><a href="tel:+917354489974" className="hover:text-cyan-300">+91 7354489974</a></li>
            <li><a href="mailto:rajmalvi789@gmail.com" className="hover:text-cyan-300">rajmalvi789@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Vortica.in. All rights reserved.
      </p>
    </footer>
  );
}
