import React from "react";
import ReactDOM  from "react-dom"; 

//Q. nested createElement 

// const header = React.createElement(
//     "div",
//     {
//         id:"header",
//         className:"title"
//     },
//     [
//         React.createElement(
//             "h1",
//             {
//                 id:"title"
//             },
//             "This is h1"
//         ),
//         React.createElement(
//             "h2",
//             {
//                 id:"title"
//             },
//             "this is h2"
//         ),
//         React.createElement(
//             "h3",
//             {
//                 id:"title"
//             },
//             "this is h3"
//         )
//     ]
// );



//Q: Create the same element using JSX

// const header = (
//     <div className="Title" key="title">
//         <h1 id="h1">This is h1</h1>
//         <h2 id="h2">This is h2</h2>
//         <h3 id="h3">This is h3</h3>
//     </div>
// );



//Q. Create functional component of the same

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//             <h1 id="h1">This is h1 tag</h1>
//             <h2 id="h2">This is h2 tag</h2>
//             <h3 id="h3">This is h3 tag</h3>
//         </div>
//     );
// };



//Q. Pass the attribute in the tag of jsx

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//             <h1 style={{color: "orange"}} id="h1">This is h1 tag</h1>
//             <h2 style={{color: "gray"}} id="h2">This is h2 tag</h2>
//             <h3 style={{color: "green"}} id="h3">This is h3 tag</h3>
//         </div>
//     );
// };


//Q: Composition of Component (Add a component inside another)

// const AnotherComponent = function() {
//     return <h2 style={{color: "magenta"}} className="H2">This is a another component</h2>
// }

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//             <h1 style={{color: "orange"}} id="h1">This is h1 tag</h1>
//             <h2 style={{color: "gray"}} id="h2">This is h2 tag</h2>
//             <AnotherComponent/>
//             <h3 style={{color: "green"}} id="h3">This is h3 tag</h3>
//         </div>
//     );
// };


//Q. Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

const element = <h1>This is a React element</h1>   //titleelement

const TitleElement = () => {
    return (
        <h1 className="Title">This is a Title element</h1>
    );
};

const Header = () => {
    return (
        <div className="Title" key="title"> 
            {/*This is a TitleElement*/}
            {element}

            <h1 className="h1">This is a h1 tag</h1>

            {/*This is a Title Component*/}
            <TitleElement/>

            <h2 className="h2">This is a h2 tag</h2>

            <TitleElement></TitleElement>

            <h3 style={{ color: "green" }} key="h3"> This is h3 tag </h3>

        </div>
            
    )
}



//Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element under the root
root.render(Header());