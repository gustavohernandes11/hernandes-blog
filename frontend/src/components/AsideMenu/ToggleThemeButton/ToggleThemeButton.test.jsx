import { screen } from "@testing-library/react";
import { customRender } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { ToggleThemeButton } from "./index";

describe("<ToggleThemeButton />", () => {
    it("should render the ToggleThemeButton component", () => {
        customRender(<ToggleThemeButton />);
        const element = screen.getByLabelText("toggle-theme-button");
        expect(element).toBeInTheDocument();
    });
    it("should change the theme when clicked", () => {

    })
    
});
