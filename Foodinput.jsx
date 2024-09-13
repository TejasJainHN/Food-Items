const Foodinput = ({onKeyDown}) => {
  const handleonchange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className="inputfood"
      type="text"
      placeholder="Enter  Food Item here"
      onKeyDown={(event) => {
        handleonchange(event);
      }}
    />
  );
};

export default Foodinput;
