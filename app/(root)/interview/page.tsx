"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Agent from "@/components/Agent";
import InterviewForm from "@/components/InterviewForm";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = () => {
  const router = useRouter();
  const [showAgent, setShowAgent] = useState(false);
  const [interviewId, setInterviewId] = useState<string>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, userid: user?.id }),
      });

      const result = await response.json();
      if (result.success) {
        setInterviewId(result.interviewId);
        setShowAgent(true);
      }
    } catch (error) {
      console.error("Error generating interview:", error);
    }
  };

  if (!user) return null;

  return (
    <>
      <h3>Interview generation</h3>

      {!showAgent ? (
        <div className="card-border lg:min-w-[566px]">
          <div className="flex flex-col gap-6 card py-14 px-5">
            <h3>Create a New Interview</h3>
            <InterviewForm onSubmit={handleSubmit} />
          </div>
        </div>
      ) : (
        <Agent
          userName={user.name}
          userId={user.id}
          interviewId={interviewId}
          type="generate"
        />
      )}
    </>
  );
};

export default Page;
