interface SurveyProps {
  question: string;
}

export default function Survey({ question }: SurveyProps) {
  return (
    <div className="mb-10 border-2 border-[#27272a] p-5 rounded-md bg-[#d6d6d6]">
      <p className="text-xl pb-5">{question}</p>
      <div className="flex gap-5">
        <div className="flex gap-2">
          <p>Yes</p>
          <input
            type="checkbox"
            name="overwhelmed"
            id=""
            className="w-5"
          />
        </div>
        <div className="flex gap-2">
          <p>No</p>
          <input
            type="checkbox"
            name="overwhelmed"
            id=""
            className="w-5"
          />
        </div>
      </div>
    </div>
  );
}
