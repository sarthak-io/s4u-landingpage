"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import {
  Upload,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import AuthModal from "./AuthModal";

interface ScriptAnalysisToolProps {
  onAnalysisComplete?: (result: AnalysisResult) => void;
}

interface AnalysisResult {
  whatsWorking: string[];
  needsWork: string[];
  suggestedFixes: string[];
}

const ScriptAnalysisTool = ({
  onAnalysisComplete = () => {},
}: ScriptAnalysisToolProps) => {
  const [activeTab, setActiveTab] = useState("text");
  const [scriptText, setScriptText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null,
  );
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setAnalysisResult(null);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);

          // Mock analysis result
          const result = {
            whatsWorking: [
              "Strong character development for the protagonist",
              "Engaging dialogue in the opening scene",
              "Clear thematic elements throughout",
            ],
            needsWork: [
              "Second act pacing issues",
              "Supporting character motivations unclear",
              "Climax needs stronger buildup",
            ],
            suggestedFixes: [
              "Condense scenes 15-18 to improve pacing",
              "Add a character-defining moment for the antagonist",
              "Strengthen the protagonist's final decision point",
            ],
          };

          setAnalysisResult(result);
          onAnalysisComplete(result);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
  };

  const handleAnalyze = () => {
    if (
      (activeTab === "text" && scriptText.trim()) ||
      (activeTab === "upload" && file)
    ) {
      simulateAnalysis();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-background p-6 rounded-xl border border-border">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            AI Script Analysis Tool
          </CardTitle>
          <CardDescription className="text-muted-foreground max-w-2xl mx-auto">
            Upload your script or enter your ideas to get instant feedback. Our
            AI will analyze your content and provide valuable insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Enter Text
              </TabsTrigger>
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload File
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-4">
              <Textarea
                placeholder="Enter your script or ideas here..."
                className="min-h-[200px] resize-none"
                value={scriptText}
                onChange={(e) => setScriptText(e.target.value)}
              />
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                <Input
                  type="file"
                  accept=".txt,.pdf,.docx"
                  className="hidden"
                  id="script-file"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="script-file"
                  className="cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <p className="font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF, DOCX or TXT (max 10MB)
                  </p>
                </label>
                {file && (
                  <p className="mt-4 text-sm font-medium text-green-500 flex items-center justify-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    {file.name}
                  </p>
                )}
              </div>
            </TabsContent>

            <div className="mt-6">
              <Button
                onClick={handleAnalyze}
                disabled={
                  isAnalyzing ||
                  (activeTab === "text" && !scriptText.trim()) ||
                  (activeTab === "upload" && !file)
                }
                className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 text-white"
                size="lg"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Script"}
              </Button>
            </div>

            {isAnalyzing && (
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Analyzing script</span>
                  <span>{Math.min(Math.round(progress), 100)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground animate-pulse text-center mt-2">
                  Our AI is processing your content...
                </p>
              </div>
            )}

            {analysisResult && (
              <div className="mt-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-green-500">
                    <CheckCircle className="h-5 w-5" />
                    What's Working
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {analysisResult.whatsWorking.map((item, index) => (
                      <li key={index} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-500">
                    <AlertCircle className="h-5 w-5" />
                    What Needs Work
                  </h3>
                  <div className="relative">
                    <ul
                      className={`list-disc pl-5 space-y-1 ${!isAuthenticated ? "blur-sm" : ""}`}
                    >
                      {analysisResult.needsWork.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {!isAuthenticated && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-md">
                        <Button
                          variant="outline"
                          className="border-dashed"
                          onClick={() => setShowAuthModal(true)}
                        >
                          Unlock Premium Insights
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-500">
                    <Lightbulb className="h-5 w-5" />
                    Suggested Fixes
                  </h3>
                  <div className="relative">
                    <ul
                      className={`list-disc pl-5 space-y-1 ${!isAuthenticated ? "blur-sm" : ""}`}
                    >
                      {analysisResult.suggestedFixes.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {!isAuthenticated && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-md">
                        <Button
                          variant="outline"
                          className="border-dashed"
                          onClick={() => setShowAuthModal(true)}
                        >
                          Unlock Premium Insights
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Tabs>
        </CardContent>
      </Card>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={() => setIsAuthenticated(true)}
      />
    </div>
  );
};

export default ScriptAnalysisTool;
