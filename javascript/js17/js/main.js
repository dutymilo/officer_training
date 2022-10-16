// Objects
// key-value pairs in curly braces
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

// destructuring objects

// const { vocals, guitar, bass, drums } = band;

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
