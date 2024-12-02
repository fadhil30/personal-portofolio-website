export default function AboutMe() {
  return (
    <section id="about" className="bg-gray-50 py-12 px-6 md:py-24 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="bg-gray-200 rounded-xl p-1 w-28 text-center text-sm font-medium text-gray-600">
          About Me
        </h2>
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
          <img
            className="w-full md:w-2/6 rounded-lg shadow-md shadow-slate-50"
            src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Me Pict"
          />
          <div className="w-full md:w-3/6">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-600">
              Curious about me? Here You Have it:
            </h2>
            <p className="mt-6 text-sm md:text-base font-normal text-gray-600">
              Hello, my name is Fadhil, and I’m a passionate software developer
              with a knack for creating intuitive and user-friendly
              applications. <br /> <br />
              With hands-on experience in both iOS and multi-platform
              development, I have successfully built innovative solutions that
              cater to diverse user needs. <br /> <br />
              In my portfolio, you’ll find projects like FavFood’s, an iOS app
              that simplifies food ordering with its seamless browsing and
              customization features, and Sarang Dating App, a platform designed
              to foster meaningful connections through secure chatting and
              advanced matchmaking. I’m also proud to have contributed to
              KampusGratis, Indonesia's first free higher education platform,
              which promotes accessible e-learning for everyone, and Find House
              App, a hassle-free solution for finding affordable living spaces
              based on location, price, and amenities. <br /> <br />
              My technical expertise spans a range of tools and technologies,
              including JavaScript, Swift, HTML & CSS, TailwindCSS, and ReactJS,
              complemented by a strong foundation in UI Design (Figma). Beyond
              technical skills, I value problem-solving, creativity, and
              effective communication, which allow me to thrive in collaborative
              environments and deliver impactful results. <br /> <br />
              Fluent in Indonesian and proficient in English, I’m always eager
              to learn, innovate, and bring ideas to life through technology.
              Let’s create something extraordinary together! <br /> <br />
              Finally, some quick bits about me.
            </p>
            <ul className="mt-4 list-disc pl-6 text-sm md:text-base font-normal text-gray-600">
              <li>
                <p>Front End Mobile Developer</p>
              </li>
              <li>
                <p>Front End Web Developer</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
