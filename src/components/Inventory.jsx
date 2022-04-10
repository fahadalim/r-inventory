import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:10,
  });
    // Create add and remove functions here that changes the
    // state.
    if (inv.books < 0) {
      setInv({
        books: 0,
        notebooks: inv.notebooks,
        pens: inv.pens,
        inkpens: inv.inkpens,
      });
    }
      if (inv.notebooks < 0) {
        setInv({
          books: inv.books,
          notebooks: 0,
          pens: inv.pens,
          inkpens: inv.inkpens,
        });
      }
        if (inv.pens < 0) {
          setInv({
            books: inv.books,
            notebooks: inv.notebooks,
            pens: 0,
            inkpens: inv.inkpens,
          });
        }

        if (inv.inkpens < 0) {
          setInv({
            books: inv.books,
            notebooks: inv.notebooks,
            pens: inv.pens,
            inkpens: 0,
          });
        }
    let totalval = inv.books + inv.notebooks + inv.pens;
    const handleChange = (val,product)=>{
      if(product==="books")
      {
        
        setInv({ books: inv.books + val, notebooks: inv.notebooks, pens:inv.pens ,inkpens:inv.inkpens});
      
        
      }
      else if(product==="notebooks")
      {
        setInv({
          books: inv.books,
          notebooks: inv.notebooks+val,
          pens: inv.pens,
          inkpens:inv.inkpens,
        });

      }
      else if(product==="pens"){
         setInv({
           books: inv.books,
           notebooks: inv.notebooks,
           pens: inv.pens+val,
           inkpens:inv.inkpens,
         });

      }
      else if(product==="inkpens"){
        setInv({
          books: inv.books,
          notebooks: inv.notebooks,
          pens: inv.pens+val,
          inkpens:inv.inkpens+val,
        });

     }
    }

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button 
        onClick={()=>{
          handleChange(1,"books")
        }}
        className="circlularButton">+</button>
        <button 
        onClick={()=>{
          handleChange(-1,"books")
        }}
        className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button 
                onClick={()=>{
                  handleChange(1,"notebooks")
                }}
        className="circlularButton">+</button>
        <button 
                onClick={()=>{
                  handleChange(-1,"notebooks")
                }}
        className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button 
        onClick={()=>{
          handleChange(1,"pens")
        }}
        className="circlularButton">+</button>
        <button 
        onClick={()=>{
          handleChange(-1,"pens")
        }}
        className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button 
        onClick={()=>{
          handleChange(1,"inkpens")
        }}
        className="circlularButton">+</button>
        <button 
        onClick={()=>{
          handleChange(-1,"inkpens")
        }}
        className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {totalval}
    </div>
  );
};
