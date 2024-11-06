
// export default function Button() {
//   return (
//     <div>index</div>
//   )
// }


// function Button() {
//   return (
//     <div>index</div>
//   )
// }

// export default Button
// nama function 
const Button = ({ text }: { text: string }) => {
  return <button className="bg-blue-500 text-white p-2 rounded-md">{text}</button>
}

export default Button
