import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Patents = () => {
  const patents = [
    {
      title: "Memory Organization and Access Method for Efficient Matrix Arithmetic",
      status: "U.S. Patent 12399845",
      company: "Qualcomm Inc.",
      year: "2025"
    },
    {
      title: "Video Reasoning without Training",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Grouped Adapter Deployment for Machine Learning Models",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Adaptive Scaling Based Machine Learning Network Personalization",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Blended Output Generation in Generative Artificial Intelligence Models",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Rank Allocation of Concurrent Adapters",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Multiple Adapter Deployment for Machine Learning Models",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Generalized Zero-Shot Content-Style Composition",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Subject Style Personalization using Zero Training",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Machine Learning Models with Parallel Adapters",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Efficient Softmax Implementation with Reduced Bitwidth",
      status: "Patent pending",
      company: "Qualcomm Inc."
    },
    {
      title: "Quantized Neural Network Architecture",
      status: "U.S. Patent Application 17934476",
      company: "Qualcomm Inc."
    },
    {
      title: "Power-Density-based Clock Cell Spacing",
      status: "U.S. Patent 9824174",
      company: "Qualcomm Inc.",
      year: "2017"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12">Patents</h1>

        <div className="space-y-4">
          {patents.map((patent, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  {patent.title}
                </p>
                <p className="text-muted-foreground">
                  {patent.status}, {patent.company}
                  {patent.year && `, ${patent.year}`}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Patents;

