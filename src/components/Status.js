export default function Status({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀🚀🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  let percentage = 0;
  // if (numPacked !== 0) {
  //   percentage = Math.round((numPacked / numItems) * 100);
  // }
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing!!! Ready to go ... ✈️✈️✈️"
          : `🧳 You have ${numItems} items on your list, and you a already packed ${numPacked} items, at ${percentage}%`}
      </em>
    </footer>
  );
}
