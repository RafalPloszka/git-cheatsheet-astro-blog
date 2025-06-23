import { useState } from "react";

interface AnswerToggleProps {
  children: React.ReactNode;
}

export default function AnswerToggle({ children }: AnswerToggleProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setVisible(!visible)}
        className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
      >
        {visible ? "Hide Answer" : "Show Answer"}
      </button>

      {visible && <div className="mt-3">{children}</div>}
    </div>
  );
}
