import PageLayout from "@/components/PageLayout";
import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Research = () => {
  const projects = [
    {
      title: "Neural Network Compression for Wearable Biomedical Devices",
      description: [
        "Modern wearable health monitors require sophisticated machine learning models to accurately detect anomalies, yet these devices operate under severe power and computational constraints. This project addresses the fundamental challenge of deploying deep neural networks on resource-limited hardware without sacrificing diagnostic accuracy.",
        "I developed a novel pruning and quantization framework that achieves 95% model compression while maintaining 98% of the original accuracy. The approach combines structured pruning with mixed-precision quantization, guided by a novel importance metric that considers both model performance and hardware efficiency.",
        "This work has direct implications for continuous cardiac monitoring, enabling real-time arrhythmia detection on battery-powered devices. Our system has been validated on over 100,000 hours of ECG data and demonstrates superior performance compared to existing compression techniques."
      ],
      publications: ["ICML 2025", "IEEE TBME 2024"]
    },
    {
      title: "Privacy-Preserving Federated Learning for Medical Diagnostics",
      description: [
        "Healthcare data is inherently sensitive and distributed across multiple institutions, creating a fundamental tension between the need for large-scale data to train accurate models and the imperative to protect patient privacy. This project develops novel federated learning algorithms that enable collaborative model training without centralizing data.",
        "My approach introduces a differentially private aggregation scheme with adaptive noise scaling, which provides formal privacy guarantees while minimizing the impact on model accuracy. Additionally, I developed a secure multi-party computation protocol that prevents inference attacks during the training process.",
        "The system has been deployed in a pilot study across three hospitals, demonstrating the feasibility of privacy-preserving collaborative learning in real-world clinical settings. This work opens new avenues for multi-institutional research while maintaining strict compliance with healthcare privacy regulations."
      ],
      publications: ["NeurIPS 2024", "Journal of Biomedical Informatics 2024"]
    },
    {
      title: "Adaptive Signal Processing for Implantable Neural Interfaces",
      description: [
        "Brain-computer interfaces (BCIs) hold tremendous promise for restoring function to individuals with paralysis, but their long-term efficacy is limited by signal degradation and changing neural patterns. This project develops adaptive signal processing techniques that maintain high decoding accuracy despite non-stationary neural recordings.",
        "I designed an online learning framework that continuously updates neural decoders based on user feedback, without requiring explicit recalibration sessions. The system employs a Bayesian optimization approach to efficiently explore the high-dimensional parameter space of neural decoder configurations.",
        "Results from a longitudinal study with five patients demonstrate sustained decoding performance over six months, significantly outperforming static decoder approaches. This work represents a critical step toward practical, long-term brain-computer interfaces for clinical use."
      ],
      publications: ["Journal of Neural Engineering 2024", "IEEE EMBC 2024"]
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-8">Research</h1>
        
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Research Overview */}
            <div className="mb-16" id="overview">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl">Research Overview</h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    The dominant paradigm of AI today remains tethered to the cloud, a model optimized for abundant resources rather than the constraints of the physical world. This creates a fundamental disconnect, as the real world is distributed, resource-limited, and privacy-sensitive. For intelligence to be truly integrated into our daily lives, it must perceive, reason, and act autonomously at the data source—operating under strict limits of latency, privacy, and energy that cloud-centric models cannot meet. The high-level vision of this research is to move beyond "scaled-down" cloud AI and establish a new science of "adaptive intelligence," enabling systems that learn from, adapt to, and act within the physical world they inhabit.
                  </p>
                  <p>
                    To achieve this, the research tackles three core bottlenecks that currently prevent truly efficient and adaptive edge AI. First, it addresses the shift from static, train-once models to dynamic, personalized intelligence that can continuously learn from user interaction in real-time. Second, it aims to break the rigid trade-off between model capability and efficiency, which currently forces edge applications to compromise on performance. Finally, this work seeks to unify the siloed fields of algorithm design and hardware architecture—a disconnect that creates massive inefficiencies—by pioneering a full-stack approach built on algorithm-hardware co-evolution.
                  </p>
                </div>
              </Card>
            </div>

            {/* Projects */}
            <div id="projects">
              <h2 className="mb-8">Research Projects</h2>
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <Card key={index} className="p-8">
                    <h3 className="mb-6">{project.title}</h3>
                    <div className="space-y-4 text-foreground mb-6">
                      {project.description.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-semibold text-muted-foreground">Related Publications:</span>
                      {project.publications.map((pub, pIndex) => (
                        <Button
                          key={pIndex}
                          variant="outline"
                          size="sm"
                          className="rounded"
                          asChild
                        >
                          <a href="/publications">
                            {pub} <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Side Navigation */}
          <SideNav
            items={[
              { id: "overview", label: "Research Overview" },
              { id: "projects", label: "Research Projects" },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Research;
