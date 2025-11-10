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
          <div className="flex flex-col items-center gap-6">
            <img
              src={headshotImage}
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full max-w-sm object-cover aspect-square"
            />
            <div className="flex gap-6">
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
          
          <div className="space-y-6">
            <div>
              <h1 className="mb-2">Ankita Nayak</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-body font-medium">
                Ph.D. in Electrical Engineering, Stanford University
              </h2>
              <h3 className="text-lg md:text-xl text-muted-foreground font-body font-medium mt-2">
                Technical Lead/Senior Staff ML Researcher, Qualcomm AI Research
              </h3>
            </div>
            
            {/* <p className="text-lg text-foreground leading-relaxed">
            I am a researcher focused on efficient, on device artificial intelligence. My work develops novel algorithms for <strong>generative AI</strong>, <strong>efficient fine tuning</strong>, and <strong>on device personalization</strong> and co-designs the ML systems and hardware, including <strong>model quantization</strong> and <strong>accelerators</strong>, needed to deploy them.
<br /><br />
Currently, I am a Senior Staff ML Researcher and Technical Lead at <strong>Qualcomm AI Research</strong>, guiding research in on device generative AI. I received my PhD in Electrical Engineering from <strong>Stanford University</strong>, where I continue to serve as Teaching Staff for the Machine Learning on Embedded Systems course. My goal is to bridge the gap between large scale AI models and practical, low-power systems.
            </p> */}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-8">About Me</h2>
          <div className="space-y-4 text-foreground">
            <p>
              I am a researcher and technical lead with a passion for making advanced artificial intelligence practical, efficient, and capable of running directly on personal devices. My work sits at the intersection of <strong>machine learning algorithms</strong>, <strong>systems</strong>, and <strong>hardware</strong>. I focus on developing novel techniques for <strong>on-device generative AI</strong>, including efficient fine-tuning, model quantization, and personalization, while simultaneously co-designing the hardware-aware systems needed to support them. I believe the future of AI is not just in the cloud, but in powerful, low-power, and private-by-design models that enhance our daily lives.
            </p>
            <p>
              Currently, I am a Senior Staff ML Researcher at <strong>Qualcomm AI Research</strong>, where I lead research on efficient foundation model adaptation and on-device deployment. This role builds on my deep background in systems architecture. Prior to focusing on AI, I was a <strong>Technical Lead for Qualcomm's 5G modem</strong>, where I led the architecture and design of first-generation 5G transmitter subsystems. My earlier industry experience at <strong>Qualcomm</strong> and <strong>Intel</strong> was centered on power-performance-area (PPA) optimization and low-power ASIC design methodologies, giving me a full-stack perspective from transistors up to algorithms.
            </p>
            <p>
              I received my PhD in Electrical Engineering from <strong>Stanford University</strong>, where my research explored agile hardware flows and energy-efficient reconfigurable accelerators. I have remained closely connected to the academic community and am passionate about mentorship and teaching. Since 2022, I have served as part of the Teaching Staff at <strong>Stanford</strong> for the graduate course "Machine Learning on Embedded Systems," where I develop and deliver lectures on state-of-the-art topics and mentor students on their class projects.
            </p>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8">News & Updates</h2>
        <Card className="p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">October 2025:</span>
              <span className="text-foreground">Our paper "DuoLoRA" on content-style personalization was presented at the <strong>International Conference on Computer Vision (ICCV) 2025</strong>.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">September 2025:</span>
              <span className="text-foreground">Our paper, "Video Training without Reasoning," was submitted to <strong>ICLR 2026</strong>.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">July 2025:</span>
              <span className="text-foreground">Our paper "QuArch: A Question-Answering Dataset for AI Agents in Computer Architecture" was accepted for publication in <strong>IEEE Computer Architecture Letters</strong>.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">June 2025:</span>
              <span className="text-foreground">I participated in organizing the Hackathon for LLM-assisted Chip Design (ICLAD) at the <strong>Design Automation Conference (DAC 2025)</strong>.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">April 2025:</span>
              <span className="text-foreground">I returned to <strong>Stanford</strong> to teach <strong>EE292D/CS329E: Machine Learning on Embedded Systems</strong>.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">January 2025:</span>
              <span className="text-foreground">I returned to <strong>Stanford</strong> as a Guest Lecturer for EE272 to speak on neural network quantization.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">January 2025:</span>
              <span className="text-foreground">I am serving on the Technical Program Committee for the <strong>TinyML 2025 International Research Symposium</strong>.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">May 2024:</span>
              <span className="text-foreground">I gave an invited guest lecture at <strong>UC Berkeley</strong> (EE290-2) on domain-specific ML acceleration for 5G modems.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">March 2024:</span>
              <span className="text-foreground">I started a new role as a Technical Lead/Senior Staff ML Researcher at <strong>Qualcomm AI Research</strong>, focusing on on-device generative AI.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">November 2023:</span>
              <span className="text-foreground">I was an invited guest lecturer at the <strong>University of Southern California</strong> (EE599) to discuss systems-HW co-design.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-primary min-w-[150px]">June 2023:</span>
              <span className="text-foreground">I gave an invited talk at the <strong>On-Device Intelligence Workshop</strong> at the <strong>MLSys 2023</strong> conference in Miami.</span>
            </li>
          </ul>
        </Card>
      </section>
    </PageLayout>
  );
};

export default Home;
