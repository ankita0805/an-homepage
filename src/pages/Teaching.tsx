import PageLayout from "@/components/PageLayout";
import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";

const Teaching = () => {
  const courses = [
    {
      number: "EE292D/CS329E",
      title: "Machine Learning on Embedded Systems",
      institution: "Stanford University",
      role: "Teaching Staff",
      semester: "Fall 2022-Present",
      description: "Develop and deliver new lectures on state-of-art topics (e.g., on-device & federated learning, model quantization, DNN hardware, PEFT LoRA), lead class discussions, mentor students in their class projects. Taught 3 offerings of the class."
    },
    {
      number: "",
      title: "Spoken Sanskrit",
      institution: "Samskrita Bharati (501(c)(3) Non-Profit)",
      role: "Language Instructor",
      semester: "2013-2016",
      description: "Taught Sanskrit classes using an immersive methodology focused entirely on spoken Sanskrit, where all participants speak the language 100% of the time. This unique approach facilitates rapid learning through active engagement and differs significantly from traditional language-teaching methods, helping preserve this ancient language."
    },
    {
      number: "CSEE W4824",
      title: "Computer Architecture",
      institution: "Columbia University",
      role: "Teaching Assistant",
      semester: "Fall 2010",
      description: "Assisted with graduate-level computer architecture course covering processor design, memory hierarchies, and parallel computing systems."
    },
    {
      number: "CSEE W1005",
      title: "Introduction to Computer Science and Programming in MATLAB",
      institution: "Columbia University",
      role: "Teaching Assistant",
      semester: "Spring 2010",
      description: "Supported introductory programming course teaching fundamental computer science concepts and MATLAB programming to undergraduate students."
    },
    {
      number: "CS 3203",
      title: "Discrete Mathematics: Introduction To Combinatorics and Graph Theory",
      institution: "Columbia University",
      role: "Teaching Assistant",
      semester: "Spring 2010",
      description: "Assisted with undergraduate discrete mathematics course covering combinatorial analysis, graph theory, and discrete structures."
    }
  ];

  const invitedTalks = [
    {
      title: "Neural Network Quantization Methods",
      course: "EE272: Design Projects in VLSI Systems",
      institution: "Stanford University",
      role: "Guest Lecturer",
      semester: "Winter 2022 - 2025"
    },
    {
      title: "Domain-Specific ML acceleration for 5G modems",
      course: "EE290-2 Hardware for Machine Learning",
      institution: "University of California, Berkeley",
      role: "Guest Lecturer",
      semester: "Spring 2024"
    },
    {
      title: "Systems-HW Co-Design for On-device ML for 5G Modems",
      course: "EE599: Special Topics on Complex Digital ASIC System Design",
      institution: "University of Southern California",
      role: "Guest Lecturer",
      semester: "Autumn 2023"
    },
    {
      title: "On-Device ML for 5G Modems",
      course: "On-Device Intelligence Workshop, Sixth Conference on Machine Learning and Systems (MLSys)",
      institution: "Miami Beach, Florida",
      role: "Invited Speaker",
      semester: "June 2023"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-12">Teaching</h1>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Teaching Philosophy */}
            <section className="mb-16" id="philosophy">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl">Teaching Philosophy</h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    My teaching philosophy rests on three foundational pillars: learning from first principles, learning through narrative, and learning by practice. I prioritize deconstructing complex topics to their conceptual core, ensuring students move beyond the "how" to a durable appreciation of the "why," which fosters critical, trend-resistant reasoning. This is complemented by framing lectures as engaging narratives that explore a problem's context, solution, and design, transforming passive learning into an interactive exploration that builds deep intuition. Finally, I champion learning by doing, guiding students through iterative, hands-on problem-solving to build tangible skills and confidence as they connect abstract theory to practical application.
                  </p>
                </div>
              </Card>
            </section>

            {/* Teaching Experience */}
            <section className="mb-16" id="experience">
              <h2 className="mb-8">Teaching Experience</h2>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl mb-2">
                        {course.number ? `${course.number}: ${course.title}` : course.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {course.institution} | {course.role} | {course.semester}
                      </p>
                    </div>
                    <p className="text-foreground">{course.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Invited Talks */}
            <section className="mb-16" id="talks">
              <h2 className="mb-8">Invited Talks & Guest Lectures</h2>
              <div className="space-y-4">
                {invitedTalks.map((talk, index) => (
                  <Card key={index} className="p-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {talk.title}
                      </h3>
                      <p className="text-foreground">
                        {talk.course}
                      </p>
                      <p className="text-muted-foreground">
                        {talk.institution} | {talk.role} | {talk.semester}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Mentoring */}
            <section id="mentoring">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl">Mentoring & Advising</h2>
                <div className="space-y-4 text-foreground">
                  <p>
                  My mentoring philosophy is centered on a <strong>personalized</strong>, <strong>development-focused</strong>, and <strong>inclusive</strong> approach. I believe this method brings out the best in individuals by empowering them to pursue their own paths and contribute meaningfully to their chosen fields. I view every mentoring relationship as unique, defined by the mentee's goals and stage of growth, and I emphasize <strong>active listening</strong> and <strong>tailored guidance</strong> to help them chart their path. I see mentorship as a process of <strong>guided growth</strong>, helping mentees evolve from learners into <strong>independent thinkers</strong>. I also believe that innovation thrives on <strong>diverse perspectives</strong>, so I am committed to creating an inclusive space where every voice can be heard, valued, and given the confidence to realize its potential.
                  </p>
                  <p>
                  I have gained mentoring experience across <strong>academic and industry settings</strong>. As a Teaching Assistant for courses like introductory programming, I learned to adapt to each student's learning style. I currently apply this by mentoring project teams in <strong>EE292D</strong>, where our meetings extend beyond project milestones to include broader academic and career discussions. At <strong>Qualcomm AI Research</strong>, mentorship has been a highly rewarding part of my work; I guide individuals on technical concepts and career development, which has led to <strong>commercial successes</strong> and <strong>published research</strong>. Over more than a decade, many of my mentees have advanced into <strong>technical leadership</strong>, pursued <strong>Ph.D.s</strong>, or secured <strong>faculty positions</strong>. I also serve as an <strong>industry affiliate</strong> with various academic institutions to help align their research with real-world applications. Furthermore, I actively mentor women and junior engineers in STEM through initiatives like <strong>TechWomen</strong> (a U.S. State Department initiative for women in emerging regions) and <strong>QWISE</strong> (Qualcomm Women in Science & Engineering), supporting their career navigation and leadership development.
                  </p>
                </div>
              </Card>
            </section>
          </div>

          {/* Side Navigation */}
          <SideNav
            items={[
              { id: "philosophy", label: "Teaching Philosophy" },
              { id: "experience", label: "Teaching Experience" },
              { id: "talks", label: "Invited Talks" },
              { id: "mentoring", label: "Mentoring & Advising" },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Teaching;
