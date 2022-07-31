import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { AsideMenu } from "./index";

describe("<AsideMenu />", () => {
    it("should render the AsideMenu component", () => {
        customRender(<AsideMenu />);
        const asidemenu = screen.getByRole("complementary");
        expect(asidemenu).toMatchSnapshot();
    });
    it("should render the logo, nav and button", () => {
        customRender(<AsideMenu />);
        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getByLabelText("toggle-theme-button")).toBeInTheDocument();
    });
});
