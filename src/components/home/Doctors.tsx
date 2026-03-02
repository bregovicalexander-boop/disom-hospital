import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const chiefDoctor = {
  name: "Dr. P.U. Agu",
  specialty: "Gynecologist & Obstetrician",
  experience: "15+ years",
  image: "/dragu.png",
};

const otherDoctors = [
  {
    name: "Dr. Ndukwe Obeta",
    specialty: "Pediatrician",
    experience: "6+ years",
  },
  {
    name: "Dr. Miracle Okafor",
    specialty: "Fertility Specialist",
    experience: "3+ years",
  },
  {
    name: "Dr. Michael Nwafor",
    specialty: "Family Medicine",
    experience: "8+ years",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Doctors = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Medical Team
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient">Expert Doctors</span>
          </h2>
          <p className="text-muted-foreground">
            Our team of specialists brings decades of combined experience and a
            shared commitment to exceptional patient care.
          </p>
        </motion.div>

        {/* ===================== */}
        {/* CHIEF DOCTOR SECTION  */}
        {/* ===================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-card bg-card"
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

                <h3 className="text-3xl font-display font-bold mb-3">
                  {chiefDoctor.name}
                </h3>

                <p className="text-lg text-muted-foreground mb-2">
                  {chiefDoctor.specialty}
                </p>

                <p className="text-sm text-muted-foreground">
                  Experience: {chiefDoctor.experience}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ===================== */}
        {/* OTHER DOCTORS         */}
        {/* ===================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {otherDoctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {doctor.experience}
              </span>

              <h3 className="text-xl font-display font-semibold mb-1">
                {doctor.name}
              </h3>

              <p className="text-muted-foreground text-sm">
                {doctor.specialty}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="gap-2 bg-gradient-primary hover:opacity-90 shadow-soft"
            asChild
          >
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
