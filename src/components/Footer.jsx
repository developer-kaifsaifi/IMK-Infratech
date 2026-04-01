
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-[#0f172bb1] px-6 md:px-16 py-12">
      
      {/* TOP GRID */}
      <div className="grid md:grid-cols-4 gap-10">
        
        {/* LEFT */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FE9A00] p-2 rounded-lg">
              <div className="h-15 w-15 bg-center bg-cover bg-[url(./assets/imk21re.png)]" />
            </div>
            <h2 className="text-white text-xl font-semibold">BuildPro</h2>
          </div>

          {/* Description */}
          <p className=" mb-6 text-[#0F172B] leading-relaxed">
            Building tomorrow's landmarks with today's expertise.
            Quality construction services you can trust.
          </p>

          {/* Address */}
          <p className="text-[#0f172be9] text-sm">
            123 Construction Ave <br />
            Building City, ST 12345
          </p>

          {/* Phone */}
          <p className="text-[#FE9A00] mt-2 font-medium">
            (555) 123-4567
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <SocialIcon icon={<FaFacebook className="scale-150" />} />
            <SocialIcon icon={<FaSquareXTwitter className="scale-150"/>} />
            <SocialIcon icon={<FaSquareInstagram className="scale-150"/>} />
            

          </div>
        </div>

        {/* Company */}
        <FooterColumn
          title="Company"
          links={["About Us", "Our Team", "Careers", "News"]}
        />

        {/* Services */}
        <FooterColumn
          title="Services"
          links={["Commercial", "Residential", "Industrial", "Renovation"]}
        />

        {/* Resources */}
        <FooterColumn
          title="Resources"
          links={["Blog", "Case Studies", "FAQs", "Support"]}
        />

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10"></div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-gray-500">
          © 2026 BuildPro Construction. All rights reserved.
        </p>

        <div className="flex gap-6">
          <span className="hover:text-[#0F172B] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#0F172B] cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

/* Column Component */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((item, index) => (
          <li
            key={index}
            className="hover:text-[#0F172B] cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon */
function SocialIcon({ icon }) {
  return (
    <div className="bg-[#ffffff] p-2 rounded-lg hover:bg-[#FE9A00] hover:text-black transition cursor-pointer">
      {icon}
    </div>
  );
}