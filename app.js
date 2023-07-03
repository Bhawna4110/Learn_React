const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hey i am the heading one "),
React.createElement("h1",{},"Hey i am the heading two")]
));
React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hey i am the heading one "),
React.createElement("h1",{},"Hey i am the heading two")]
));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
