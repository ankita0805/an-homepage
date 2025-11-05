import PageLayout from "@/components/PageLayout";
import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";

const Patents = () => {
  const patentsGranted = [
    {
      title: "Memory Organization and Access Method for Efficient Matrix Arithmetic",
      status: "U.S. Patent 12399845",
      company: "Qualcomm Inc.",
      year: "2025"
    },
    {
      title: "Power-Density-based Clock Cell Spacing",
      status: "U.S. Patent 9824174",
      company: "Qualcomm Inc.",
      year: "2017"
    }
  ];

  const patentsPending = [
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
    }
  ];

  const PatentCard = ({ patent }: { patent: any }) => (
    <Card className="p-6 hover:shadow-lg transition-shadow">
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
  );

  return (
    <PageLayout>
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-12">Patents</h1>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Patents Granted */}
            <section className="mb-16" id="granted">
              <h2 className="mb-8">Patents Granted</h2>
              <div className="space-y-4">
                {patentsGranted.map((patent, index) => (
                  <PatentCard key={index} patent={patent} />
                ))}
              </div>
            </section>

            {/* Patent Pending */}
            <section id="pending">
              <h2 className="mb-8">Patent Pending</h2>
              <div className="space-y-4">
                {patentsPending.map((patent, index) => (
                  <PatentCard key={index} patent={patent} />
                ))}
              </div>
            </section>
          </div>

          {/* Side Navigation */}
          <SideNav
            items={[
              { id: "granted", label: "Patents Granted" },
              { id: "pending", label: "Patent Pending" },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Patents;

