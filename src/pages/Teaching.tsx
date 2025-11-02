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
              My mentoring philosophy is centered on a personalized, development-focused, and inclusive approach. I believe this method brings out the best in individuals by empowering them to pursue their own paths and contribute meaningfully to their chosen fields. I view every mentoring relationship as unique, defined by the mentee’s goals and stage of growth, and I emphasize active listening and tailored guidance to help them chart their path. I see mentorship as a process of guided growth, helping mentees evolve from learners into independent thinkers. I also believe that innovation thrives on diverse perspectives, so I am committed to creating an inclusive space where every voice can be heard, valued, and given the confidence to realize its potential.
              </p>
              <p>
              I have gained mentoring experience across academic and industry settings. As a Teaching Assistant for courses like introductory programming, I learned to adapt to each student's learning style. I currently apply this by mentoring project teams in EE292D, where our meetings extend beyond project milestones to include broader academic and career discussions. At Qualcomm AI Research, mentorship has been a highly rewarding part of my work; I guide individuals on technical concepts and career development, which has led to commercial successes and published research. Over more than a decade, many of my mentees have advanced into technical leadership, pursued Ph.D.s, or secured faculty positions. I also serve as an industry affiliate with various academic institutions to help align their research with real-world applications. Furthermore, I actively mentor women and junior engineers in STEM through initiatives like TechWomen (a U.S. State Department initiative for women in emerging regions) and QWISE (Qualcomm Women in Science & Engineering), supporting their career navigation and leadership development.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Teaching;
