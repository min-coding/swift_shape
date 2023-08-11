function Shapes({
  items,
  activeIndex,
  setActiveIndex,
}: {
  items: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  function shiftArray(arr: string[], count: number) {
    const copy = [...arr];
    for (let i = 0; i < count; i++) {
      const item = copy.shift();
      if (item !== undefined) {
        copy.push(item);
      }
    }
    return copy;
  }

  function randomOrder() {
    setActiveIndex(() => {
      const random = Math.floor(Math.random() * items.length);
      return random;
    });
  }

  const shiftedItems = shiftArray(items, activeIndex);

  return (
    <div className="carousel-items">
      {shiftedItems.map((item, index) => (
        <div key={index} className="box boxshape" onClick={randomOrder}>
          <div key={index} className={`carousel-item ${item}`}></div>
        </div>
      ))}
    </div>
  );
}

export default Shapes;
