import { motion } from "framer-motion";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border border-zinc-300 dark:border-zinc-700 bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
        <div className="flex justify-center items-center gap-4 text-zinc-900 dark:text-zinc-50 text-lg font-semibold">
          <span>AI Task Assistant</span>
        </div>

        <p className="text-sm">
          Boost your productivity with <strong>AI Task Assistant</strong> — a smart chatbot.Designed to streamline task management, it enables you to create, update, and track tasks effortlessly using natural language.
        </p>

        <ul className="list-disc list-inside text-sm space-y-1">
          <li> Create and update tasks seamlessly</li>
          <li> Get intelligent task suggestions</li>
          <li> Automate routine workflows</li>
          <li> Enjoy a sleek, user-friendly interface</li>
        </ul>

        <p className="text-sm">
          Experience a smarter way to manage tasks with AI-powered automation.
        </p>
      </div>
    </motion.div>
  );
};
