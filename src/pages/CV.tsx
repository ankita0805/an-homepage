import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const CV = () => {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8">Curriculum Vitae</h1>

        <Card className="p-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center space-y-4">
              <FileText className="h-24 w-24 text-primary mx-auto" />
              <p className="text-lg text-foreground">
                Download my complete curriculum vitae to learn more about my academic background, 
                research experience, publications, and professional activities.
              </p>
            </div>

            <Button size="lg" className="gap-2 rounded">
              <Download className="h-5 w-5" />
              Download Full CV (PDF)
            </Button>

            <div className="w-full pt-8">
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl mb-6">CV Preview</h2>
                <div className="bg-muted/30 rounded-lg p-8 space-y-6 text-foreground">
                  <div>
                    <h3 className="text-xl mb-3">Education</h3>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li><strong>Ph.D. in Electrical & Computer Engineering</strong>, [University Name], Expected 2025</li>
                      <li><strong>M.S. in Electrical Engineering</strong>, [University Name], 2021</li>
                      <li><strong>B.S. in Electrical Engineering</strong>, [University Name], 2019</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3">Research Interests</h3>
                    <p className="ml-6">
                      Machine Learning for Biomedical Systems, Neural Network Compression, 
                      Privacy-Preserving Machine Learning, Brain-Computer Interfaces, 
                      Real-Time Signal Processing
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3">Select Awards & Honors</h3>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Outstanding Graduate Research Award, ECE Department (2024)</li>
                      <li>Best Paper Award, IEEE EMBC (2024)</li>
                      <li>NSF Graduate Research Fellowship (2020-2025)</li>
                      <li>IEEE Signal Processing Society Scholarship (2023)</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      This is a preview. Download the full CV PDF for complete details including 
                      publications, presentations, teaching experience, and professional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CV;
