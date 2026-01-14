import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

type CountUpProps = {
  to: number;
};

export function CountUp({ to }: CountUpProps) {
  const count = useMotionValue(0);

  const formatted = useTransform(count, (latest) =>
    Number.isInteger(to)
      ? Math.round(latest).toLocaleString("id-ID")
      : latest.toFixed(1)
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 3,
      ease: "easeOut",
    });

    return controls.stop;
  }, [to]);

  return <motion.span>{formatted}</motion.span>;
}
