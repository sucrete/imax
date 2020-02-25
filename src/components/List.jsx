import React from "react";

import { Link } from "react-scroll";
function List() {
  const theDeal = { offset: -25, duration: 400 };
  const subRoutes = ["doc", "narrative", "visual", "promo"];
  const listItems = subRoutes.map(route => (
    <li className="listItem">
      <Link
        to={route}
        spy={true}
        smooth={true}
        offset={theDeal.offset}
        duration={theDeal.duration}
      >
        {route}
      </Link>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
export default List;
