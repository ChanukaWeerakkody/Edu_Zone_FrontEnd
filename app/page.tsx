'use client';

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./componenets/Header";
import Hero from "./componenets/Route/Hero";


interface Props {}

const Page: FC<Props> = (Props) => {
   const [open, setOpen] = useState(false);
   const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="Edu-Zone"
        description="ELearning is the best platform for learn"
        keywords="Programming, TReact, MERN"
      />
      <Header 
      open={open} 
      setOpen={setOpen} 
      activeItem={activeItem} 
      />

        <Hero/>

    </div>
  );
};

export default Page;
