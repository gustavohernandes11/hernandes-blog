import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Header } from "./index";

describe("<Header />", () => {
    it("should render  the component", () => {
        customRender(<Header />);
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
});
