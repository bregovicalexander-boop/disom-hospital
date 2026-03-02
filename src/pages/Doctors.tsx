import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const chiefDoctor = {
  name: "Dr. P.U. Agu",
  specialty: "Gynecologist & Obstetrician",
  experience: "15+ years",
  bio: "Specializing in high-risk pregnancies and minimally invasive gynecological surgery.",
  image: "/dragu.png",
};

const otherDoctors = [
  {
    name: "Dr. Ndukwe Obeta",
    specialty: "Pediatrician",
    experience: "6+ years",
    bio: "Dedicated to providing compassionate care for children from infancy through adolescence.",
  },
  {
    name: "Dr. Miracle Okafor",
    specialty: "Fertility Specialist",
    experience: "3+ years",
    bio: "Helping families achieve their dreams through advanced reproductive technologies.",
  },
  {
    name: "Dr. Michael Nwafor",
    specialty: "Family Medicine",
    experience: "8+ years",
    bio: "Providing comprehensive primary care for patients of all ages.",
  },
];

const DoctorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Our Medical Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient">Expert Doctors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our team of specialists brings decades of combined experience and
              a shared commitment to exceptional patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================== */}
      {/* CHIEF DOCTOR SECTION   */}
      {/* ====================== */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden shadow-card"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-96 md:h-full">
                <img
                  src={chiefDoctor.image}
                  alt={chiefDoctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-10 flex flex-col justify-center">
                <span className="inline-block w-fit px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Chief Doctor
                </span>

                <h2 className="text-3xl font-display font-bold mb-3">
                  {chiefDoctor.name}
                </h2>

                <p className="text-primary font-medium mb-2">
                  {chiefDoctor.specialty}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  Experience: {chiefDoctor.experience}
                </p>

                <p className="text-sm text-muted-foreground mb-6">
                  {chiefDoctor.bio}
                </p>

                <Link
                  to="/book-appointment"
                  className="w-fit px-6 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== */}
      {/* OTHER DOCTORS SECTION  */}
      {/* ====================== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherDoctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {doctor.experience}
                </span>

                <h3 className="text-xl font-display font-semibold mb-1">
                  {doctor.name}
                </h3>

                <p className="text-sm text-primary font-medium mb-3">
                  {doctor.specialty}
                </p>

                <p className="text-sm text-muted-foreground mb-6">
                  {doctor.bio}
                </p>

                <Link
                  to="/book-appointment"
                  className="w-full py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorsPage;
