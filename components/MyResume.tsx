export default function MyResume() {
  return (
    <section className="max-w-2xl mx-auto p-4 bg-white text-black rounded-md shadow-sm border">
      {/* ================== Header ================== */}
      <div className="text-center mb-3">
        <h3 className="text-lg font-bold uppercase tracking-wide">Sayed Anwar</h3>
        <p className="text-[10px]">📧 sayedanwarofficial@gmail.com | 📞 01903636076</p>
        <p className="text-[10px]">
          🌐 <a href="https://github.com/SayedAnwar-07?tab=repositories" target="_blank" rel="noreferrer" className="underline">
            github.com/SayedAnwar-07
          </a>
        </p>
      </div>

      <hr className="my-2" />

      {/* ================== Profile ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Profile Summary</p>
        <p className="text-[8px] italic leading-relaxed">
          Dedicated and driven software developer aiming to kick-start a rewarding career in the field, 
          leveraging my self-study, determination, and ability to work collaboratively in development teams 
          to deliver high-quality solutions, clean code, and problem-solving.
        </p>
      </div>

      <hr className="my-2" />

      {/* ================== Skills ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Skills</p>
        <ul className="text-[8px] italic list-disc list-inside">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js, Next.js</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, Firebase</li>
          <li>Django, Python</li>
          <li>Git, GitHub</li>
        </ul>
      </div>

      <hr className="my-2" />

      {/* ================== Education ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Education</p>
        <div className="text-[8px] italic leading-relaxed">
          <p className="font-semibold not-italic">Diploma in Computer Science</p>
          <p>Institute Name — 2021–2025</p>
          <p>Institute Name — 2021–2025</p>
        </div>
      </div>

      <hr className="my-2" />

      {/* ================== Projects ================== */}
      <div className="mb-2">
        <p className="text-[10px] font-semibold uppercase">Projects</p>
        <ul className="text-[8px] italic list-disc list-inside">
          <li>
            <span className="font-semibold not-italic">LMS Platform:</span> Full MERN stack learning management system with Stripe payment.
          </li>
          <li>
            <span className="font-semibold not-italic">E-commerce Website:</span> Clothing store with cart, size selection, and admin panel.
          </li>
        </ul>
      </div>
    </section>
  );
}
