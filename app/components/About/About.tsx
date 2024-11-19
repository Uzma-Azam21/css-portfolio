import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <Image
                src="/profile.png"
                alt="Frontend Developer"
                fill
                sizes="300px"
                priority
              />
            </div>
          </div>
          <div className="about-text">
            <p>
              I am a passionate Frontend Developer with a strong foundation in
              technologies like HTML, CSS, tailwind JavaScript, TypeScript, and
              Next.js. My interest lies in creating clean, user-friendly, and
              visually appealing web interfaces, which has also sparked my
              curiosity in UI/UX design.
            </p>
            While I am continuously learning and growing in this field, I am
            excited to explore the world of Artificial Intelligence (AI) and how
            it integrates with frontend development to create smarter and more
            interactive applications.
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
