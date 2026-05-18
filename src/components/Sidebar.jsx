const Sidebar = () => {
  return (
    <aside className="w-44 p-4">
      <nav className="space-y-2">
        <a href="/" className="block  p-2 rounded">
          Pantry
        </a>
        <a href="/recipes" className="block  p-2 rounded">
          Recipes
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
