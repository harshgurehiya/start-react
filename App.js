{
  /* <div id="parent">
    <div id="child">
        <h1>I am H1</h1>
        <h2>I am H2</h2>
    </div>
    <div id="child">
        <h1>I am H1</h1>
        <h2>I am H2</h2>
    </div>
</div> */
}

const nested = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1."),
    React.createElement("h2", {}, "I am H2."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1."),
    React.createElement("h2", {}, "I am H2."),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React!"
// );
console.log(nested); //object

const root = ReactDOM.createRoot(document.getElementById("root")); // all react code will run here.

root.render(nested);
