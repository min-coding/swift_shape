export default function Action({
  items,
  setActiveIndex,
}: {
  items: string[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  function moveRight() {
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
    });
  }

  function moveLeft() {
    setActiveIndex((prevIndex) => {
      return prevIndex === items.length - 1 ? 0 : prevIndex + 1;
    });
  }
  return (
    <>
      <div className="box">
        <div className="triangle rotateLeft" onClick={moveLeft}></div>
      </div>
      <div className="box">
        <div className="triangle rotateRight" onClick={moveRight}></div>
      </div>
    </>
  );
}
