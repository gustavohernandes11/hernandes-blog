import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Pagination } from "./index";

describe("<Pagination/>", () => {
    it("should render the Pagination component", () => {
        customRender(<Pagination>Texto para teste</Pagination>);
    });
});
