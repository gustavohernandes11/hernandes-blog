import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Title } from "./index";

describe("<Title />", () => {
    it("should render the Title component", () => {
        customRender(<Title />);
        const title = screen.getByRole(/heading/i);
        expect(title).toBeInTheDocument();
    });
});
