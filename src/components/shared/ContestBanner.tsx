import { useState, useEffect } from "react";

const UPCOMING_CONTESTS = [
  { date: "2026-03-08", label: "8 Mars - CSO CLUB PONEY AMATEUR" },
  { date: "2026-04-05", label: "5 Avril - CSO CLUB PONEY AMATEUR" },
  { date: "2026-05-03", label: "3 Mai - CSO CLUB PONEY AMATEUR" },
  { date: "2026-06-07", label: "7 Juin - CSO CLUB PONEY AMATEUR" },
  { date: "2026-09-20", label: "20 Septembre - CSO CLUB PONEY AMATEUR" },
  { date: "2026-10-11", label: "11 Octobre - CSO CLUB PONEY AMATEUR" },
  { date: "2026-11-08", label: "8 Novembre - CSO CLUB PONEY AMATEUR" },
];

const STORAGE_KEY = "contest-banner-closed-2026";

interface ContestBannerProps {
  concoursPostUrl: string;
}

export default function ContestBanner({ concoursPostUrl }: ContestBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [upcomingContests, setUpcomingContests] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureContests = UPCOMING_CONTESTS.filter((contest) => {
      const contestDate = new Date(contest.date);
      contestDate.setHours(0, 0, 0, 0);
      return contestDate >= today;
    });

    const nextContest = futureContests[0]?.label ?? null;
    const wasClosed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "true";

    setUpcomingContests(nextContest ? [nextContest] : []);
    setIsVisible(!!nextContest && !wasClosed);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  if (!isVisible || upcomingContests.length === 0) {
    return null;
  }

  const displayText = `Prochain concours : ${upcomingContests[0]}`;

  return (
    <a
      href={concoursPostUrl}
      className="contest-banner group block w-full bg-primary-600 dark:bg-primary-700 text-white py-2.5 px-4 text-center text-sm font-medium hover:bg-primary-700 dark:hover:bg-primary-800 transition-colors relative pr-12"
    >
      <span className="inline-block">{displayText}</span>
      <span className="inline-block ml-1 opacity-90 group-hover:opacity-100">→ Voir le planning</span>
      <button
        type="button"
        onClick={handleClose}
        aria-label="Fermer la bannière"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/20 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </a>
  );
}
