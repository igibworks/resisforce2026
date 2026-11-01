// EDIT THIS FILE to update the programme. The website builds the schedule from it.
// Source: "Resisforce Satellite Meeting Programme" (official).
//
// Each day has "items". An item is either:
//   { kind: "row", time, title, desc?, type?: "break" }                      -> a simple timed row
//   { kind: "session", label, time, title, focus?, chair?, rows: [ ... ] }   -> a session block
// Session rows: { time, slot, speaker?, affil?, type?: "break" | "panel" }

window.MEETING = {
  subtitle: "Integrative Approaches in One Health, AMR and Wellness using Omics",
  venue: "CSIR-Institute of Genomics and Integrative Biology (IGIB), New Delhi"
};

window.OVERVIEW = [
  { n: 1, theme: "One Health and AMR: Tracking Resistance across Hosts, Microbiomes and Environments",
    speakers: "U. R. Dahle, M. Al-Haroni", chair: "Dr. Sharmila Mande, Dr. Achal Dhariwal" },
  { n: 2, theme: "Microbial Communities in Action: Signalling, Biofilms and the Emergence of Resistance",
    speakers: "F. C. Petersen, A. P. Ricomini Filho", chair: "Prof. Cínthia Tabchoury, Dr. Bhupesh Taneja" },
  { n: 3, theme: "Decoding Data in AMR: AI, Bioinformatics and Computational Genomics",
    speakers: "J. Narayan, B. Taneja", chair: "Prof. Sharmila Mande, Dr. Rajesh Pandey" },
  { n: 4, theme: "Omics for Wellness: Host–Pathogen Interplay and Pathogen-Driven Disease",
    speakers: "R. Pandey, B. Nicolau", chair: "Dr. Jitendra Narayan, Dr. Achal Dhariwal" }
];

