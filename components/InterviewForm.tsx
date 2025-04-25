"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";

const interviewFormSchema = z.object({
  role: z.string().min(3),
  level: z.string().min(3),
  type: z.string().min(3),
  techstack: z.string().min(3),
  amount: z.number().min(1).max(20),
});

type InterviewFormData = z.infer<typeof interviewFormSchema>;

interface Props {
  onSubmit: (data: InterviewFormData) => void;
}

const InterviewForm = ({ onSubmit }: Props) => {
  const form = useForm<InterviewFormData>({
    resolver: zodResolver(interviewFormSchema),
    defaultValues: {
      role: "",
      level: "",
      type: "",
      techstack: "",
      amount: 5,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 mt-4 form"
      >
        <FormField
          control={form.control}
          name="role"
          label="Job Role"
          placeholder="e.g. Frontend Developer"
          type="text"
        />

        <FormField
          control={form.control}
          name="level"
          label="Experience Level"
          placeholder="e.g. Junior, Mid-level, Senior"
          type="text"
        />

        <FormField
          control={form.control}
          name="type"
          label="Interview Type"
          placeholder="e.g. Technical, Behavioral, Mixed"
          type="text"
        />

        <FormField
          control={form.control}
          name="techstack"
          label="Tech Stack"
          placeholder="e.g. React, Node.js, TypeScript (comma separated)"
          type="text"
        />

        <FormField
          control={form.control}
          name="amount"
          label="Number of Questions"
          placeholder="Enter a number between 1 and 20"
          type="text"
        />

        <Button className="btn" type="submit">
          Generate Interview
        </Button>
      </form>
    </Form>
  );
};

export default InterviewForm;
