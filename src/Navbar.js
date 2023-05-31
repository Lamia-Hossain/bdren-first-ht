function Navbar() {
  return (
    <div>
      <ul className="pt-1 flex flex-cols-5 gap-x-3 font-semibold">
        <li>
          <a href="#home"> Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
