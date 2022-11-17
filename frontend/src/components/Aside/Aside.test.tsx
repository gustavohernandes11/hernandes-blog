import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Aside } from "./index";

describe("<Aside/>", () => {
    it("should render the Aside component", () => {
        customRender(<Aside>Texto para teste</Aside>);
    });
});