window.SCHEDULE = [
  {
    day: "Day 1", date: "Tue, 24 Nov 2026", title: "Scientific Sessions",
    items: [
      {
        kind: "session", label: "Opening Session", time: "9:30 – 9:45 AM", title: "Opening Session",
        rows: [
          { time: "9:30 – 9:35", slot: "Welcome remarks", speaker: "Director, CSIR-IGIB" },
          { time: "9:35 – 9:42", slot: "Opening remarks", speaker: "Prof. Sharmila Mande" },
          { time: "9:42 – 9:45", slot: "Introduction to the programme", speaker: "Dr. Jitendra Narayan (Coordinator)" }
        ]
      },
      {
        kind: "session", label: "Session 1", time: "9:45 – 11:00 AM",
        title: "One Health and AMR: Tracking Resistance across Hosts, Microbiomes and Environments",
        focus: "How resistance emerges, evolves and moves between human, animal and environmental reservoirs, studied through comparative genomics, evolutionary biology, surveillance and resistome analysis.",
        chair: "Dr. Sharmila Mande and Dr. Achal Dhariwal (University of Oslo)",
        rows: [
          { time: "9:45 – 10:10", slot: "Faculty Talk 1", speaker: "Prof. Ulf Reidar Dahle", affil: "Norwegian Institute of Public Health, Norway" },
          { time: "10:10 – 10:35", slot: "Faculty Talk 2", speaker: "Prof. Mohammed Al-Haroni", affil: "University of Oslo, Norway" },
          { time: "10:35 – 10:45", slot: "Student Talk 1", speaker: "Student speaker (TBC)", affil: "JN Lab" },
          { time: "10:45 – 10:55", slot: "Student Talk 2", speaker: "Student speaker (TBC)", affil: "BT Lab" },
          { time: "10:55 – 11:00", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "11:00 – 11:30", slot: "TEA BREAK", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 2", time: "11:30 AM – 1:00 PM",
        title: "Microbial Communities in Action: Signalling, Biofilms and the Emergence of Resistance",
        focus: "How bacteria and fungi communicate, exchange genes and build biofilms, and how these community behaviours drive tolerance, persistence and resistance.",
        chair: "Prof. Cínthia Pereira Machado Tabchoury (University of Campinas, Brazil) and Dr. Bhupesh Taneja",
        rows: [
          { time: "11:30 – 11:55", slot: "Faculty Talk 3", speaker: "Prof. Fernanda Cristina Petersen", affil: "University of Oslo, Norway" },
          { time: "11:55 – 12:20", slot: "Faculty Talk 4", speaker: "Prof. Antonio Pedro Ricomini Filho", affil: "University of Campinas, Brazil" },
          { time: "12:20 – 12:30", slot: "Student Talk 3", speaker: "Student speaker (TBC)", affil: "VR Lab" },
          { time: "12:30 – 12:40", slot: "Student Talk 4", speaker: "Student speaker (TBC)", affil: "KC Lab" },
          { time: "12:40 – 1:00", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "1:00 – 2:00", slot: "LUNCH", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 3", time: "2:00 – 3:30 PM",
        title: "Decoding Data in AMR: AI, Bioinformatics and Computational Genomics",
        focus: "Turning sequence and structural data into biological insight: AI and machine-learning models to predict resistance, comparative and evolutionary genomics, genome informatics and the molecular architecture of resistance.",
        chair: "Prof. Sharmila Mande (TCS; Visiting Professor, IISER Thiruvananthapuram) and Dr. Rajesh Pandey",
        rows: [
          { time: "2:00 – 2:25", slot: "Faculty Talk 5", speaker: "Dr. Jitendra Narayan", affil: "CSIR-IGIB, New Delhi" },
          { time: "2:25 – 2:50", slot: "Faculty Talk 6", speaker: "Dr. Bhupesh Taneja", affil: "CSIR-IGIB, New Delhi" },
          { time: "2:50 – 3:00", slot: "Student Talk 5", speaker: "Student speaker (TBC)", affil: "JN Lab" },
          { time: "3:00 – 3:10", slot: "Student Talk 6", speaker: "Student speaker (TBC)", affil: "BT Lab" },
          { time: "3:10 – 3:20", slot: "Student Talk 7", speaker: "Student speaker (TBC)", affil: "RS Lab" },
          { time: "3:20 – 3:30", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "3:30 – 4:00", slot: "TEA BREAK", type: "break" }
        ]
      },
      {
        kind: "session", label: "Session 4", time: "4:00 – 5:30 PM",
        title: "Omics for Wellness: Host–Pathogen Interplay and Pathogen-Driven Disease",
        focus: "Integrating host and microbial genomics and transcriptomics to understand infection outcomes, pathogen-driven disease across the life course, and approaches beyond conventional antibiotics.",
        chair: "Dr. Jitendra Narayan and Dr. Achal Dhariwal (University of Oslo)",
        rows: [
          { time: "4:00 – 4:25", slot: "Faculty Talk 7", speaker: "Dr. Rajesh Pandey", affil: "CSIR-IGIB, New Delhi" },
          { time: "4:25 – 4:50", slot: "Faculty Talk 8", speaker: "Prof. Belinda Nicolau", affil: "McGill University, Canada" },
          { time: "4:50 – 5:00", slot: "Student Talk 8", speaker: "Student speaker (TBC)", affil: "RP Lab" },
          { time: "5:00 – 5:10", slot: "Student Talk 9", speaker: "Student speaker (TBC)", affil: "RP Lab / DC Lab" },
          { time: "5:10 – 5:20", slot: "Student Talk 10", speaker: "Amal (TBC)" },
          { time: "5:20 – 5:30", slot: "Panel discussion", speaker: "Speakers of the session with the Chair", type: "panel" },
          { time: "5:30 PM", slot: "CONCLUSION OF DAY 1", type: "break" }
        ]
      }
    ]
  },
  {
    day: "Day 2", date: "Wed, 25 Nov 2026", title: "Brainstorming and Networking",
    subtitle: "Theme: Building an Integrative Omics Framework for One Health, AMR and Wellness",
    items: [
      { kind: "row", time: "9:30 – 9:45", title: "Recap of key questions emerging from Day 1" },
      { kind: "row", time: "9:45 – 10:30", title: "Breakout Session 1", desc: "One Health and microbial communities: reservoirs, transmission and persistence (Sessions 1 & 2)" },
      { kind: "row", time: "10:30 – 11:15", title: "Breakout Session 2", desc: "AI, decoding AMR data and host omics: shared pipelines, prediction models, datasets and integration (Sessions 3 & 4)" },
      { kind: "row", time: "11:15 – 11:30", title: "Tea break", type: "break" },
      { kind: "row", time: "11:30 – 12:30", title: "Joint discussion", desc: "Shared datasets, complementary expertise and possible joint projects / student exchanges" },
      { kind: "row", time: "12:30 – 1:00", title: "Summary of action points" },
      { kind: "row", time: "1:00 – 2:00", title: "Lunch", type: "break" },
      { kind: "row", time: "2:00 onwards", title: "Delhi tour and informal networking" }
    ]
  },
  {
    day: "Day 3", date: "Thu, 26 Nov 2026", title: "Closing Session and Future Plans",
    items: [
      { kind: "row", time: "9:30 – 10:15", title: "Summary of Days 1 and 2 by the session chairs" },
      { kind: "row", time: "10:15 – 11:00", title: "Future plans", desc: "Collaborative research, training and follow-up activities" },
      { kind: "row", time: "11:00 – 11:15", title: "Tea break", type: "break" },
      { kind: "row", time: "11:15 – 11:45", title: "Closing remarks and vote of thanks" },
      { kind: "row", time: "12:30", title: "Departure for the airport" }
    ]
  }
];
