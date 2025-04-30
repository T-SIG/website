"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { BriefcaseBusiness } from "lucide-react"
import { cn } from "../../../lib/utils"
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si"
export default function Roadmap() {
  const modules = [
    {
      id: "1",
      title: "HTML Fundamentals",
      src : "https://svgl.app/library/html5.svg",
      description: "Learn the building blocks of the web: HTML tags, semantic markup, and document structure.",
    },
    {
      id: "2",
      src : "https://svgl.app/library/css.svg",
      title: "CSS Styling",
      description: "Master cascading style sheets to create beautiful, responsive layouts and designs.",
    },
    {
      id: "3",
      src : "https://svgl.app/library/javascript.svg",
      title: "JavaScript",
      description: "Understand core JavaScript concepts including variables, functions, and DOM manipulation.",
    },
    {
      id: "4",
      src : "https://svgl.app/library/tailwindcss.svg",
      title: "Tailwindcss",
      description: "Streamline your UI design with a utility-first CSS framework. Learn how to rapidly prototype and build custom designs.",
    },
    {
      id: "5",
      src : "https://svgl.app/library/react_light.svg",
      title: "React Framework",
      description: "Build interactive UIs with components, state management, and the virtual DOM.",
    },
    {
      id : "6",
      Icon : <BriefcaseBusiness/>,
      title : "Projects",
      description : "Apply your knowledge and solidify your understanding by developing practical, real-world projects."
    }
  ]
  const [activeModuleIndex, setActiveModuleIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)

  // Update progress based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollTop = window.scrollY - container.offsetTop
      const scrollHeight = container.scrollHeight - window.innerHeight

      // Calculate progress percentage
      const progress = Math.max(0, Math.min(100, (scrollTop / scrollHeight) * 100))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`min-h-screen w-full relative font-sans bg-black`}>
      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        <div ref={containerRef} className="relative">
          {/* Animated progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800/50 transform -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue-500"
              style={{ height: `${scrollProgress}%` }}
              initial={{ height: "0%" }}
              animate={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Modules container */}
          <div className="space-y-24 relative py-24">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
                isActive={index === activeModuleIndex}
                setActiveModuleIndex={setActiveModuleIndex}
                totalModules={modules.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


function ModuleCard({ module, isActive,index, setActiveModuleIndex }) {
  const cardRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When this card is in view, set it as active
        if (entry.isIntersecting) {
          setActiveModuleIndex(index)
        }
      },
      {
        threshold: 0.5, // Card is considered visible when 50% is in view
        rootMargin: "-10% 0px", // Adjust this to control when the card becomes active
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index, setActiveModuleIndex])

  const isEven = index % 2 === 0
const {Icon} = module
  return (
    <div ref={cardRef} className="h-[50vh] flex items-center justify-center snap-center">
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            className={cn("relative flex items-center", isEven ? "md:flex-row" : "md:flex-row-reverse", "flex-col")}
          >
            <motion.div
              className={cn("w-full md:w-[calc(100%-4rem)] overflow-hidden", "rounded-xl shadow-xl")}
              initial={{ x: isEven ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-zinc-800/40 backdrop-blur-md border border-zinc-800/30 rounded-xl p-6">
                <div className="flex justify-start gap-2 items-center">
                   {/* {module.src ? <img src= { module.src} className={`aspect-square w-8 rounded-md`}/> : <module.Icon/>} */}
                  <h3 className="text-2xl font-bold text-blue-400">{module.title}</h3>
                </div>
                <p className="mt-4 text-gray-100 text-lg leading-relaxed max-w-xl">{module.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
