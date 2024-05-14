"use client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import CalendarForm from "./components/calendar/calendarForm";
import { angkor, inter } from "./utils/fonts";
import HeaderIcon from "./components/headerIcon";
import HeaderDescriptionItem from "./components/headerDescriptionItem";


const DESCRIPTION_VALUES = [
  // {
  //   title: 'Choose your calendar structure',
  //   description: 'Select which type of calendar you want to create. You can choose between a weekly or a monthly calendar.'
  // },
  {
    title: 'Set your your calendar style',
    description: 'Choose between a variety of styles for your calendar. You can select your favourite theme, and you can also choose its color palette.'
  },
  {
    title: 'Download and print',
    description: 'Is your calendar ready? Download it and print it. Feel free to share the website with your friends.'
  }
]

export default function Home() {
  const [calendarSetup, setCalendar] = useState({
    type: 'weekly',
    startDate: '2022-01-01',
    endDate: '2022-10-01',
    theme: 'minimalism',
    canvas: 'lines',
    color: 'B&W'
  });

  useEffect(() => {
    console.log('calendarSetup: ', calendarSetup)
  }, [calendarSetup])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 py-10 lg:p-24">
        <div className="mx-auto w-auto max-w-screen-2xl">
      <div className="flex justify-center">
        <HeaderIcon />
      </div>
      <h1 className={`${angkor.className} mb-3 mt-12 text-center text-4xl text-indigo-800 md:text-6xl`}>
        Paperprint calendar
      </h1>
      <div className="mx-auto my-8">
        <p className={`${inter.className} mb-6 mt-8 text-center text-xl font-bold text-gray-600 md:text-2xl`}>
          Design and print your custom paper calendar.
        </p>
      </div>
      <div className="relative my-8 flex justify-center gap-2">
        <a href="https://github.com/sarkaaa/paperprint-calendar" className="color-slate-950 inline-block rounded-md bg-slate-300 px-4 py-2 text-center font-semibold transition-all hover:bg-slate-400 focus:bg-slate-400" target="_blank">Github.com</a>
        <Link activeClass="active"
          to="canvas"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          isDynamic={true}
        >
          <span className="inline-block cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-center font-semibold text-white transition-all hover:bg-indigo-800 focus:bg-indigo-800">Create your calendar</span>
        </Link>
      </div>
      <div>
        <div>
          <h2 className="color-slate-950 mb-6 mt-12 text-center text-3xl">
            How does it work?
          </h2>
        </div>
        <div className="mx-auto flex w-2/3 flex-col flex-wrap gap-8 md:flex-row md:gap-12">
          {
            DESCRIPTION_VALUES.map(({ title, description }, index) => <HeaderDescriptionItem key={index} index={index + 1} title={title} description={description} />)
          }
        </div>
      </div>
      </div>
      </section>
      <section className="w-full bg-white p-6 py-10 lg:p-24 lg:pb-8" id="canvas">
        <div className="mx-auto w-auto max-w-screen-2xl">
          <CalendarForm />
        </div>
      </section>
    </main>
  );
}
