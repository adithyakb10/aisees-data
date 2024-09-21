import Survey from "@/components/survey";

export default function Home() {
  return (
    <div className="py-5 px-16">
      <div>
        <h1 className="text-center text-4xl font-bold text-cyan-400">
          Mental Health Survey
        </h1>
      </div>
      <div className="pt-5">
        <p className="text-center text-2xl">
          This is an <span className="font-semibold italic">anonymous</span>{" "}
          survey that aims to help us create a healthier and better workplace
          for everyone.
        </p>
      </div>
      <form
        action="/api"
        method="post"
        className="pt-10"
      >
        <Survey
          yes="negative"
          no="positive"
          question="Do you never feel overwhelmed by your workload?"
        />
        <Survey
          yes="positive"
          no="negative"
          question="Do you feel your work-life balance is satisfactory?"
        />
        <Survey
          yes="positive"
          no="negative"
          question="Do you often feel motivated to complete your tasks at work?"
        />
        <Survey
          yes="positive"
          no="negative"
          question="Do you feel comfortable discussing your mental health concerns with your supervisor or colleagues?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Do you never find yourself frequently feeling exhausted or drained at the end of the workday?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Do you never feel pressured to work longer hours or take on additional responsibilities?"
        />
        <Survey
          yes="positive"
          no="negative"
          question="Are there any specific resources or programs that your company offers to support employee mental health?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Have you never noticed any changes in your eating or sleeping habits due to work-related stress?"
        />
        <Survey
          yes="positive"
          no="negative"
          question="Do you find it easy to relax or unwind after work hours?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Have you never experienced any significant changes in your relationships due to work-related stress?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Have you never felt like giving up or quitting your job?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Have you never experienced physical symptoms related to anxiety or depression, such as muscle tension, rapid heartbeat, or difficulty breathing?"
        />
        <Survey
          yes="negative"
          no="positive"
          question="Have you never experienced any adverse health effects or allergic reactions to food items provided by the company?"
        />

        <button
          type="submit"
          className="py-2 px-4 bg-cyan-400 rounded text-white font-bold mb-3 hover:bg-cyan-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
