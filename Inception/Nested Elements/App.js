/*
<div id= "Parent">
    <div id= "child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id= "child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

ReactElement(object) => HTML(Browser Understands)
*/
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),]
);

//JSX Need !........

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// NOTE:- We can use react in any portion of the code like- root, sidebar,  navbar and so on.....