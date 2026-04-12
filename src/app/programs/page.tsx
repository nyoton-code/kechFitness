"use client";
import Image from "next/image";
import { useState } from "react";

const FILTERS = ["ALL EVENTS", "CARDIO", "CROSSFIT", "GYM", "POWERLIFTING"];

type ScheduleItem = {
  day: number;
  name: string;
  instructor: string;
  category: "CARDIO" | "CROSSFIT" | "GYM" | "POWERLIFTING";
  slot: number; // index in TIME_SLOTS
};

const TIME_SLOTS = [
  "06.00 - 07.00",
  "07.00 - 08.00",
  "08.00 - 09.00",
  "09.00 - 10.00",
  "10.00 - 11.00",
  "11.00 - 12.00",
  "12.00 - 13.00",
  "13.00 - 14.00",
  "14.00 - 15.00",
  "15.00 - 16.00",
  "18.00 - 19.00",
  "19.00 - 20.00",
  "20.00 - 21.00",
];

const DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

// Every occupied slot is its own individual entry — no spanning
const SCHEDULE: ScheduleItem[] = [
  // Monday – Open Gym 06-08
  { day: 0, name: "OPEN GYM", instructor: "", category: "GYM", slot: 0 },
  { day: 0, name: "OPEN GYM", instructor: "", category: "GYM", slot: 1 },
  // Monday – Open Gym 10-12
  { day: 0, name: "OPEN GYM", instructor: "", category: "GYM", slot: 4 },
  { day: 0, name: "OPEN GYM", instructor: "", category: "GYM", slot: 5 },
  // Monday – Power Lifting 12-13
  {
    day: 0,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 6,
  },
  // Monday – Crossfit 18-19
  {
    day: 0,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 10,
  },
  // Monday – Cardio 20-21
  {
    day: 0,
    name: "CARDIO BURN",
    instructor: "ANNA SIMMS JR.",
    category: "CARDIO",
    slot: 12,
  },

  // Tuesday – Crossfit 07-08
  {
    day: 1,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 1,
  },
  // Tuesday – Open Gym 08-12
  { day: 1, name: "OPEN GYM", instructor: "", category: "GYM", slot: 2 },
  { day: 1, name: "OPEN GYM", instructor: "", category: "GYM", slot: 3 },
  { day: 1, name: "OPEN GYM", instructor: "", category: "GYM", slot: 4 },
  { day: 1, name: "OPEN GYM", instructor: "", category: "GYM", slot: 5 },
  // Tuesday – Open Gym 14-16
  { day: 1, name: "OPEN GYM", instructor: "", category: "GYM", slot: 8 },
  { day: 1, name: "OPEN GYM", instructor: "", category: "GYM", slot: 9 },
  // Tuesday – Power Lifting 18-19
  {
    day: 1,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 10,
  },

  // Wednesday – Power Lifting 07-10
  {
    day: 2,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 1,
  },
  {
    day: 2,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 2,
  },
  {
    day: 2,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 3,
  },
  // Wednesday – Cardio 12-13
  {
    day: 2,
    name: "CARDIO BURN",
    instructor: "ANNA SIMMS JR.",
    category: "CARDIO",
    slot: 6,
  },
  // Wednesday – Open Gym 14-16
  { day: 2, name: "OPEN GYM", instructor: "", category: "GYM", slot: 8 },
  { day: 2, name: "OPEN GYM", instructor: "", category: "GYM", slot: 9 },

  // Thursday – Crossfit 10-13
  {
    day: 3,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 4,
  },
  {
    day: 3,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 5,
  },
  {
    day: 3,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 6,
  },

  // Friday – Power Lifting 07-10
  {
    day: 4,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 1,
  },
  {
    day: 4,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 2,
  },
  {
    day: 4,
    name: "POWER LIFTING",
    instructor: "JOE BELL",
    category: "POWERLIFTING",
    slot: 3,
  },
  // Friday – Open Gym 10-12
  { day: 4, name: "OPEN GYM", instructor: "", category: "GYM", slot: 4 },
  { day: 4, name: "OPEN GYM", instructor: "", category: "GYM", slot: 5 },
  // Friday – Crossfit 12-13
  {
    day: 4,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 6,
  },
  // Friday – Cardio 20-21
  {
    day: 4,
    name: "CARDIO BURN",
    instructor: "ANNA SIMMS JR.",
    category: "CARDIO",
    slot: 12,
  },

  // Saturday – Cardio 07-08
  {
    day: 5,
    name: "CARDIO BURN",
    instructor: "ANNA SIMMS JR.",
    category: "CARDIO",
    slot: 1,
  },
  // Saturday – Open Gym 10-12
  { day: 5, name: "OPEN GYM", instructor: "", category: "GYM", slot: 4 },
  { day: 5, name: "OPEN GYM", instructor: "", category: "GYM", slot: 5 },
  // Saturday – Crossfit 12-13
  {
    day: 5,
    name: "CROSSFIT CLASS",
    instructor: "MADISON FREN",
    category: "CROSSFIT",
    slot: 6,
  },

  // Sunday – Open Gym 07-08
  { day: 6, name: "OPEN GYM", instructor: "", category: "GYM", slot: 1 },
];

