
'use client';

import React, { useState, useEffect } from "react";
import { TextEffect } from "@/components/ui/text-effect";

export function TextEffectPerChar() {
  return (
    <TextEffect per='char' preset='fade' className="text-white text-2xl md:text-4xl font-bold">
      Eliminate RTOs upto 60% with scalysis
    </TextEffect>
  );
}

export function TextEffectWithPreset() {
  return (
    <TextEffect per='word' as='h3' preset='slide' className="text-white text-xl md:text-2xl">
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}

export function TextEffectWithCustomVariants() {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fancyVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: () => ({
        opacity: 0,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: 0.3,
        color: getRandomColor(),
      }),
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        color: getRandomColor(),
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <TextEffect per='word' variants={fancyVariants} className="text-white text-xl">
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}

export function TextEffectWithCustomDelay() {
  return (
    <div className='flex flex-col space-y-0'>
      <TextEffect
        per='char'
        delay={0.5}
        className="text-white text-xl"
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        Animate your ideas
      </TextEffect>
      <TextEffect per='char' delay={1.5} className="text-white text-xl">
        with motion-primitives
      </TextEffect>
      <TextEffect
        per='char'
        delay={2.5}
        className='pt-12 text-xs text-white'
        preset='blur'
      >
        (and delay!)
      </TextEffect>
    </div>
  );
}

export function TextEffectPerLine() {
  return (
    <TextEffect
      per='line'
      as='p'
      className="text-white text-xl"
      segmentWrapperClassName='overflow-hidden block'
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            y: 40,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
            },
          },
        },
      }}
    >
      {`now live on motion-primitives!
now live on motion-primitives!
now live on motion-primitives!`}
    </TextEffect>
  );
}

export function TextEffectWithExit() {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },
      exit: {
        transition: { staggerChildren: 0.01, staggerDirection: 1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) brightness(100%)',
        transition: {
          duration: 0.4,
        },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: 'blur(10px) brightness(0%)',
        transition: {
          duration: 0.4,
        },
      },
    },
  };

  return (
    <TextEffect
      className='inline-flex text-white text-xl'
      per='char'
      variants={blurSlideVariants}
      trigger={trigger}
    >
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}
