"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { TestComponent } from "./components/TestComponent";
import { Rubik } from "next/font/google";
import { Link } from 'react-scroll';
import CalendarForm from "./components/calendarForm";
import { angkor } from "./utils/fonts";

const HeaderDescriptionItem = ({ index, title, description }: { index: number, title: string, description: string }) => (
  <div className="flex-1">
            <h3 className="text-xl font-bold">
              <span className="text-pink-600 mr-2">{index}.</span>{title}
            </h3>
            <p>
              {description}
            </p>
          </div>
)

const DESCRIPTION_VALUES = [
  {
    title: 'Choose your calendar structure',
    description: 'Select which type of calendar you want to create. You can choose between a weekly or a monthly calendar.'
  },
  {
    title: 'Set your your calendar style',
    description: 'Choose between a variety of styles for your calendar. You can select your favourite theme, and you can also choose its color palette.'
  },
  {
    title: 'Download and print',
    description: 'Is your calendar ready? Download it and print it. You can also share it with your friends.'
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
      <section className="bg-indigo-100 p-24">
      <div className="flex justify-center">
        <span className="text-9xl text-center">📆</span>
      </div>
      <h1 className={`${angkor.className} text-indigo-800 text-5xl text-center mt-12 mb-6`}>
        Paperprint calendar
      </h1>
      <div className="w-96 mx-auto my-8">
        <p className="text-center">
          Design and print your custom paper calendar.
        </p>
      </div>
      <div className="relative flex justify-center gap-2 my-8">
        <a href="https://github.com/sarkaaa/paperprint-calendar" className="px-4 py-2 bg-slate-300 rounded-md inline-block" target="_blank">Github.com</a>
        <Link activeClass="active"
          to="canvas"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
          isDynamic={true}
        >
          <span className="px-4 py-2 bg-indigo-600 rounded-md inline-block text-white cursor-pointer">Create your calendar</span>
        </Link>
      </div>
      <div>
        <div>
          <h2 className="text-3xl text-center mt-12 mb-6">
            How does it work?
          </h2>
        </div>
        <div className="flex gap-12">
          {
            DESCRIPTION_VALUES.map(({ title, description }, index) => <HeaderDescriptionItem key={index} index={index + 1} title={title} description={description} />)
        }
        </div>
      </div>
      </section>
      <section className="bg-white p-24" id="canvas">
      <CalendarForm />
      </section>
    </main>
  );
}
