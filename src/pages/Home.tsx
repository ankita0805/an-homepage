import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Linkedin, GraduationCap } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr,2fr] items-center">
          <div className="flex justify-center">
            <img
              src={headshotImage}
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full max-w-sm object-cover aspect-square"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="mb-2">Ankita Nayak</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-body font-medium">
                Ph.D. in Electrical Engineering
              </h2>
            </div>
            
            <p className="text-lg text-foreground leading-relaxed">
            I am a researcher focused on efficient, on-device artificial intelligence. My work develops novel algorithms for generative AI, efficient fine-tuning, and on-device personalization and co-designs the ML systems and hardware—including model quantization and accelerators—needed to deploy them.

Currently, I am a Technical Lead at Qualcomm AI Research, guiding research in on-device generative AI. I received my PhD in Electrical Engineering from Stanford University, where I continue to serve as Teaching Staff for the Machine Learning on Embedded Systems course. My goal is to bridge the gap between large-scale AI models and practical, low-power systems.
            </p>
            
            <div className="flex gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/nayak-ankita/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=aksRSh0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                aria-label="Google Scholar Profile"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-8">About Me</h2>
          <div className="space-y-4 text-foreground">
            <p>
              I am a researcher and technical lead with a passion for making advanced artificial intelligence practical, efficient, and capable of running directly on personal devices. My work sits at the intersection of machine learning algorithms, systems, and hardware. I focus on developing novel techniques for on-device generative AI, including efficient fine-tuning, model quantization, and personalization, while simultaneously co-designing the hardware-aware systems needed to support them. I believe the future of AI is not just in the cloud, but in powerful, low-power, and private-by-design models that enhance our daily lives.
            </p>
            <p>
              Currently, I am a Senior Staff ML Researcher at Qualcomm AI Research, where I lead research on efficient foundation model adaptation and on-device deployment. This role builds on my deep background in systems architecture. Prior to focusing on AI, I was a Technical Lead for Qualcomm's 5G modem, where I led the architecture and design of first-generation 5G transmitter subsystems. My earlier industry experience at Qualcomm and Intel was centered on power-performance-area (PPA) optimization and low-power ASIC design methodologies, giving me a full-stack perspective from transistors up to algorithms.
            </p>
            <p>
              I received my PhD in Electrical Engineering from Stanford University, where my research explored agile hardware flows and energy-efficient reconfigurable accelerators. I have remained closely connected to the academic community and am passionate about mentorship and teaching. Since 2022, I have served as part of the Teaching Staff at Stanford for the graduate course "Machine Learning on Embedded Systems," where I develop and deliver lectures on state-of-the-art topics and mentor students on their class projects.
            </p>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8">News & Updates</h2>
        <Card className="p-8">
          <ul className="space-y-4">
            {[
              {
                date: "October 2025",
                text: "Our paper, \"Video Training without Reasoning,\" was submitted to ICLR 2026."
              },
              {
                date: "October 2025",
                text: "Our paper \"DuoLoRA\" on content-style personalization was presented at the International Conference on Computer Vision (ICCV) 2025."
              },
              {
                date: "July 2025",
                text: "Our paper \"QuArch: A Question-Answering Dataset\" was accepted for publication in IEEE Computer Architecture Letters."
              },
              {
                date: "June 2025",
                text: "I co-organized the Hackathon for LLM-assisted Chip Design (ICLAD) at the Design Automation Conference (DAC 2025)."
              },
              {
                date: "March 2025",
                text: "I returned to Stanford as a Guest Lecturer for EE272 to speak on neural network quantization."
              },
              {
                date: "January 2025",
                text: "I am serving on the Technical Program Committee for the TinyML 2025 International Research Symposium."
              },
              {
                date: "May 2024",
                text: "I gave an invited guest lecture at UC Berkeley (EE290-2) on domain-specific ML acceleration for 5G modems."
              },
              {
                date: "March 2024",
                text: "I started a new role as a Technical Lead/Senior Staff ML Researcher at Qualcomm AI Research, focusing on on-device generative AI."
              },
              {
                date: "November 2023",
                text: "I was an invited guest lecturer at the University of Southern California (EE599) to discuss systems-HW co-design."
              },
              {
                date: "June 2023",
                text: "I gave an invited talk at the On-Device Intelligence Workshop at the MLSys 2023 conference in Miami."
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="font-semibold text-primary min-w-[150px]">{item.date}:</span>
                <span className="text-foreground">{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </PageLayout>
  );
};

export default Home;
