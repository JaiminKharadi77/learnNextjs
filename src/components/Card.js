const Card = ({ children }) => {
  return (
    <div className="p-24 m-2 shadow-lg border border-gray-300 flex justify-center items-center hover:scale-90">
      {children}
    </div>
  );
};

export default Card;
