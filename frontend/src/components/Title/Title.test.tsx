import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Title } from "./index";

describe("<Title/>", () => {
    it("should render the Title component", () => {
        customRender(<Title>Texto para teste</Title>);
    });
});
