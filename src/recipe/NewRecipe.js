// import React from "react";

// function NewRecipe() {
//   const [name, setName] = React.useState("");
//   const [steps, setSteps] = React.useState([" "]);

//   // const stepss = [{ value: "alaa", confirmed: true }];
//   const stepLength = steps.length;

//   const handleStepsChange = (event) => (index) => {
//     const newSteps = steps;
//     newSteps[index] = event.target.value;
//     setSteps(newSteps);
//   };

//   // const addStep = (index) => {
//   //   const newSteps = [...steps, " "];
//   //   setSteps(newSteps);
//   // };

//   return (
//     <div>
//       <form>
//         <label>Name: </label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//         <label>Steps</label>
//         {[...Array(stepLength)].map((x, i) => (
//           <>
//             <input
//               key={i}
//               type="text"
//               value={steps[x]}
//               onChange={handleStepsChange(i)}
//             ></input>
//             <button onClick={addStep(i)}>+</button>
//           </>
//         ))}
//       </form>
//     </div>
//   );
// }

// export default NewRecipe;
