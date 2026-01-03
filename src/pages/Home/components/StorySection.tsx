
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { FollowerPointerCard } from "../../../components/ui/following-pointer";
import { Zap } from "lucide-react";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
  showCursor = false,
}: CodeBlockProps & { showCursor?: boolean }) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  const TitleComponent = () => (
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center border-2 border-white">
        <Zap className="w-3 h-3 text-white" />
      </div>
      <p className="text-sm font-medium text-white">MVP Works</p>
    </div>
  );

  return (
    <FollowerPointerCard title={<TitleComponent />}>
      <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm overflow-hidden">
        <div className="flex flex-col gap-2">
          {/* macOS Traffic Light Dots */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
            </div>
          </div>
          {tabsExist && (
            <div className="flex overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-2! text-xs transition-colors font-sans ${
                    activeTab === index
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          )}
          {!tabsExist && filename && (
            <div className="flex justify-between items-center py-2">
              <div className="text-xs text-zinc-400">{filename}</div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
              >
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
              </button>
            </div>
          )}
        </div>
        <div className="relative h-[600px] overflow-hidden">
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <SyntaxHighlighter
              language={activeLanguage}
              style={atomDark}
              customStyle={{
                margin: 0,
                padding: 0,
                background: "transparent",
                fontSize: "0.875rem", // text-sm equivalent
                overflowX: "hidden",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={true}
              lineProps={(lineNumber) => ({
                style: {
                  backgroundColor: activeHighlightLines.includes(lineNumber)
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
                  display: "block",
                  width: "100%",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                },
              })}
              PreTag="div"
            >
              {String(activeCode) + (showCursor ? "|" : "")}
            </SyntaxHighlighter>
          </div>
          {showCursor && (
            <style>{`
            pre code span:last-child {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}</style>
          )}
        </div>
      </div>
    </FollowerPointerCard>
  );
};

export default function StorySection() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const storyLines = [
    "// Our Story - MVP Works",
    "",
    "const ourStory = {",
    "  hardWork: {",
    "    description: 'Dedicated to excellence, we pour countless hours into every project, ensuring quality and precision.',",
    "    commitment: 'No shortcuts, no compromises - just results.'",
    "  },",
    "",
    "  teamStrength: {",
    "    expertise: 'A diverse team of skilled professionals',",
    "    collaboration: 'Working together to bring your vision to life',",
    "    innovation: 'Constantly learning and adapting to new technologies'",
    "  },",
    "",
    "  clientSuccess: {",
    "    satisfaction: '98% client satisfaction rate',",
    "    delivery: '500+ projects successfully delivered',",
    "    partnership: 'Building long-term relationships, not just projects'",
    "  },",
    "",
    "  startupJourney: {",
    "    vision: 'Born from a vision to bridge services, products, and freelancing',",
    "    mission: 'Empowering businesses to build faster and smarter',",
    "    growth: 'From startup to trusted partner in innovation'",
    "  }",
    "};",
    "",
    "console.log('Building the future, one project at a time...');",
  ];

  // Continuous typing animation loop
  useEffect(() => {
    let cancelled = false;

    async function typeAll() {
      const speed = 28;
      const lineDelay = 200;
      const restartDelay = 2000; // Delay before restarting

      while (!cancelled) {
        setDisplayedText("");
        setIsTyping(true);

        for (let i = 0; i < storyLines.length; i++) {
          if (cancelled) return;

          const line = storyLines[i];

          // empty line
          if (line === "") {
            setDisplayedText((p) => p + "\n");
            await wait(lineDelay);
            continue;
          }

          // type character by character
          for (let c = 0; c < line.length; c++) {
            if (cancelled) return;
            setDisplayedText((p) => p + line[c]);
            await wait(speed);
          }

          // after finishing the line
          setDisplayedText((p) => p + "\n");
          await wait(lineDelay);
        }

        setIsTyping(false);
        await wait(restartDelay);
      }
    }

    typeAll();

    return () => {
      cancelled = true;
    };
  }, []);

  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <CodeBlock
          language="javascript"
          filename="ourStory.js"
          code={displayedText}
          showCursor={isTyping}
        />
      </div>
    </section>
  );
}
