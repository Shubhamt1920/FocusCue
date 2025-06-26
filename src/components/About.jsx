const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
        About FocusCue
      </h1>
      <p className="mb-4 leading-7">
        <strong>FocusCue</strong> is more than just a to-do list. It’s a
        productivity companion designed to help you stay consistent, track your
        habits, and build momentum — one task at a time.
      </p>
      <p className="mb-4 leading-7">
        Whether you’re a student, professional, or just someone trying to get
        life more organized, FocusCue gives you:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>💡 A minimal interface focused on clarity and speed</li>
        <li>📅 Due dates to keep your tasks time-bound</li>
        <li>🔥 Streak tracking to help you build habits</li>
        <li>📊 Visual progress bars to track your completion rates</li>
        <li>🌙 Light and dark themes for any time of day</li>
      </ul>
      <p className="leading-7">
        Built with{" "}
        <span className="font-semibold">React, Vite, and Tailwind CSS</span>,
        this project aims to balance performance and clean UI/UX — great for
        both productivity and presentation.
      </p>
    </div>
  );
};

export default About;
