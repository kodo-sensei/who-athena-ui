import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/storeTypes";
import { fetchDimensionsCodeData } from "../../../services/redux/code/codeSlice";
import {
  fetchDimensionsData,
  selectActiveDimensionAction,
} from "../../../services/redux/dimension/dimensionSlice";
import SearhBar from "../search/SearchBar";
import NavList from "./NavList";

function Header() {
  const dimensions = useSelector((state: RootState) => state.dimensions);
  const dispatch = useDispatch();

  const selectActiveDimension = (data: any) => {
    dispatch(fetchDimensionsCodeData(data.value))
    dispatch(selectActiveDimensionAction(data));
  };

  useEffect(() => {
    dispatch(fetchDimensionsData());
  }, []);

  return (
    <div className="sticky top-0 bg-white z-[300]">
      <div className="max-w-12xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-1 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <SearhBar
            className="self-start w-1/2 p-1"
            options={dimensions.data}
            onChange={selectActiveDimension}
            selected={dimensions.selected}
            placeholder="Search Dimensions ... "
          />
          <NavList title="Workflow" items={[]} />
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
