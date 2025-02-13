"use client";

import CountUp from "react-countup";

const stats = [
    {
        num:3,
        text:"Years of Experience",
    },
    {
        num:10,
        text:"Projects Completed",
    },
    {
        num:5,
        text:"Technologies Mastered",
    },
    {
        num:700,
        text:"Codes Commited",
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vm] mx-auto gap-6 lg:max-w-none">
            {stats.map((stat, index) => {
                return (
                    <div key={index} className="flex-1 flex gap-4 items-center justify-center lg:justify-start ">
                        <CountUp end={stat.num} duration={5} delay={2} className=" text-4xl lg:text-6xl font-extrabold"></CountUp>
                        <p className={`${stat.text.length<15 ? "max-w-[100px]" :"max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Stats
