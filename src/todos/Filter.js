import React from "react";

function Filter({ onClick }) {
  console.log("Filter called");
  return (
    <section>
      <button onClick={() => onClick("all")}>All</button>
      <button onClick={() => onClick("completed")}>Completed</button>
      <button onClick={() => onClick("incomplete")}>Incomplete</button>
    </section>
  );
}

export default React.memo(Filter);
