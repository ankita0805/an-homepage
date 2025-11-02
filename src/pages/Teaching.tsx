import PageLayout from "@/components/PageLayout";
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

  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12">Teaching</h1>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="mb-6 text-2xl">Teaching Philosophy</h2>
            <div className="space-y-4 text-foreground">
              <p>
                I believe that effective engineering education must bridge theoretical foundations with practical 
                applications, empowering students to not only understand concepts but to apply them creatively to 
                real-world problems. In my teaching, I emphasize three core principles: clarity in presenting complex 
                ideas, engagement through hands-on learning, and fostering a growth mindset that encourages 
                intellectual curiosity and resilience.
              </p>
              <p>
                My approach is grounded in active learning methodologies. I design lectures that incorporate 
                interactive elements—from live demonstrations to collaborative problem-solving—ensuring students 
                are participants rather than passive observers. In laboratory settings, I guide students to discover 
                solutions through structured inquiry, helping them develop both technical skills and critical thinking 
                abilities essential for their careers as engineers.
              </p>
              <p>
                Beyond the classroom, I am committed to creating an inclusive learning environment where all students 
                feel supported and empowered to succeed. I prioritize accessibility in my teaching materials, provide 
                multiple pathways for students to engage with content, and maintain an open-door policy for students 
                seeking additional help. My goal is not simply to transfer knowledge, but to inspire the next generation 
                of engineers to pursue innovative solutions to society's most pressing challenges.
              </p>
            </div>
          </Card>
        </section>

        {/* Teaching Experience */}
        <section className="mb-16">
          <h2 className="mb-8">Teaching Experience</h2>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <Card key={index} className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl mb-2">
                    {course.number}: {course.title}
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

        {/* Mentoring */}
        <section>
          <Card className="p-8">
            <h2 className="mb-6 text-2xl">Mentoring & Advising</h2>
            <div className="space-y-4 text-foreground">
              <p>
                Throughout my doctoral studies, I have had the privilege of mentoring five undergraduate researchers, 
                guiding them through their first independent research projects. These experiences range from summer 
                research programs to year-long senior thesis projects, covering topics in machine learning for 
                biosignal processing and embedded systems design.
              </p>
              <p>
                I take a structured yet flexible approach to undergraduate mentorship, beginning with clearly defined 
                project goals and gradually increasing independence as students develop confidence and skills. Regular 
                one-on-one meetings ensure students receive personalized guidance while learning to troubleshoot 
                problems independently. Several of my mentees have gone on to co-author papers, present at conferences, 
                and pursue graduate studies in top engineering programs.
              </p>
              <p>
                I am also actively involved in departmental outreach initiatives, including serving as a panelist for 
                prospective graduate student visits and participating in undergraduate research showcases. I believe 
                strongly in the importance of mentorship in academic success and am committed to continuing this work 
                as a faculty member, helping students discover and pursue their passion for research and innovation.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Teaching;
