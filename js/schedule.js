// EDIT THIS FILE to update the programme. The website builds the schedule from it.
// track: "amr" | "oral" | "genomics" | "onehealth" | "general"
// type (optional): "break" for tea/lunch rows
// NOTE: This is a DRAFT placeholder programme. Replace titles, times and speakers with the official ones.

window.SCHEDULE = [
  {
    day: "Day 1", date: "Tue, 24 Nov 2026", title: "Opening & Antimicrobial Resistance",
    slots: [
      { time: "09:00 – 10:00", title: "Registration & Welcome Tea", track: "general", type: "break" },
      { time: "10:00 – 10:45", title: "Inaugural Session", desc: "Welcome address, introduction to RESISFORCE 2026 and the satellite meeting.", track: "general" },
      { time: "10:45 – 11:30", title: "Keynote: The Global Burden of Antimicrobial Resistance", desc: "Speaker to be announced.", track: "amr" },
      { time: "11:30 – 11:50", title: "Tea / Coffee Break", track: "general", type: "break" },
      { time: "11:50 – 13:00", title: "Session 1: Mechanisms & Surveillance of AMR", desc: "Talks on resistance mechanisms, hospital and community surveillance.", track: "amr" },
      { time: "13:00 – 14:00", title: "Lunch", track: "general", type: "break" },
      { time: "14:00 – 15:30", title: "Session 2: New Strategies to Counter Resistant Pathogens", desc: "Novel therapeutics, phage approaches and stewardship.", track: "amr" },
      { time: "15:30 – 17:00", title: "Poster Session & Networking", track: "general" }
    ]
  },
  {
    day: "Day 2", date: "Wed, 25 Nov 2026", title: "Oral Microbiome, Biofilms & Genomics",
    slots: [
      { time: "09:30 – 10:15", title: "Keynote: Biofilms in Health and Disease", desc: "Speaker to be announced.", track: "oral" },
      { time: "10:15 – 11:30", title: "Session 3: The Oral Microbiome and Systemic Health", desc: "Oral microbial communities and links with systemic conditions.", track: "oral" },
      { time: "11:30 – 11:50", title: "Tea / Coffee Break", track: "general", type: "break" },
      { time: "11:50 – 13:00", title: "Session 4: Biofilm Biology & Control", desc: "Formation, tolerance and anti-biofilm approaches.", track: "oral" },
      { time: "13:00 – 14:00", title: "Lunch", track: "general", type: "break" },
      { time: "14:00 – 15:30", title: "Session 5: Genomics & Computational Approaches", desc: "Sequencing, metagenomics, bioinformatics, AI/ML for microbial data.", track: "genomics" },
      { time: "15:30 – 17:00", title: "Workshop / Panel: Data-driven Microbiology", track: "genomics" }
    ]
  },
  {
    day: "Day 3", date: "Thu, 26 Nov 2026", title: "One Health & Closing",
    slots: [
      { time: "09:30 – 10:15", title: "Keynote: One Health Approaches to Safeguarding Health", desc: "Speaker to be announced.", track: "onehealth" },
      { time: "10:15 – 11:30", title: "Session 6: One Health & Global Health Policy", desc: "Human–animal–environment interface, policy and collaboration.", track: "onehealth" },
      { time: "11:30 – 11:50", title: "Tea / Coffee Break", track: "general", type: "break" },
      { time: "11:50 – 13:00", title: "Session 7: Integrative Approaches: From Bench to Community", track: "onehealth" },
      { time: "13:00 – 14:00", title: "Lunch", track: "general", type: "break" },
      { time: "14:00 – 15:00", title: "Panel: Outsmarting Microbes: The Road Ahead", track: "general" },
      { time: "15:00 – 16:00", title: "Awards, Valedictory & Vote of Thanks", track: "general" }
    ]
  }
];

window.TRACKS = {
  amr: "Antimicrobial Resistance",
  oral: "Oral Microbiome & Biofilms",
  genomics: "Genomics & Computation",
  onehealth: "One Health & Global Health",
  general: "General"
};
