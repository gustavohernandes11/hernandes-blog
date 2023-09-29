import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { IconButton } from "./index";
import { Home } from "@styled-icons/fa-solid";

describe("<IconButton/>", () => {
    it("should render the IconButton component", () => {
        const container = customRender(
            <IconButton>
                <Home />
            </IconButton>
        );
        const iconButton = container.getByRole("button");
        expect(iconButton).toBeVisible();
    });
});