const CATEGORY_STYLES: Record<string, string> = {
  CARDIO: "bg-amber-500/20 border-l-2 border-amber-500 text-amber-400",
  CROSSFIT: "bg-red-500/20 border-l-2 border-red-500 text-red-400",
  GYM: "bg-zinc-700/30 border-l-2 border-zinc-500 text-zinc-300",
  POWERLIFTING: "bg-blue-500/20 border-l-2 border-blue-500 text-blue-400",
};

const CATEGORY_DOT: Record<string, string> = {
  CARDIO: "bg-amber-500",
  CROSSFIT: "bg-red-500",
  GYM: "bg-zinc-400",
  POWERLIFTING: "bg-blue-500",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ProgramsHero() {
  return (
    <section className="relative w-full h-[70vh]  md:h-lvh overflow-hidden">
      <Image
        src="/assests/imgs/classes.jpg"
        alt="Programs Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest">
          Class <span className="text-amber-500"> Timetable </span>
        </h1>
      </div>
    </section>
  );
}

// ─── Desktop Grid Table ───────────────────────────────────────────────────────
function DesktopTimetable({ schedule }: { schedule: ScheduleItem[] }) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-[90px_repeat(7,1fr)] border-b border-zinc-800">
          <div />
          {DAYS.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-[10px] font-bold tracking-widest text-zinc-400 border-l border-zinc-800"
            >
              {day}
            </div>
          ))}
        </div>

        {TIME_SLOTS.map((slot, slotIdx) => (
          <div
            key={slot}
            className="grid grid-cols-[90px_repeat(7,1fr)] border-b border-zinc-800/40 min-h-[48px]"
          >
            {/* Time label */}
            <div className="pr-2 text-right text-[9px] font-medium text-zinc-600 tracking-wide flex items-center justify-end">
              {slot}
            </div>

            {DAYS.map((_, dayIdx) => {
              const item = schedule.find(
                (s) => s.day === dayIdx && s.slot === slotIdx,
              );

              return (
                <div key={dayIdx} className="border-l border-zinc-800/60 p-0.5">
                  {item && (
                    <div
                      className={`h-full rounded-sm px-1.5 py-1 flex flex-col justify-center items-center text-center cursor-pointer hover:brightness-125 transition-all duration-200 min-h-[44px] ${CATEGORY_STYLES[item.category]}`}
                    >
                      <span className="text-[9px] font-black tracking-wider uppercase leading-tight">
                        {item.name}
                      </span>
                      {item.instructor && (
                        <span className="text-[8px] mt-0.5 opacity-60 tracking-wide uppercase">
                          {item.instructor}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile List View ─────────────────────────────────────────────────────────
function MobileTimetable({ schedule }: { schedule: ScheduleItem[] }) {
  return (
    <div className="md:hidden space-y-5">
      {DAYS.map((day, dayIdx) => {
        const dayItems = schedule
          .filter((s) => s.day === dayIdx)
          .sort((a, b) => a.slot - b.slot);

        if (dayItems.length === 0) return null;

        return (
          <div key={day}>
            <h3 className="text-center text-[11px] font-black tracking-[0.3em] text-white mb-2 pb-2 border-b border-zinc-700">
              {day}
            </h3>
            <div className="space-y-px">
              {dayItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-3 py-2.5 ${CATEGORY_STYLES[item.category]}`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${CATEGORY_DOT[item.category]}`}
                    />
                    <div>
                      <p className="text-[11px] font-bold tracking-wide uppercase">
                        {item.name}
                      </p>
                      {item.instructor && (
                        <p className="text-[9px] opacity-60 uppercase tracking-wider mt-0.5">
                          {item.instructor}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-medium opacity-70 whitespace-nowrap ml-4">
                    {TIME_SLOTS[item.slot]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Timetable Wrapper ────────────────────────────────────────────────────────
function Timetable() {
  const [activeFilter, setActiveFilter] = useState("ALL EVENTS");

  const filteredSchedule = SCHEDULE.filter(
    (item) => activeFilter === "ALL EVENTS" || item.category === activeFilter,
  );

  return (
    <section className="w-full bg-zinc-950 py-8 px-4">
      <h1 className="text-center my-20 text-2xl md:text-4xl">
        WORKING HOURS AND CLASSES
      </h1>
      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-6 border-b border-zinc-800 pb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`pb-1 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 ${
                activeFilter === f
                  ? "text-white border-b-2 border-amber-500"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <DesktopTimetable schedule={filteredSchedule} />
        <MobileTimetable schedule={filteredSchedule} />
      </div>
    </section>
  );
}

// ─── Default Export ───────────────────────────────────────────────────────────
export default function Programs() {
  return (
    <>
      <ProgramsHero />
      <Timetable />
    </>
  );
}
