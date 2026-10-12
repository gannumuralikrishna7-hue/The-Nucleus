"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import {
  Mail, HardDrive, Table, ClipboardList, Calendar, Video,
  MessageCircle, Building2, Cloud, BarChart3,
} from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const tools = [
  { name: "Google Mail", icon: <Mail size={20} /> },
  { name: "Google Drive", icon: <HardDrive size={20} /> },
  { name: "Google Sheets", icon: <Table size={20} /> },
  { name: "Google Forms", icon: <ClipboardList size={20} /> },
  { name: "Google Calendar", icon: <Calendar size={20} /> },
  { name: "Google Meet", icon: <Video size={20} /> },
  { name: "WhatsApp", icon: <MessageCircle size={20} /> },
  { name: "HubSpot", icon: <Building2 size={20} /> },
  { name: "Salesforce", icon: <Cloud size={20} /> },
  { name: "Apache Superset", icon: <BarChart3 size={20} /> },
];

const ToolItem = ({ name, icon }: { name: string; icon: ReactNode }) => (
  <motion.div
    variants={staggerItem}
    className="flex flex-col items-center gap-3 px-4 py-6 rounded-xl border border-[#E6DFD3] bg-[#FBF9F6] transition-colors duration-200 hover:border-[#C45C1A]/40 group"
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#F3EEE5] text-[#4A4238] group-hover:bg-[#F5E3D3] group-hover:text-[#C45C1A] transition-colors duration-200">
      {icon}
    </div>
    <span className="text-xs font-medium text-[#4A4238] text-center leading-tight">{name}</span>
  </motion.div>
);

export function LogoMarquee() {
  return (
    <section id="integrations" className="relative py-24 bg-[#F3EEE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display mb-12 max-w-xl text-[#14110F]"
          style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          Works with the tools your team already loves.
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {tools.map((tool) => (
            <ToolItem key={tool.name} {...tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
