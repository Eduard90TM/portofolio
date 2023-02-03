import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-whitemb-1 md:mb:3 font-bold">
        Eduard Riesmchneider
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
      <p className="text-sm max-xl mb-6 font-bold">
        I have a technical background in Mechanical Engineering. But i love to
        get my hands on technology like programming, automation and networking.
        <br />
        Currently i`m learning programming languages like JavaScript, Python,
        TypeScript. But on framework level i`m learning React, Django.
        <br />
        On the other side i`m learning also networking and server administration
        on Linux from CISCO and ComTIA. To know how a network works and how to
        secure everything inside a network (just for fun!)
      </p>
    </div>
  );
}

export default Intro;
