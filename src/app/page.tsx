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
      <section className="bg-gradient-to-tr from-indigo-50 to-indigo-100 p-24 w-full">
        <div className="max-w-screen-2xl w-auto mx-auto">
      <div className="flex justify-center">
        <HeaderIcon />
      </div>
      <h1 className={`${angkor.className} text-indigo-800 text-6xl text-center mt-12 mb-3`}>
        Paperprint calendar
      </h1>
      <div className="mx-auto my-8">
        <p className={`${inter.className} font-bold text-gray-600 text-2xl text-center mt-8 mb-6`}>
          Design and print your custom paper calendar.
        </p>
      </div>
      <div className="relative flex justify-center gap-2 my-8">
        <a href="https://github.com/sarkaaa/paperprint-calendar" className="px-4 py-2 bg-slate-300 hover:bg-slate-400 focus:bg-slate-400 font-semibold rounded-md inline-block" target="_blank">Github.com</a>
        <Link activeClass="active"
          to="canvas"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          isDynamic={true}
        >
          <span className="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 focus:bg-indigo-800 rounded-md inline-block text-white font-semibold cursor-pointer">Create your calendar</span>
        </Link>
      </div>
      <div>
        <div>
          <h2 className="text-3xl text-center mt-12 mb-6">
            How does it work?
          </h2>
        </div>
        <div className="flex flex-wrap gap-12 w-2/3 mx-auto">
          {
            DESCRIPTION_VALUES.map(({ title, description }, index) => <HeaderDescriptionItem key={index} index={index + 1} title={title} description={description} />)
          }
        </div>
      </div>
      </div>
      </section>
      <section className="bg-white p-24 w-full " id="canvas">
        <div className="w-auto max-w-screen-2xl mx-auto">
          <CalendarForm />
        </div>
      </section>
    </main>
  );
}
