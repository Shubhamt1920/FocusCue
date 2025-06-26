const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">
        Contact Us
      </h1>
      <p className="mb-4">
        Got feedback, suggestions, or just want to say hello? We’d love to hear
        from you.
      </p>

      <form className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-black dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-black dark:text-white"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-black dark:text-white"
        />
        <button
          type="submit"
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-full font-semibold transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
