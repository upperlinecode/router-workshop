export interface CaveNode {
  caveId: string;
  adjacentCaverns: string[];
}

export const caveDirectory = [
  { caveId: "juliet", adjacentCaverns: ["kilo", "delta", "oscar"] },
  { caveId: "kilo", adjacentCaverns: ["bravo", "lima"] },
  { caveId: "bravo", adjacentCaverns: [] },
  { caveId: "lima", adjacentCaverns: ["alpha"] },
  { caveId: "delta", adjacentCaverns: [] },
  { caveId: "oscar", adjacentCaverns: ["sierra", "uniform", "hotel"] },
  { caveId: "sierra", adjacentCaverns: ["delta"] },
  { caveId: "hotel", adjacentCaverns: [] },
  { caveId: "uniform", adjacentCaverns: ["hotel", "romeo"] },
  { caveId: "india", adjacentCaverns: ["alpha"] },
  { caveId: "alpha", adjacentCaverns: ["foxtrot", "mike"] },
  { caveId: "foxtrot", adjacentCaverns: ["india"] },
  { caveId: "mike", adjacentCaverns: [] },
  { caveId: "romeo", adjacentCaverns: ["papa", "golf", "november"] },
  { caveId: "papa", adjacentCaverns: [] },
  { caveId: "golf", adjacentCaverns: [] },
  { caveId: "quebec", adjacentCaverns: ["romeo"] },
  { caveId: "november", adjacentCaverns: ["quebec", "echo"] },
  { caveId: "echo", adjacentCaverns: ["charlie", "yankee"] },
  { caveId: "charlie", adjacentCaverns: [] },
  { caveId: "yankee", adjacentCaverns: [] },
];
