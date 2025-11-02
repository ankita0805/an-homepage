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
                Ph.D. in Electrical & Computer Engineering
              </h2>
            </div>
            
            <p className="text-lg text-foreground leading-relaxed">
              I develop novel machine learning algorithms for secure and efficient biomedical devices, 
              advancing the intersection of artificial intelligence and healthcare technology to improve 
              patient outcomes and system reliability.
            </p>
            
            <div className="flex gap-6 pt-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=yourprofile"
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
              I am a final-year Ph.D. candidate in the Department of Electrical and Computer Engineering 
              at [University Name], advised by Professor [Advisor Name]. My research focuses on developing 
              innovative machine learning methodologies specifically tailored for resource-constrained 
              biomedical systems, with particular emphasis on real-time patient monitoring and diagnostic 
              applications.
            </p>
            <p>
              Throughout my doctoral studies, I have published extensively in top-tier venues including 
              IEEE Transactions on Biomedical Engineering and the International Conference on Machine Learning. 
              My work bridges theoretical advances in neural network compression with practical applications 
              in wearable medical devices, contributing to both the machine learning and biomedical engineering 
              communities.
            </p>
            <p>
              Beyond research, I am deeply committed to education and mentorship. I have served as a teaching 
              assistant for undergraduate courses in signal processing and machine learning, and have mentored 
              five undergraduate researchers in their first independent research projects. I am actively seeking 
              tenure-track faculty positions where I can continue to advance the field through innovative research 
              while fostering the next generation of engineers.
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
                date: "January 2025",
                text: "Our paper 'Adaptive Neural Compression for Real-Time ECG Monitoring' was accepted to ICML 2025."
              },
              {
                date: "December 2024",
                text: "Successfully defended my dissertation proposal: 'Machine Learning for Next-Generation Biomedical Devices'."
              },
              {
                date: "October 2024",
                text: "Invited to give a talk at the IEEE International Conference on Biomedical Engineering."
              },
              {
                date: "September 2024",
                text: "Received the Outstanding Graduate Research Award from the ECE Department."
              },
              {
                date: "August 2024",
                text: "Started serving as a reviewer for IEEE Transactions on Neural Networks and Learning Systems."
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="font-semibold text-primary min-w-[120px]">{item.date}:</span>
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
