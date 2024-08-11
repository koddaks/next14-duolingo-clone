import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Progress } from './ui/progress';
import { quests } from '@/constants';

type QuestsProps = {
  points: number;
};

export const Quests = ({ points }: QuestsProps) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>
        <Button variant="primaryOutline" size="sm" asChild>
          <Link href="/quests">View all</Link>
        </Button>
      </div>

      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <li
              key={quest.title}
              className="flex items-center gap-x-4 w-full pb-4"
            >
              <Image src="/points.svg" alt="Points" width={40} height={40} />
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
