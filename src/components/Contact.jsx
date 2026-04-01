import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#ffffff] text-white border border-b-[#FE9A00] py-16 px-4 md:px-10">
        <h1 className="md:text-7xl my-10 text-4xl text-[#0B1220] font-extrabold text-center">Get in Touch</h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        
        {/* LEFT - FORM */}
        <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#FE9A00]">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block  mb-2 text-sm text-[#0B1220]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="text-[#0B1220] placeholder:text-[#84888F] w-full bg-[#ffffff] border border-[#FE9A00] rounded-lg px-4 py-3 focus:outline-none "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-[#0B1220]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="abcd@example.com"
                className="text-[#0B1220]  w-full bg-[#ffffff] border border-[#FE9A00] rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block mb-2 text-sm text-[#0B1220]">
                Project Type
              </label>
              <select className="w-full bg-[#ffffff] border border-[#FE9A00] rounded-lg px-4 py-3 focus:outline-none focus:bg-[#fef5cfad] text-[#84888F] ">
                <option className="text-[#84888F]">Select a project type</option>
                <option className="text-[#0B1220]">Renovation</option>
                <option className="text-[#0B1220]">Residential</option>
                <option className="text-[#0B1220]">Commercial</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm text-[#0B1220]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full transition-all ease-in-out text-[#0B1220] bg-[#ffffff] border border-[#FE9A00] rounded-lg px-4 py-3 focus:outline-none focus:bg-[#fef5cfad] "
              />
            </div>

            {/* Button */}
            <button className="w-full bg-[#FE9A00] cursor-pointer hover:bg-[#fe9440] transition rounded-lg py-3 flex items-center justify-center gap-2 font-medium">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="space-y-6 border-[#FE9A00] ">
          
          {/* Contact Info */}
          <div className="space-y-5  border-[#FE9A00] border p-2 rounded-2xl">
            <InfoCard
              icon={<Phone />}
              title="Phone"
              value="+91 12345 67890"
            />
            <InfoCard
              icon={<Mail />}
              title="Email"
              value="example@gmail.com"
            />
            <InfoCard
              icon={<MapPin />}
              title="Address"
              value="123 Construction Ave, Building City, 12345"
            />
          </div>

          {/* Business Hours */}
          <div className="bg-[#ffffff] rounded-xl p-2 border inset-shadow border-[#FE9A00] shadow-[inset_0_0_0_2px_#FE9A00]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.993409430374!2d77.34520029264516!3d28.63015714767403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59dd0d29991%3A0x3dbbe5777849d4bb!2sIMK%20Infratech%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1775020540407!5m2!1sen!2sin"className="w-full h-[400px] rounded-xl" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" alt="reload the page"></iframe>

            
          </div>
        </div>

      </div>
    </section>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-orange-500/10 p-3 rounded-lg text-[#FE9A00]">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="font-medium text-[#0B1220]">{value}</p>
      </div>
    </div>
  );
}