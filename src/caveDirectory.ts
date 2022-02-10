export interface CaveNode {
  caveId: string;
  adjacentCaverns: string[];
}

// export const caveDirectory = {
//   Juliet: { caveId: "Juliet", adjacentCaverns: ["Delta", "Oscar", "Kilo"] },
//   Kilo: { caveId: "Kilo", adjacentCaverns: ["Bravo", "Lima"] },
//   Bravo: { caveId: "Bravo", adjacentCaverns: [] },
//   Lima: { caveId: "Lima", adjacentCaverns: ["Alpha"] },
//   Delta: { caveId: "Delta", adjacentCaverns: [] },
//   Oscar: { caveId: "Oscar", adjacentCaverns: ["Sierra", "Uniform", "Hotel"] },
//   Sierra: { caveId: "Sierra", adjacentCaverns: ["Delta"] },
//   Hotel: { caveId: "Hotel", adjacentCaverns: [] },
//   Uniform: { caveId: "Uniform", adjacentCaverns: ["Hotel", "Romeo"] },
//   India: { caveId: "India", adjacentCaverns: ["Alpha"] },
//   Alpha: { caveId: "Alpha", adjacentCaverns: ["Foxtrot", "Mike"] },
//   Foxtrot: { caveId: "Foxtrot", adjacentCaverns: ["India"] },
//   Mike: { caveId: "Mike", adjacentCaverns: [] },
//   Romeo: { caveId: "Romeo", adjacentCaverns: ["Papa", "Golf", "November"] },
//   Papa: { caveId: "Papa", adjacentCaverns: [] },
//   Golf: { caveId: "Golf", adjacentCaverns: [] },
//   Quebec: { caveId: "Quebec", adjacentCaverns: ["Romeo"] },
//   November: { caveId: "November", adjacentCaverns: ["Quebec", "Echo"] },
//   Echo: { caveId: "Echo", adjacentCaverns: ["Charlie", "Yankee"] },
//   Charlie: { caveId: "Charlie", adjacentCaverns: [] },
//   Yankee: { caveId: "Yankee", adjacentCaverns: [] },
// };

export const caveDirectory = [
  { caveId: "Juliet", adjacentCaverns: ["Delta", "Oscar", "Kilo"] },
  { caveId: "Kilo", adjacentCaverns: ["Bravo", "Lima"] },
  { caveId: "Bravo", adjacentCaverns: [] },
  { caveId: "Lima", adjacentCaverns: ["Alpha"] },
  { caveId: "Delta", adjacentCaverns: [] },
  { caveId: "Oscar", adjacentCaverns: ["Sierra", "Uniform", "Hotel"] },
  { caveId: "Sierra", adjacentCaverns: ["Delta"] },
  { caveId: "Hotel", adjacentCaverns: [] },
  { caveId: "Uniform", adjacentCaverns: ["Hotel", "Romeo"] },
  { caveId: "India", adjacentCaverns: ["Alpha"] },
  { caveId: "Alpha", adjacentCaverns: ["Foxtrot", "Mike"] },
  { caveId: "Foxtrot", adjacentCaverns: ["India"] },
  { caveId: "Mike", adjacentCaverns: [] },
  { caveId: "Romeo", adjacentCaverns: ["Papa", "Golf", "November"] },
  { caveId: "Papa", adjacentCaverns: [] },
  { caveId: "Golf", adjacentCaverns: [] },
  { caveId: "Quebec", adjacentCaverns: ["Romeo"] },
  { caveId: "November", adjacentCaverns: ["Quebec", "Echo"] },
  { caveId: "Echo", adjacentCaverns: ["Charlie", "Yankee"] },
  { caveId: "Charlie", adjacentCaverns: [] },
  { caveId: "Yankee", adjacentCaverns: [] },
];
