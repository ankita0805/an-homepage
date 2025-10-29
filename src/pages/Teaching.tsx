import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Teaching = () => {
  const courses = [
    {
      number: "ECE 301",
      title: "Signals and Systems",
      institution: "[University Name]",
      role: "Teaching Assistant",
      description: "Undergraduate course covering continuous-time and discrete-time signals, Fourier analysis, Laplace transforms, and z-transforms. Responsibilities included leading weekly recitation sections for 40 students, holding office hours, and grading assignments and exams."
    },
    {
      number: "ECE 542",
      title: "Introduction to Machine Learning",
      institution: "[University Name]",
      role: "Teaching Assistant",
      description: "Graduate-level introduction to machine learning fundamentals including supervised learning, neural networks, and optimization algorithms. Led lab sessions on implementing ML algorithms in Python, designed homework problems, and provided individual mentorship to graduate students on course projects."
    },
    {
      number: "ECE 445",
      title: "Biomedical Instrumentation",
      institution: "[University Name]",
      role: "Guest Lecturer",
      description: "Delivered three lectures on neural signal processing and brain-computer interfaces as part of this senior-level course. Topics included signal acquisition, filtering techniques, and practical considerations for real-time biomedical systems."
    },
    {
      number: "ECE 210",
      title: "Analog Signal Processing",
      institution: "[University Name]",
      role: "Teaching Assistant",
      description: "Sophomore-level course introducing analog circuit design and analysis. Conducted laboratory sessions teaching students to build and test analog circuits, including amplifiers, filters, and oscillators. Supervised hands-on experiments and assisted with circuit debugging."
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
                    {course.institution} | {course.role}
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
