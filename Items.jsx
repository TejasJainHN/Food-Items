const Items = ({ fooditem }) => {

  const handlebuyclick=(event,HandleBuyButton)=>{
    console.log(event)
    console.log(`${fooditem} being bought`)
  }


  return (
    <li className="list-group-item ">
      <span className="kg-span">{fooditem}</span>
      <button
        className="btn btn-info"
        onClick= {(event)=>handlebuyclick(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
