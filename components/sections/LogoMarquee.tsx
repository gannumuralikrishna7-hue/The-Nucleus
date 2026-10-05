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
    className="flex flex-col items-center gap-3 px-4 py-6 rounded-xl border border-[#E2E8F0] bg-white transition-all duration-200 hover:border-[#F97316]/40 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] group"
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#F8FAFC] text-[#475569] group-hover:bg-[#FFF1E7] group-hover:text-[#F97316] transition-colors duration-200">
      {icon}
    </div>
    <span className="text-xs font-medium text-[#475569] text-center leading-tight">{name}</span>
  </motion.div>
);

export function LogoMarquee() {
  return (
    <section id="integrations" className="relative py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-sm font-semibold uppercase tracking-widest text-[#F97316] mb-4"
          >
            Integrations
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Works with the tools your team already loves
          </motion.h2>
        </div>

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
