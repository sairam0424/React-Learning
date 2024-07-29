// const heading = React.createElement("h1",{id:"header"},"Hello World From React");


const parent = React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child"},[

    React.createElement("h1",{id:"child1"},"I am Child 1"),

    React.createElement("h1",{id:"child2"},"I am child 2")]),

    React.createElement("div",{id:"NextChild"},[

        React.createElement("h1",{id:"child1"},"I am Nextchild1"),

        React.createElement("h1",{id:"child2"},"I am Nextchild2")
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

