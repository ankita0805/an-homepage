import PageLayout from "@/components/PageLayout";
import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";

const Research = () => {

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
                    The dominant paradigm of AI today remains tethered to the cloud, a model optimized for abundant resources rather than the constraints of the physical world. This creates a fundamental disconnect, as the real world is distributed, resource limited, and privacy sensitive. For intelligence to be truly integrated into our daily lives, it must perceive, reason, and act autonomously at the data source, operating under strict limits of latency, privacy, and energy that cloud-centric models cannot meet. The high-level vision of my research is to move beyond "scaled-down" cloud AI and establish a new science of "adaptive intelligence," enabling systems that learn from, adapt to, and act within the physical world they inhabit.
                  </p>
                  <p>
                    To achieve this, my research tackles three core bottlenecks that currently prevent truly efficient and adaptive edge AI. First, it addresses the shift from static, train once models to dynamic, personalized intelligence that can continuously learn from user interaction in real time. Second, it aims to break the rigid trade off between model capability and efficiency, which currently forces edge applications to compromise on performance. Finally, this work seeks to unify the siloed fields of algorithm design and hardware architecture, a disconnect that creates massive inefficiencies, by pioneering a full-stack approach built on algorithm hardware coevolution.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Side Navigation */}
          <SideNav
            items={[
              { id: "overview", label: "Research Overview" },
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Research;
