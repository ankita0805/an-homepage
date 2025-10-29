import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Code, FileImage } from "lucide-react";

const Publications = () => {
  const journals = [
    {
      authors: "A. Smith, [Your Name], B. Johnson, C. Williams",
      title: "Efficient Neural Network Compression for Real-Time Biomedical Signal Processing",
      venue: "IEEE Transactions on Biomedical Engineering, vol. 71, no. 5, pp. 1234-1245",
      year: "2024",
      links: {
        pdf: "#",
        doi: "https://doi.org/10.1109/TBME.2024.1234567",
        code: "https://github.com/yourrepo/project1"
      }
    },
    {
      authors: "[Your Name], D. Martinez, E. Thompson",
      title: "Privacy-Preserving Federated Learning for Distributed Medical Data Analysis",
      venue: "Journal of Biomedical Informatics, vol. 142, pp. 104567",
      year: "2024",
      links: {
        pdf: "#",
        doi: "https://doi.org/10.1016/j.jbi.2024.104567"
      }
    },
    {
      authors: "F. Chen, [Your Name], G. Anderson",
      title: "Adaptive Decoding Algorithms for Long-Term Brain-Computer Interfaces",
      venue: "Journal of Neural Engineering, vol. 21, no. 3, pp. 036012",
      year: "2024",
      links: {
        pdf: "#",
        doi: "https://doi.org/10.1088/1741-2552/ad1234",
        code: "https://github.com/yourrepo/project2"
      }
    }
  ];

  const conferences = [
    {
      authors: "[Your Name], H. Kim, I. Patel",
      title: "Adaptive Neural Compression for Real-Time ECG Monitoring",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2025",
      status: "To Appear",
      links: {
        pdf: "#",
        slides: "#"
      }
    },
    {
      authors: "J. Lee, [Your Name], K. Wilson",
      title: "Differential Privacy in Federated Healthcare: A Practical Approach",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: "2024",
      links: {
        pdf: "#",
        code: "https://github.com/yourrepo/project3",
        video: "https://youtube.com/watch?v=example"
      }
    },
    {
      authors: "[Your Name], L. Rodriguez, M. Nguyen",
      title: "Real-Time Neural Decoding with Online Bayesian Optimization",
      venue: "IEEE Engineering in Medicine and Biology Conference (EMBC)",
      year: "2024",
      links: {
        pdf: "#",
        doi: "https://doi.org/10.1109/EMBC.2024.1234567",
        slides: "#"
      }
    },
    {
      authors: "N. Brown, [Your Name], O. Garcia",
      title: "Hardware-Aware Neural Architecture Search for Medical Devices",
      venue: "International Conference on Computer Vision (ICCV)",
      year: "2023",
      links: {
        pdf: "#",
        doi: "https://doi.org/10.1109/ICCV.2023.1234567",
        code: "https://github.com/yourrepo/project4"
      }
    }
  ];

  const patents = [
    {
      inventors: "[Your Name], P. Davis, Q. Miller",
      title: "System and Method for Adaptive Neural Network Compression in Wearable Devices",
      number: "US Patent Application 17/123,456",
      year: "2024",
      status: "Pending"
    }
  ];

  const PublicationCard = ({ pub, type }: { pub: any; type: string }) => (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-3">
        <p className="text-foreground">
          {pub.authors.split('[Your Name]').map((part: string, i: number) => (
            <span key={i}>
              {part}
              {i < pub.authors.split('[Your Name]').length - 1 && (
                <strong className="font-bold">[Your Name]</strong>
              )}
            </span>
          ))}
        </p>
        <p className="text-lg font-semibold text-foreground">
          {pub.title}
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

  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12">Publications</h1>

        {/* Journal Articles */}
        <section className="mb-16">
          <h2 className="mb-8">Journal Articles</h2>
          <div className="space-y-4">
            {journals.map((pub, index) => (
              <PublicationCard key={index} pub={pub} type="journal" />
            ))}
          </div>
        </section>

        {/* Conference Papers */}
        <section className="mb-16">
          <h2 className="mb-8">Peer-Reviewed Conference Proceedings</h2>
          <div className="space-y-4">
            {conferences.map((pub, index) => (
              <PublicationCard key={index} pub={pub} type="conference" />
            ))}
          </div>
        </section>

        {/* Patents */}
        <section>
          <h2 className="mb-8">Patents</h2>
          <div className="space-y-4">
            {patents.map((pub, index) => (
              <PublicationCard key={index} pub={pub} type="patent" />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Publications;
