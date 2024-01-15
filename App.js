//nested createElement 

const heading = React.createElement(
    "h1",
    {
        id:"heading",
        style:{
            color: "red",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center"
        },
        className:"heading"

    },
    "This is heading from heading"
);

const heading1 = React.createElement (
    "h1",
    {
        id : "title"
    },
    "Heading1 from createElement"
);

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading, heading1]
);


//Create root using createRoot

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element under the root
root.render(container);