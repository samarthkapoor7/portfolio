"use client";

import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

interface TechTooltipProps {
  children: React.ReactNode;
  label: string;
}

const TechTooltip = ({ children, label }: TechTooltipProps) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="top" sideOffset={8} asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black shadow-lg"
            >
              {label}
              <Tooltip.Arrow className="fill-white" />
            </motion.div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TechTooltip;
