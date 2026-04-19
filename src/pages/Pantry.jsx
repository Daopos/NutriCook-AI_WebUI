const Pantry = () => {
  return (
    <div>
      {/* //Title Cotaniner */}
      <div>
        <span className="bg-[#558B2F] text-white p-1 px-3 rounded-lg">
          Inventory System
        </span>
        <div className="mt-3">
          <h1 className="text-7xl font-bold">
            THE FULL
            <br />
            PANTRY
          </h1>
        </div>
        <p>
          a curanated perspective of your current culinary stocks. <br /> Manage
          for freshness, sustainability, and immediate inspiration
        </p>
      </div>

      {/* //Card Container */}
      <div className="mt-7 grid grid-cols-4 gap-4">
        {/* card  */}
        <div className="bg-[#E0F4FF] p-4 rounded-2xl">
          <div className="flex justify-between">
            icon <span>Total Capacity</span>
          </div>
          <h1 className="mt-3">142</h1>
          <p>Unique Ingredients track</p>
        </div>
      </div>
    </div>
  );
};

export default Pantry;
