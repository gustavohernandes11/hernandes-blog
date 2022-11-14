import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Menu } from "./index";

describe("<Menu/>", () => {
    it("should render the Menu component", () => {
        customRender(<Menu>Texto para teste</Menu>);
    });
});
