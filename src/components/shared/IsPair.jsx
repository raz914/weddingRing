const IsPair = ({ activeRing, isPair, setIsPair }) => {
  return (
    <div className="py-3 flex items-center bg-white">
      <input
        id="expertToggle"
        type="checkbox"
        checked={
          activeRing?.id === 1 || activeRing?.id === 2
            ? isPair.pair1
            : isPair.pair2
        }
        onChange={() =>
          setIsPair((prevState) => ({
            ...prevState,
            pair1:
              activeRing?.id === 1 || activeRing?.id === 2
                ? !isPair.pair1
                : !isPair.pair2,
          }))
        }
        className="mr-2"
      />
      <label className="text-sm font-semibold">
        Use the same settings for both rings
      </label>
    </div>
  );
};

export default IsPair;