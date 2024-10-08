import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import HoverEffect from "@/pages/DragonsSprints/[slug]/Components/card-hover-effectv2";
import { BrainCircuit, Radio, Shapes } from 'lucide-react';

const isConsecutiveDay = (lastDate: string, currentDate: string): boolean => {
    const last = new Date(lastDate);
  const current = new Date(currentDate);
  const diffTime = Math.abs(current.getTime() - last.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays === 1;
};

const initializeOrUpdateProgress = (userId: string, slug:any) => {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  // General sign-in streak
  const storedStreakInfo = localStorage.getItem(`${userId}_streakInfo`);
  let currentStreakInfo = storedStreakInfo
    ? JSON.parse(storedStreakInfo)
    : { currentStreak: 0, longestStreak: 0, lastSignIn: "" };

  if (currentStreakInfo.lastSignIn !== todayString) {
    if (isConsecutiveDay(currentStreakInfo.lastSignIn, todayString)) {
      currentStreakInfo.currentStreak++;
      currentStreakInfo.longestStreak = Math.max(
        currentStreakInfo.longestStreak,
        currentStreakInfo.currentStreak
      );
    } else {
      currentStreakInfo.currentStreak = 1;
    }
    currentStreakInfo.lastSignIn = todayString;
    localStorage.setItem(`${userId}_streakInfo`, JSON.stringify(currentStreakInfo));
  }

  // 14-day challenge tracking
  const savedStartDate = localStorage.getItem(`${slug}_startDate`);
  let startDate;
  if (savedStartDate) {
    startDate = new Date(savedStartDate);
  } else {
    startDate = new Date();
    localStorage.setItem(`${slug}_startDate`, startDate.toISOString());
  }

  const elapsedDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const daysLeft = Math.max(0, 14 - elapsedDays);

  return { currentStreakInfo, daysLeft, elapsedDays, startDate };
};

export function CardHoverEffectDemo() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const { slug } = router.query;
  const [elapsedDays, setElapsedDays] = useState(0);
  const [isPathwayOpen, setIsPathwayOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      const { elapsedDays } = initializeOrUpdateProgress(user.id, slug);
      setElapsedDays(elapsedDays);
      setIsPathwayOpen(elapsedDays >= 0);
      console.log("isPathwayOpen out", isPathwayOpen);

    }
  }, [isLoaded, user, slug]);

  const projects = [
    {
      title: "Community",
      description: "Join a community of like-minded and interact with instructors and peers in real-time.",
      link: "https://discord.gg/zScyN2xWj3",
      icon: <Radio className='h-32 w-32 opacity-10 group-hover:opacity-100 transition-all' />,
    },
    {
      title: "Learn",
      description: "Access course materials, videos, and assignments to enhance your learning.",
      link: `/DragonsSprints/${slug}/learn`,
      icon: <Shapes className='h-32 w-32 opacity-10 group-hover:opacity-100 transition-all'/>,
    },
    {
      title: "PathWays",
      description: "Explore different learning paths for tracks and specialize your knowledge.",
      link: `/Pathways`,
      icon: <BrainCircuit className='h-32 w-32 opacity-10 group-hover:opacity-100 transition-all'/>,
    },
  ];



  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} isPathwayOpen={isPathwayOpen} />
    </div>
  );
}

export default CardHoverEffectDemo;
