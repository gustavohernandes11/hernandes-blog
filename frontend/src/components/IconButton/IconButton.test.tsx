import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { IconButton } from "./index";

describe("<IconButton/>", () => {
    it("should render the IconButton component", () => {
        customRender(<IconButton>Texto para teste</IconButton>);
    });
});
