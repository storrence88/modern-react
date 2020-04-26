function helpful() {
  console.log('I did a super helpful thing!');
}

function sort() {
  console.log('All sorted!');
}

function sing() {
  console.log('La la la!');
}

// Used to export ONE default function
// export default helpful;

// If we want to export more than one,
// We have to specify them like below
export { helpful, sort, sing };
