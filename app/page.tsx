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
        action="/submit"
        method="post"
        className="pt-10"
      >
        <Survey question="Do you never feel overwhelmed by your workload?" />
        <Survey question="Do you feel your work-life balance is satisfactory?" />
        <Survey question="Do you often feel motivated to complete your tasks at work?" />
        <Survey question="Do you feel comfortable discussing your mental health concerns with your supervisor or colleagues?" />
        <Survey question="Do you never find yourself frequently feeling exhausted or drained at the end of the workday?" />
        <Survey question="Do you never feel pressured to work longer hours or take on additional responsibilities?" />
        <Survey question="Are there any specific resources or programs that your company offers to support employee mental health?" />
        <Survey question="Have you never noticed any changes in your eating or sleeping habits due to work-related stress?" />
        <Survey question="Do you find it easy to relax or unwind after work hours?" />
        <Survey question="Have you never experienced any significant changes in your relationships due to work-related stress?" />
        <Survey question="Have you never felt like giving up or quitting your job?,  Do you regularly engage in physical activity or exercise?" />
        <Survey question="Have you never experienced physical symptoms related to anxiety or depression, such as muscle tension, rapid heartbeat, or difficulty breathing?" />
        <Survey question="Have you never experienced any adverse health effects or allergic reactions to food items provided by the company?" />

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
