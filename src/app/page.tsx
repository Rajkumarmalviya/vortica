export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Vortica Innovations
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Empowering your business with innovative solutions
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service 1</h3>
              <p className="text-gray-600">Description of your first service offering goes here.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service 2</h3>
              <p className="text-gray-600">Description of your second service offering goes here.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service 3</h3>
              <p className="text-gray-600">Description of your third service offering goes here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to get started? Get in touch with us today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Your Vortica Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
