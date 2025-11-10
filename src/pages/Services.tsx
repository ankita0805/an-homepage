import PageLayout from "@/components/PageLayout";
import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-12">Services</h1>
        
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Conference and Review Committees */}
            <section className="mb-16" id="committees">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl">Conference and Review Committees</h2>
                <ul className="space-y-4 text-foreground">
                  <li>
                    <strong>Technical Program Committee</strong>, International Research Symposium on Tiny Machine Learning (TinyML 2024–Present).
                  </li>
                  <li>
                    <strong>Technical Program Committee</strong>, ML Algorithms & Applications Track, Design Automation Conference (DAC 2022-2023).
                  </li>
                  <li>
                    <strong>Reviewer</strong>, IEEE Journal of Solid-State Circuits, DATE 2022, IEEE WINTECHCON 2022, IEEE VLSI Symposium on Technology and Circuits 2016.
                  </li>
                </ul>
              </Card>
            </section>

            {/* Event Organization */}
            <section className="mb-16" id="events">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl">Event Organization</h2>
                <ul className="space-y-4 text-foreground">
                  <li>
                    <strong>Co-organizer</strong>, Hackathon for LLM-Assisted Chip Design (ICLAD–DAC 2025).
                  </li>
                  <li>
                    <strong>Co-Moderator</strong>, HW and Systems Track, International Research Symposium on Tiny Machine Learning (TinyML 2024).
                  </li>
                  <li>
                    <strong>Co-Chair</strong>, Practical Edge AI Infrastructure & Applications: Efficiency and Resilience in the Wild (DAC 2023).
                  </li>
                </ul>
              </Card>
            </section>

            {/* Mentorship */}
            <section id="mentorship">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl">Mentorship</h2>
                <ul className="space-y-4 text-foreground">
                  <li>
                    <strong>Professional Mentor</strong>, TechWomen, U.S. State Department initiative for women in STEM across Africa, Asia, Middle East.
                  </li>
                  <li>
                    <strong>Mentor</strong>, QWISE (Qualcomm Women in Science & Engineering) programs for interns and early-career professionals.
                  </li>
                </ul>
              </Card>
            </section>
          </div>

          {/* Side Navigation */}
          <SideNav
            items={[
              { id: "committees", label: "Committees" },
              { id: "events", label: "Event Organization" },
              { id: "mentorship", label: "Mentorship" },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;

