const Header = () => {
  return (
    <header className="p-4">
      <div className="flex justify-between px-3">
        <h1 className="font-bold text-[#376A10]">EDITORAIL NOURSIHMENT</h1>
        <div className="flex justify-around gap-3">
          <a href="">Profile</a>
          <a href="">Settings</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
