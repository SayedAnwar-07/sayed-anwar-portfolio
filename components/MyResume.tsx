export default function MyResume() {
  return (
    <section className="max-w-2xl mx-auto p-4 bg-white text-black rounded-md shadow-sm border">
      {/* ================== Header ================== */}
      <div className="text-center mb-3">
        <h3 className="text-lg font-bold uppercase tracking-wide">Sayed Anwar</h3>
        <p className="text-[10px]">📞 01903636076</p>
        <p className="text-[10px]">
          🌐{" "}
          <a
            href="https://github.com/SayedAnwar-07"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            github.com/SayedAnwar-07
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/sayedanwartamim"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            linkedin.com/in/sayedanwartamim
          </a>
        </p>
        <p className="text-[10px]">📍 Depa Idrakpur, Fatullah, Narayanganj</p>
      </div>

      <hr className="my-2" />

      {/* ================== Profile ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Profile Summary</p>
        <p className="text-[8px] italic leading-relaxed">
          Dedicated and driven software developer aiming to kick-start a rewarding career in the
          field, leveraging my self-study, determination, and ability to work collaboratively in
          development teams to deliver high-quality solutions, clean code, and problem-solving.
        </p>
      </div>

      <hr className="my-2" />

      {/* ================== Skills ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Skills</p>
        <ul className="text-[8px] italic list-disc list-inside space-y-0.5">
          <li>Proficient in JavaScript (ES6+) and Python, writing clean, efficient, and maintainable code.</li>
          <li>Experienced with React.js and Next.js for building modern, responsive web applications.</li>
          <li>Skilled in developing dynamic and interactive user interfaces using React components and hooks.</li>
          <li>Strong backend development expertise using Django, Node.js, and Express.js.</li>
          <li>Experienced in creating secure and scalable RESTful APIs with authentication and role-based access.</li>
          <li>Proficient in state management using Redux Toolkit and RTK Query for efficient API integration.</li>
        </ul>
      </div>

      <hr className="my-2" />

      {/* ================== Education ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Education</p>
        <div className="text-[8px] leading-relaxed space-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Govt. Tolaram College</p>
              <p className="italic">Bachelor of Science (Hons) in Chemistry</p>
            </div>
            <p className="italic text-right">Appeared</p>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Dr. Mahbubur Rahman Mollah College</p>
              <p className="italic">Science</p>
            </div>
            <div className="text-right italic">
              <p>2017 – 2019</p>
              <p>GPA: 4.58</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-2" />

      {/* ================== Certifications ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Certification</p>
        <ul className="text-[8px] list-disc list-inside space-y-0.5">
          <li className="flex justify-between">
            <a
              href="#"
              className="underline italic"
            >
              Full Stack Web Development with Python, Django &amp; React from Ostad
            </a>
            <span className="italic ml-2 whitespace-nowrap">November 2024 – July 2025</span>
          </li>
          <li className="flex justify-between">
            <a href="#" className="underline italic">
              Complete Web Development course from Programming Hero
            </a>
            <span className="italic ml-2 whitespace-nowrap">December 2023 – July 2024</span>
          </li>        
        </ul>
      </div>
    </section>
  );
}