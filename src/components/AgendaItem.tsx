import { motion } from "framer-motion";

type AgendaItemProps = {
  time: string;
  title: string;
  subtitle?: string | string[];
  note?: string;
  index: number;
  isInView: boolean;
};

const AgendaItem = ({ time, title, subtitle, note, index, isInView }: AgendaItemProps) => {
  return (
    <motion.div
      className={`border-b border-solid border-[#dd05d4] py-6 ${index === 0 ? "pt-0" : ""}`}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 + index * 0.1,
      }}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/4">
          <div className="text-lg mb-1">{time}</div>
          {note && (
            <span className="bg-[#0d6efd] text-white text-xs px-3 py-1 rounded shadow inline-block">
              {note}
            </span>
          )}
        </div>
        <div className="w-full sm:w-3/4">
          <h5 className="text-lg mb-1">{title}</h5>
          {Array.isArray(subtitle) ? (
            <div className="text-sm text-gray-600 space-y-1">
              {subtitle.map((line, subIdx) => (
                <p key={subIdx}>{line}</p>
              ))}
            </div>
          ) : (
            index !== 0 &&
            subtitle && <p className="text-sm text-gray-600">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AgendaItem;
