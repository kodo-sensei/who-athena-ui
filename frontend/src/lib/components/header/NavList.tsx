import React from "react";
import { INavList } from "../../data/interfaces/navbar.inteface";
import NavItem from "./NavItem";

function NavList(props?: INavList) {
  return (
    <div>
      <nav className="md:flex space-x-10">
        {props &&
          props.items.map((item) => (
            <NavItem
              title={item.title}
              children={item.children}
              link={item.link}
            />
          ))}
      </nav>
    </div>
  );
}

export default NavList;
