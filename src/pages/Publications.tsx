import PageLayout from "@/components/PageLayout";
import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Code, FileImage } from "lucide-react";

const Publications = () => {
  const submissions = [
    {
      authors: "D. Sreedhar, K. Bhardwaj, J. Jeyaraj, N. Vasconcelos, A. Nayak, H. Teague",
      title: "Video Training without Reasoning",
      venue: "International Conference on Learning Representations (ICLR)",
      year: "2026",
      status: "Under Submission"
    },
    {
      authors: "S. Prakash, A. Cheng, A. Tschand, M. Mazumder, V. Gohil, J. Ma, J. Yik, Z. Wan, J. Quaye, E. L. Alvanaki, A. Kumar, C. Mazumdar, T. Khare, Z. Ingare, I. Uchendu, R. Ghosal, A. Tyagi, C. Wang, A. M. Garavagno, S. Gu, A. S. Guo, G. Hur, L. Carloni, T. Krishna, A. Nayak, A. Yazdanbakhsh, V. Reddi",
      title: "QuArch: A Benchmark for Evaluating LLM Reasoning in Computer Architecture",
      venue: "International Conference on Learning Representations (ICLR)",
      year: "2026",
      status: "Under Submission"
    },
    {
      authors: "S. Borse, K. Bhardwaj, M. Dastjerdi, H. Park, S. Kadambi, S. Shivakumar, P. Mandke, A. Nayak, H. Teague, M. Hayat, F. Porikli",
      title: "SubZero: Composing Subject, Style, and Action via Zero-Shot Personalization",
      venue: "IEEE Winter Conference on Applications of Computer Vision",
      year: "2025",
      status: "Under Submission"
    }
  ];

  const journals = [
    {
      authors: "S. Prakash, A. Cheng, J. Yik, A. Tschand, R. Ghosal, I. Uchendu, J. Quaye, J. Ma, S. Grampurohit, S. Giannuzzi, A. Balyan, F. Amin, A. Pipersenia, Y. Choudhary, A. Nayak, A. Yazdanbaksh, V. Reddi",
      title: "QuArch: A Question-Answering Dataset for AI Agents in Computer Architecture",
      venue: "IEEE Computer Architecture Letters",
      year: "2025"
    },
    {
      authors: "K. Feng, T. Kong, K. Koul, J. Melchert, A. Carsello, Q. Liu, G. Nyengele, M. Strange, K. Zhang, A. Nayak, J. Setter, J. Thomas, K. Sreedhar, P. Chen, N. Bhagdikar, Z. Myers, B. D'Agostino, P. Joshi, S. Richardson, R. Bahr, C. Torng, M. Horowitz, P. Raina",
      title: "Amber: A 16-nm System-on-Chip With a Coarse-Grained Reconfigurable Array Flexible Acceleration of Dense Linear Algebra",
      venue: "IEEE Journal of Solid-State Circuits",
      year: "2023"
    },
    {
      authors: "K. Koul, J. Melchert, K. Sreedhar, L. Truong, G. Nyengele, K. Zhang, Q. Liu, J. Setter, P. Chen, Y. Mei, M. Strange, R. Daly, C. Donovick, A. Carsello, T. Kong, K. Feng, D. Huff, A. Nayak, R. Setaluri, J. Thomas, N. Bhagdikar, D. Durst, Z. Myers, N. Tsiskaridze, S. Richardson, R. Bahr, K. Fatahalian, P. Hanrahan, C. Barrett, M. Horowitz, C. Torng, F. Kjolstad, P. Raina",
      title: "Aha: An Agile Approach to the Design of Coarse-Grained Reconfigurable Accelerators and Compilers",
      venue: "ACM Transactions on Embedded Computing Systems",
      year: "2023"
    },
    {
      authors: "A. Nayak, K. Zhang, R. Setaluri, A. Carsello, M. Mann, S. Richardson, R. Bahr, P. Hanrahan, M. Horowitz, P. Raina",
      title: "Improving Energy Efficiency of CGRAs with Low-Overhead Fine-Grained Power Domains",
      venue: "ACM Transactions on Reconfigurable Technology and Systems",
      year: "2022"
    }
  ];

  const conferences = [
    {
      authors: "A. Roy, S. Borse, S. Kadambi, D. Das, S. Mahajan, R. Garrepalli, H. Park, A. Nayak, R. Chellappa, M. Hayat, F. Porikli",
      title: "DuoLoRA: Cycle-consistent and Rank-disentangled Content-Style Personalization",
      venue: "International Conference on Computer Vision (ICCV), Honolulu, USA",
      year: "2025"
    },
    {
      authors: "K. Feng, A. Carsello, T. Kong, K. Koul, Q. Liu, J. Melchert, G. Nyengele, M. Strange, K. Zhang, A. Nayak, J. Setter, J. Thomas, K. Sreedhar, P. Chen, N. Bhagdikar, Z. Myers, B. D'Agostino, P. Joshi, S. Richardson, R. Bahr, C. Torng, M. Horowitz, P. Raina",
      title: "Amber: A 16-nm System-on-Chip With a Coarse-Grained Reconfigurable Array Flexible Acceleration of Dense Linear Algebra",
      venue: "Hot Chips: A Symposium on High Performance Chips (HotChips), Stanford, USA",
      year: "2022"
    },
    {
      authors: "A. Carsello, J. Thomas, A. Nayak, PH. Chen, M. Horowitz, P. Raina, C. Torng",
      title: "mflowgen: A modular flow generator and ecosystem for community-driven physical design",
      venue: "Design Automation Conference (DAC), San Francisco, USA",
      year: "2022"
    },
    {
      authors: "A. Carsello, K. Feng, T. Kong, K. Koul, Q. Liu, J. Melchert, G. Nyengele, M. Strange, K. Zhang, A. Nayak, J. Setter, J. Thomas, K. Sreedhar, P. Chen, N. Bhagdikar, Z. Myers, B. D'Agostino, P. Joshi, S. Richardson, R. Bahr, C. Torng, M. Horowitz, P. Raina",
      title: "Amber: A 367 GOPS, 538 GOPS/W 16nm SoC with a Coarse-Grained Reconfigurable Array for Flexible Acceleration of Dense Linear Algebra",
      venue: "IEEE Symposium on VLSI Technology and Circuits (VLSI Technology and Circuits), Honolulu, USA",
      year: "2022",
      status: "Best Demo Paper Award"
    },
    {
      authors: "R. Bahr, C. Barrett, N. Bhagdikar, A. Carsello, R. Daly, C. Donovick, D. Durst, K. Fatahalian, K. Feng, P. Hanrahan, T. Hofstee, M. Horowitz, D. Huff, F. Kjolstad, T. Kong, Q. Liu, M. Mann, J. Melchert, A. Nayak, A. Niemetz, G. Nyengele, P. Raina, S. Richardson, R. Setaluri, J. Setter, K. Sreedhar, M. Strange, J, Thomas, C. Torng, L. Truong, N. Tsiskaridze, K. Zhang",
      title: "Creating an Agile Hardware Flow",
      venue: "Design Automation Conference (DAC), San Francisco, USA",
      year: "2020"
    },
    {
      authors: "X. Yang, M. Gao, Q. Liu, J. Pu, A. Nayak, J. Setter, S. Bell, K. Cao, H. Ha, P. Raina, C. Kozyrakis, M. Horowitz",
      title: "Interstellar: Using Halide's Scheduling Language to Analyze Deep Neural Network (DNN) Accelerators",
      venue: "International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS), Lausanne, Switzerland",
      year: "2020"
    },
    {
      authors: "A. Nayak, K. Zhang, R. Setaluri, A. Carsello, M. Mann, S. Richardson, R. Bahr, P. Hanrahan, M. Horowitz, P. Raina",
      title: "A Framework for Adding Low-Overhead, Fine-Grained Power Domains to CGRAs",
      venue: "Design Automation, and Test in Europe (DATE), Grenoble, France",
      year: "2020",
      status: "Best Paper Award Nomination"
    },
    {
      authors: "C. Sotiriou, N. Sketopoulos, A. Nayak, P. Penzes",
      title: "Extraction of Structured Regularity for Random Logic Netlists",
      venue: "PAnhellenic Conference on Electronics and Telecommunications (PACET), Volos, Greece",
      year: "2019"
    },
    {
      authors: "R. Bahr, C. Barrett, N. Bhagdikar, A. Carsello, N. Chizgi, R. G. Daly, C. Donovick, D. Durst, K. Fatahalian, P. Hanrahan, T. Hofstee, M. Horowitz, D. Huff, T. Kong, Q. Liu, M. Mann, A. Nayak, A. Niemetz, G. Nyengele, P. Raina, S. Richardson, R. Setaluri, J. Setter, D. Stanley, M. Strange, J. Thomas, L. Truong, X. Yang, K. Zhang",
      title: "Creating an Agile Hardware Flow",
      venue: "Hot Chips: A Symposium on High Performance Chips (HotChips), Stanford, USA",
      year: "2019"
    }
  ];


  const PublicationCard = ({ pub, type }: { pub: any; type: string }) => {
    const authorField = pub.authors || pub.inventors || "";
    
    return (
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">
            {pub.title}
          </p>
          <p className="text-foreground">
            {authorField.split('A. Nayak').map((part: string, i: number) => (
              <span key={i}>
                {part}
                {i < authorField.split('A. Nayak').length - 1 && (
                  <strong className="font-bold">A. Nayak</strong>
                )}
              </span>
            ))}
          </p>
          <p className="text-muted-foreground">
            {pub.venue}, {pub.year}
            {pub.status && ` (${pub.status})`}
            {pub.number && ` - ${pub.number}`}
          </p>
        {pub.links && (
          <div className="flex flex-wrap gap-2 pt-2">
            {pub.links.pdf && (
              <Button variant="outline" size="sm" className="rounded" asChild>
                <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> PDF
                </a>
              </Button>
            )}
            {pub.links.doi && (
              <Button variant="outline" size="sm" className="rounded" asChild>
                <a href={pub.links.doi} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> DOI
                </a>
              </Button>
            )}
            {pub.links.code && (
              <Button variant="outline" size="sm" className="rounded" asChild>
                <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                  <Code className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
            )}
            {pub.links.slides && (
              <Button variant="outline" size="sm" className="rounded" asChild>
                <a href={pub.links.slides} target="_blank" rel="noopener noreferrer">
                  <FileImage className="mr-2 h-4 w-4" /> Slides
                </a>
              </Button>
            )}
            {pub.links.video && (
              <Button variant="outline" size="sm" className="rounded" asChild>
                <a href={pub.links.video} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Video
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
    );
  };

  return (
    <PageLayout>
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-12">Publications</h1>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Submissions */}
            {submissions.length > 0 && (
              <section className="mb-16" id="submissions">
                <h2 className="mb-8">Under Submission</h2>
                <div className="space-y-4">
                  {submissions.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} type="submission" />
                  ))}
                </div>
              </section>
            )}

            {/* Conference Papers */}
            <section className="mb-16" id="conferences">
              <h2 className="mb-8">Peer-Reviewed Conference Proceedings</h2>
              <div className="space-y-4">
                {conferences.map((pub, index) => (
                  <PublicationCard key={index} pub={pub} type="conference" />
                ))}
              </div>
            </section>

            {/* Journal Articles */}
            <section id="journals">
              <h2 className="mb-8">Journal Articles</h2>
              <div className="space-y-4">
                {journals.map((pub, index) => (
                  <PublicationCard key={index} pub={pub} type="journal" />
                ))}
              </div>
            </section>
          </div>

          {/* Side Navigation */}
          <SideNav
            items={[
              { id: "submissions", label: "Under Submission" },
              { id: "conferences", label: "Conference Proceedings" },
              { id: "journals", label: "Journal Articles" },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Publications;
