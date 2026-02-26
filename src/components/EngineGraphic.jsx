import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, ShieldCheck, Database, Zap, FileSearch } from 'lucide-react';

const KPIData = [
    {
        docType: "Vendor Master Agreement",
        id: "vma",
        kpis: [
            { label: "Liability Cap", value: "$3,000,000 Target", status: "compliant", icon: ShieldCheck },
            { label: "Governing Law", value: "Delaware", status: "compliant", icon: CheckCircle },
            { label: "Auto-Renewal", value: "Flagged (30d notice)", status: "warning", icon: AlertTriangle }
        ]
    },
    {
        docType: "Data Processing Addendum",
        id: "dpa",
        kpis: [
            { label: "Data Sub-processors", value: "Security Verified", status: "compliant", icon: Database },
            { label: "Audit Rights", value: "30 Days Notice", status: "compliant", icon: CheckCircle },
            { label: "Breach Notification", value: "72 Hours", status: "compliant", icon: Zap }
        ]
    },
    {
        docType: "Software License (SaaS)",
        id: "saas",
        kpis: [
            { label: "Uptime SLA", value: "99.99% Guaranteed", status: "compliant", icon: CheckCircle },
            { label: "Payment Terms", value: "Net 60", status: "warning", icon: AlertTriangle },
            { label: "IP Indemnification", value: "Uncapped", status: "compliant", icon: ShieldCheck }
        ]
    }
];

const docVariants = {
    initial: { x: -100, opacity: 0, scale: 0.9 },
    animate: {
        x: [-100, 0, 0, 250],
        opacity: [0, 1, 1, 0],
        scale: [0.9, 1, 1, 0.2],
        transition: { duration: 2.5, times: [0, 0.15, 0.75, 1], ease: "easeInOut" }
    }
};

const kpiVariants = {
    initial: { x: -30, opacity: 0, scale: 0.9 },
    animate: (index) => ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { delay: 2.5 + (index * 0.15), type: "spring", stiffness: 100, damping: 15 }
    }),
    exit: (index) => ({
        x: 40,
        opacity: 0,
        transition: { delay: (2 - index) * 0.05, duration: 0.3 }
    })
};

export const EngineGraphic = () => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase(p => (p + 1) % KPIData.length);
        }, 6000); // 6 second cycle
        return () => clearInterval(interval);
    }, []);

    const currentData = KPIData[phase];

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[500px] bg-[#FAF9F6] border border-stone-200 rounded-[2.5rem] shadow-[0_4px_40px_rgba(0,0,0,0.03)] overflow-hidden flex items-center justify-center my-16">
            {/* Background Grid Lines inside the graphic area */}
            <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M24 0H0v24h24V0z\" fill=\"none\"/%3E%3Cpath d=\"M24 1H1v23\" fill=\"none\" stroke=\"%23000000\" stroke-width=\"1\"/%3E%3C/svg%3E')" }} />

            {/* Connecting Wires (Static Background) */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <line x1="calc(50% - 250px)" y1="50%" x2="calc(50% - 60px)" y2="50%" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 6" className="opacity-20" />
                <line x1="calc(50% + 60px)" y1="50%" x2="calc(50% + 150px)" y2="50%" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 6" className="opacity-20" />

                {/* Active connecting wire (Right Out) */}
                <motion.line
                    key={`wire-${phase}`}
                    x1="calc(50% + 60px)" y1="50%"
                    x2="calc(50% + 160px)" y2="50%"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
                />
            </svg>

            {/* Input Document (Left) */}
            <motion.div
                key={`doc-${currentData.id}`}
                className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                style={{ left: 'calc(50% - 250px)' }}
                variants={docVariants}
                initial="initial"
                animate="animate"
            >
                <div className="bg-white border border-stone-200 w-36 h-48 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col p-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--color-primary)]" />
                    <div className="flex gap-3 items-center mb-6 mt-2">
                        <FileText className="w-6 h-6 text-stone-400" />
                        <div className="w-full h-2.5 bg-stone-200 rounded-full" />
                    </div>
                    <div className="space-y-3">
                        <div className="w-full h-2 bg-stone-100 rounded-full" />
                        <div className="w-5/6 h-2 bg-stone-100 rounded-full" />
                        <div className="w-full h-2 bg-stone-100 rounded-full" />
                        <div className="w-2/3 h-2 bg-stone-100 rounded-full" />
                        <div className="w-4/5 h-2 bg-stone-100 rounded-full" />
                    </div>
                    {/* Scanning line overlay */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                <div className="mt-4 bg-[#3F3F3A] text-white text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md flex items-center gap-2 tracking-wide uppercase">
                    <FileSearch className="w-3.5 h-3.5" />
                    {currentData.docType}
                </div>
            </motion.div>

            {/* The Engine (Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                {/* Engine processing burst */}
                <motion.div
                    key={`burst-${phase}`}
                    className="absolute inset-0 bg-[var(--color-primary)] rounded-[2rem] -z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [0.8, 1.6, 2.2], opacity: [0, 0.25, 0] }}
                    transition={{ delay: 2.3, duration: 1.2, ease: "easeOut" }}
                />

                {/* Continuous Pulse */}
                <motion.div
                    className="absolute inset-[-16px] rounded-[2.5rem] border border-stone-200 bg-white/40 backdrop-blur-sm -z-10"
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="bg-white p-7 rounded-[2rem] border border-stone-200 shadow-2xl flex items-center justify-center w-[120px] h-[120px] relative">
                    <img src="/logo.png" className="w-[68px] h-[68px] object-contain relative z-10" alt="Engine" />
                </div>
            </div>

            {/* Output KPIs (Right) */}
            <AnimatePresence>
                <motion.div
                    key={currentData.id}
                    className="absolute top-1/2 -translate-y-1/2 w-[300px] md:w-[340px] flex flex-col gap-3.5 z-20"
                    style={{ left: 'calc(50% + 140px)' }}
                >
                    {currentData.kpis.map((kpi, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={kpiVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="bg-white border border-stone-200 p-4 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex items-center justify-between gap-4 w-full relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 bottom-0 left-0 w-1 ${kpi.status === 'compliant' ? 'bg-green-500' : 'bg-amber-500'}`} />

                            <div className="flex items-center gap-3.5 pl-2">
                                <div className={`p-2.5 rounded-xl ${kpi.status === 'compliant' ? 'bg-green-50' : 'bg-amber-50'}`}>
                                    <kpi.icon className={`w-4 h-4 ${kpi.status === 'compliant' ? 'text-green-600' : 'text-amber-600'}`} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">{kpi.label}</span>
                                    <span className="text-sm font-bold text-stone-800 leading-tight">{kpi.value}</span>
                                </div>
                            </div>

                            <div>
                                <span className={`text-[11px] px-2.5 py-1 rounded-lg font-bold uppercase tracking-wide ${kpi.status === 'compliant' ? 'bg-green-100 text-green-700' : 'bg-amber-100/80 text-amber-700'}`}>
                                    {kpi.status === 'compliant' ? 'Verified' : 'Flagged'}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
