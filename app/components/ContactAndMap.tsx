import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactAndMap() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div className="w-full h-[400px] relative z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0958844040396!2d-79.3347237!3d43.8340799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4e8b3fee901%3A0x828087551c865c46!2s2900%20Steeles%20Ave%20E%2C%20Thornhill%2C%20ON%20L3T%204X1!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0, zIndex: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
          Use ⌘ + scroll to zoom the map
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p>2900 Steeles Ave. East, Thornhill, Ontario L3T4X1</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email Address</h3>
              <p>Info@404steelesfleamarket.Com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone Number</h3>
              <p>(905) 709-0004</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
