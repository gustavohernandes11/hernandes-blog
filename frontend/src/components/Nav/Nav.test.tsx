import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Nav } from "./index";

describe("<Nav />", () => {
    beforeEach(() => {
        customRender(<Nav />);
    });
    it("should render the Nav component", () => {
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    });
    it("should render the children components", () => {
        expect(screen.getByText(/início/i)).toBeInTheDocument();
        expect(screen.getByText(/sobre/i)).toBeInTheDocument();
    });
});
