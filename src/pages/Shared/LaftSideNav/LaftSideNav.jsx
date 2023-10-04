import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LaftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <div>
      <h1 className="text-3xl font-semibold">All Caterogy</h1>
      <div className="px-10 my-10 space-y-10">
        {categories?.map((category) => (
          <NavLink
            to={category.name}
            key={category.id}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <span className="block text-[#9F9F9F] text-2xl font-medium">
              {category.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LaftSideNav;
