/* Synthetic demo data — no real student responses or names */
const ASSESSMENT_DEMO = {
  meta: {
    unit: "Quadratic Functions",
    course: "Algebra II",
    assessment: "Unit 4 Test",
    totalPoints: 100,
    sanitized: true
  },
  objectives: [
    { id: "O1", text: "Graph parabolas from vertex and standard form", weight: 20 },
    { id: "O2", text: "Find roots using factoring and the quadratic formula", weight: 25 },
    { id: "O3", text: "Model real-world problems with quadratics", weight: 20 },
    { id: "O4", text: "Compare transformations of the parent function", weight: 15 },
    { id: "O5", text: "Analyze domain and range", weight: 10 },
    { id: "O6", text: "Solve systems with one linear and one quadratic equation", weight: 10 }
  ],
  sections: [
    { id: "S1", name: "Multiple choice (12 items)", points: 24, mapsTo: ["O1", "O2", "O4"] },
    { id: "S2", name: "Vocabulary & definitions", points: 16, mapsTo: [] },
    { id: "S3", name: "Graphing (3 problems)", points: 36, mapsTo: ["O1", "O4"] },
    { id: "S4", name: "Word problem — projectile motion", points: 14, mapsTo: ["O3"] },
    { id: "S5", name: "Free response — systems", points: 10, mapsTo: ["O6"] }
  ],
  alignment: [
    { objective: "O1", label: "Graph parabolas", covered: true, points: 48 },
    { objective: "O2", label: "Find roots", covered: true, points: 8 },
    { objective: "O3", label: "Real-world models", covered: true, points: 14 },
    { objective: "O4", label: "Transformations", covered: true, points: 36 },
    { objective: "O5", label: "Domain & range", covered: false, points: 0 },
    { objective: "O6", label: "Linear-quadratic systems", covered: true, points: 10 }
  ],
  issues: [
    { severity: "high", text: "Objective O5 (domain & range) has zero assessment items." },
    { severity: "high", text: "Section S2 (vocabulary) maps to no unit objective — 16% of the grade." },
    { severity: "medium", text: "Section S3 is 36% of total points — overweighted vs. stated objective weights." },
    { severity: "medium", text: "O2 (factoring & formula) only lightly covered in the MC block." },
    { severity: "low", text: "Consider balancing multiple choice vs. open response for fairness." }
  ]
};
