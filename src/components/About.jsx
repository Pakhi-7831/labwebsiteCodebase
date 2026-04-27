import React from "react";

export default function About() {
  return (
    <div className="bg-white text-black font-sans mx-auto px-6 pb-6 pt-0 space-y-10">

      {/* LAB HERO FIRST WITH BACKGROUND */}
<div
  className="relative -mx-6 bg-cover bg-center bg-no-repeat py-20"
  style={{
    backgroundImage: "url('/bg2.jpg')" // put your image in public/
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-10"></div>

  {/* CONTENT */}
  <div className="relative max-w-5xl mx-auto space-y-6 px-4  text-white">
    
    <h2 className="text-3xl font-bold text-center font-montserrat">
      Advancing Sustainable Chemistry through Innovation
    </h2>

    <p className="text-lg text-center leading-relaxed">
      Our group focuses on the development of novel ligands, base metal complexes,
      and sustainable synthetic methods that enable the valorization of biomass.
      Our main motive is the synthesis of bio-based chemicals, pharmaceuticals,
      polymers, etc. using inexpensive ligands and metals as catalysts aligned with
      sustainability, green chemistry, and circular economy.
    </p>


      {/* RESEARCH LAB */}
      <section>
        <h2 className="text-2xl font-semibold font-montserrat">Research Lab</h2>
        <p>
          Our lab focuses on groundbreaking research in chemistry and biotechnology,
          aiming to develop sustainable solutions for industrial and academic advancements.
        </p>
      </section>

      {/* MISSION */}
      <section>
        <h2 className="text-2xl font-semibold font-montserrat">Mission</h2>
        <p>
          To push the boundaries of scientific innovation while fostering a collaborative
          and inclusive research environment.
        </p>
      </section>

      {/* VISION */}
      <section>
        <h2 className="text-2xl font-semibold font-montserrat">Vision</h2>
        <p>
          Our vision is to transform chemical synthesis by replacing fossil fuel dependence with 
          sustainable, biomass-based alternatives. Through the development of novel ligands, 
          base metal catalysts, and green synthetic methods, we aim to enable a more 
          climate-conscious and sustainable chemical industry.
        </p>
      </section>
      </div>
    </div>

      {/* PROFESSOR SECTION (UNCHANGED CONTENT) */}
      <div className="max-w-7xl  mx-auto py-12 px-6 text-black">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <div className="text-start">

              <h2 className="text-3xl font-bold font-montserrat mb-3">
                Dr. Saravanakumar Elangovan
              </h2>

              <p className="text-lg text-gray-700">
                Assistant Professor, Department of Chemistry
              </p>

              <p className="text-lg text-gray-700 mb-2">
                IIT (BHU) Varanasi
              </p>

              <p className="font-semibold font-montserrat">
                Postdoctoral Researcher:
              </p>
              <p>
                Technische Universität Berlin, University of Groningen
              </p>

              <p className="font-semibold font-montserrat mt-2">
                Research Associate:
              </p>
              <p>
                Syngene International Limited
              </p>

              <p className="font-semibold font-montserrat mt-2">
                Area of Interest:
              </p>
              <p>
                Organometallic Chemistry, Homogeneous Catalysis,
                Biomass Conversions, Green Chemistry
              </p>

              <p className="font-semibold font-montserrat mt-2">
                Phone: +91-12345678
              </p>

              <p className="font-semibold font-montserrat">
                Email:{" "}
                <a
                  href="mailto:abcd.chy@iitbhu.ac.in"
                  className="text-blue-600 underline"
                >
                  abcd.chy@iitbhu.ac.in
                </a>
              </p>

              <a
                href="/about"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Learn More
              </a>

            </div>
          </div>

          {/* IMAGE */}
          <div>
            <img
              className="w-full rounded-lg shadow-lg"
              src="/saravan_sir.jpeg" // replace with actual image
              alt="Professor"
            />
          </div>

        </div>
      </div>

<section className="mt-8 px-4">
  {/* HEADER */}
  <h2 className="text-2xl font-bold font-montserrat mb-4 border-b pb-2">
    Personal Experience
  </h2>
  

  {/* CONTENT */}
  <section>
  <div className="space-y-3 pl-4">
    
    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Assistant Professor
        </div>
        <div className="text-gray-600 text-sm">
          Indian Institute of Technology (BHU), Varanasi
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        July 2022 – Present
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Ramanujan Fellow
        </div>
        <div className="text-gray-600 text-sm">
          National Institute of Technology, Trichy
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        Mar 2022 – June 2022
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Humboldt Post-Doctoral Fellow
        </div>
        <div className="text-gray-600 text-sm">
          Technical University of Berlin, Germany
        </div>
        <div className="text-xs text-gray-500 ml-2 mt-0.5">
          Advisor: Prof. Dr. Martin Oestreich
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        Aug 2019 – Feb 2022
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Post-Doctoral Researcher
        </div>
        <div className="text-gray-600 text-sm">
          University of Groningen, The Netherlands
        </div>
        <div className="text-xs text-gray-500 ml-2 mt-0.5">
          Advisor: Prof. Dr. Katalin Barta
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        Feb 2017 – July 2019
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Professor
        </div>
        <div className="text-gray-600 text-sm">
          Indian Institute of Technology (BHU)
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        2015 – Present
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Postdoctoral Research
        </div>
        <div className="text-gray-600 text-sm">
          University of Warwick
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        2012 – 2015
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Research Associate
        </div>
        <div className="text-gray-600 text-sm">
          Syngene International Ltd, Bangalore
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        Feb 2010 – Aug 2012
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Research Associate
        </div>
        <div className="text-gray-600 text-sm">
          XYZ Institute
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        2009 – 2012
      </div>
    </div>

    <div className="flex justify-between items-start">
      <div>
        <div className="font-semibold text-base">
          Chemist
        </div>
        <div className="text-gray-600 text-sm">
          Advinus Therapeutics Private Ltd, Bangalore, India
        </div>
      </div>
      <div className="italic text-gray-500 text-sm whitespace-nowrap">
        June 2009 – Dec 2010
      </div>
    </div>

  </div>
  </section>
</section>

      <section className="mt-8 px-4">
  {/* HEADER */}
  <h2 className="text-2xl font-bold font-montserrat mb-4 border-b pb-2">
    Awards & Recognitions
  </h2>

  {/* CONTENT */}
  <ul className="divide-y list-disc pl-5 space-y-2">
    <li className="flex justify-between py-2">
      <div>
        <span className="font-semibold">
          Beijing Youth Talent Funding Program
        </span>
        <span className="text-gray-600 text-sm ml-2">
          – Visiting program for young foreign scholars
        </span>
      </div>
      <div className="italic text-gray-500 text-sm">
        {/* No year for this one */}
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div className="font-semibold">
        Ramanujan Fellowship
      </div>
      <div className="italic text-gray-500 text-sm">
        2021
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div className="font-semibold">
        Alexander Von Humboldt Fellowship
      </div>
      <div className="italic text-gray-500 text-sm">
        Aug 2019 – July 2021
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div className="font-semibold">
        Selected for 70th Lindau Nobel Laureate Meeting
      </div>
      <div className="italic text-gray-500 text-sm">
        2020
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div>
        <span className="font-semibold">
          Ph.D. Fellowship
        </span>
        <span className="text-gray-600 text-sm ml-2">
          – Leibniz-Institut für Katalyse, Rostock, Germany
        </span>
      </div>
      <div className="italic text-gray-500 text-sm">
        Feb 2015 – July 2016
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div>
        <span className="font-semibold">
          Ph.D. Fellowship (ARED)
        </span>
        <span className="text-gray-600 text-sm ml-2">
          – Conseil Régional de Bretagne, Rennes, France
        </span>
      </div>
      <div className="italic text-gray-500 text-sm">
        Oct 2013 – Jan 2015
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div>
        <span className="font-semibold">
          Charpak Scholarship of Excellence
        </span>
        <span className="text-gray-600 text-sm ml-2">
          – University of Rennes1, France
        </span>
      </div>
      <div className="italic text-gray-500 text-sm">
        Sep 2012 – June 2013
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div>
        <span className="font-semibold">
          The Tamilnadu Educational Trust
        </span>
        <span className="text-gray-600 text-sm ml-2">
          – Fresh Scholarship for Master Studies
        </span>
      </div>
      <div className="italic text-gray-500 text-sm">
        2007 – 2008
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div className="font-semibold">
        Best Researcher Award, XYZ Organization
      </div>
      <div className="italic text-gray-500 text-sm">
        2021
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div className="font-semibold">
        National Science Fellowship
      </div>
      <div className="italic text-gray-500 text-sm">
        2018
      </div>
    </li>

    <li className="flex justify-between py-2">
      <div className="font-semibold">
        Innovative Chemist Award
      </div>
      <div className="italic text-gray-500 text-sm">
        2015
      </div>
    </li>
  </ul>
</section>


      {/* Academic Background */}
      <section className="mt-6 px-4">
  <h2 className="text-2xl font-bold font-montserrat mb-4 border-b pb-2">
    Academic Background
  </h2>

  <ul className="list-disc mt-2 pl-6 space-y-2">
    
    <li>
      <strong>Ph.D. in Organometallics and Catalysis</strong>, Université de Rennes 1, Rennes, France, Leibniz-Institut für Katalyse e. V., Rostock, Germany 
      <span className="float-right italic text-gray-500 text-sm">2013 – 2017</span>
      <br />
      Advisors: Prof. Christophe Darcel and Prof. Dr. Matthias Beller
    </li>

    <li>
      <strong>International Master Program</strong> in Molecular Catalysis and Green Chemistry, Université de Rennes 1, France 
      <span className="float-right italic text-gray-500 text-sm">2012 – 2013</span>
    </li>

    <li>
      <strong>Master of Science in Chemistry</strong>, St. Joseph’s College, Trichy, India 
      <span className="float-right italic text-gray-500 text-sm">2007 – 2009</span>
    </li>

    <li>
      <strong>Bachelor of Science in Chemistry</strong>, AVVM Sri Pushpam College, Thanjavur, India 
      <span className="float-right italic text-gray-500 text-sm">2003 – 2006</span>
    </li>

  </ul>
</section>

<section className="mt-6 px-4">
  <h2 className="text-2xl font-bold font-montserrat mb-4 border-b pb-2">Teaching</h2>
  <p>
    Below are the courses taught, covering fundamental and advanced topics in Chemistry.
  </p>

  <table className="w-full border-collapse border border-gray-300 mt-4">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2">Entry</th>
        <th className="border border-gray-300 px-4 py-2">Course Name</th>
        <th className="border border-gray-300 px-4 py-2">Course Code</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">Chemistry I</td><td className="border border-gray-300 px-4 py-2">CY-101</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">Chemistry II</td><td className="border border-gray-300 px-4 py-2">CY-102</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">Chemistry of Transition and Inner Transition Elements</td><td className="border border-gray-300 px-4 py-2">CY-405</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">Chemistry of Coordination Compounds</td><td className="border border-gray-300 px-4 py-2">CHI-341</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">Chemistry of Transition and Inner Transition Elements</td><td className="border border-gray-300 px-4 py-2">CHI-342</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">Organometallic Chemistry</td><td className="border border-gray-300 px-4 py-2">CHI-441</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">Chemistry of Coordination Compounds</td><td className="border border-gray-300 px-4 py-2">CY-408</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">Organometallic Chemistry</td><td className="border border-gray-300 px-4 py-2">CY-501</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">9</td><td className="border border-gray-300 px-4 py-2">Inorganic Chemistry M.Sc Lab-I</td><td className="border border-gray-300 px-4 py-2">CY-492</td></tr>
    </tbody>
  </table>
</section>

      </div>
  );
}