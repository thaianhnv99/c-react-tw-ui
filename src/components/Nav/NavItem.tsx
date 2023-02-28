const NavItem = ({ title, icon, active }: { title: string; icon: React.ReactNode, active: boolean }) => {
  return (
    <li className={`flex p-2 justify-end gap-2 cursor-pointer ${active ? 'bg-primary text-white' : ''}`}>
      <h3>{title}</h3>
      {icon}
    </li>
  );
};

export default NavItem;
