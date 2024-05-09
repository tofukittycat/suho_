"use client";

import { useRouter } from "next/router";

import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { CHARM_ADDITION_STEP } from "@/constants/charmContent";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

import CharmImageAdditon from "./CharmImageAdditon";
import CharmNameAddition from "./CharmNameAddition";

const slides = [
  { id: 0, content: "🧥", background: "rgba(132, 93, 28, 1)" },
  { id: 1, content: "🥼", background: "rgba(169, 172, 174, 1)" },
  { id: 2, content: "👗", background: "rgba(127, 200, 180, 1)" },
  { id: 3, content: "🥻", background: "rgba(208, 122, 50, 1)" },
  { id: 4, content: "👚", background: "rgba(190, 118, 177, 1)" },
  { id: 5, content: "👕", background: "rgba(143, 187, 239, 1)" },
  { id: 6, content: "👘", background: "rgba(240, 163, 20, 1)" },
];

export default function CharmAdditionForm() {
  //   const router = useRouter();

  const stepComponent = useState(CHARM_ADDITION_STEP);
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [step, setStep] = useState<"next" | "prev">("next");
  const componentRef = useRef<HTMLDivElement>(null);

  //   const sliderRef = useRef(null);

  const [xValue, setXValue] = useState(0);
  const x = useMotionValue(xValue);

  const showNextSlide = () => {
    setStep("next");
    setVisibleIndex(prev => (prev === slides.length - 1 ? slides.length - 1 : prev + 1));
    componentRef.current;
  };

  const showPrevSlide = () => {
    setStep("prev");
    setVisibleIndex(prev => (prev === 0 ? 0 : prev - 1));
    // if (visibleIndex === 0) {
    //   router.back();
    //   return;
    // }
  };

  console.log(stepComponent);

  const slideVariants = {
    hidden: (Step: "next" | "prev") => ({
      x: Step === "next" ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (Step: "next" | "prev") => ({
      x: Step === "next" ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div ref={componentRef}>
      <motion.div className="slider" animate={{ transition: { duration: 0.3 } }}>
        <AnimatePresence custom={step}>
          <motion.div
            className="slide"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={step}
            drag="x"
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
            whileTap={{ scale: 0.9 }}
            dragElastic={false}
            onDrag={(event, info) => {
              setXValue(info.point.x);
              x.set(info.offset.x);
            }}
            onDragEnd={(event, info) => {
              if (info.offset.x < 0 && Math.abs(info.offset.x) >= window.innerWidth / 4) {
                showNextSlide();
              } else if (info.offset.x > 0 && info.offset.x >= window.innerWidth / 4) {
                showPrevSlide();
              }
              setXValue(info.point.x);
              x.set(info.point.x);
            }}
          >
            <CharmImageAdditon />
          </motion.div>
          <motion.div custom={step}>
            <CharmImageAdditon />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <button type="button" className="prev" onClick={showPrevSlide} disabled={visibleIndex === 0}>
        ᴘʀᴇᴠ
      </button>
      <button
        type="button"
        className="next"
        onClick={showNextSlide}
        disabled={visibleIndex === slides.length - 1}
      >
        ɴᴇxᴛ
      </button>
    </div>
  );
}
