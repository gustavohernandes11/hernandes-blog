import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { SocialBar } from "./index";

describe("<SocialBar/>", () => {
    it("should render the SocialBar component", () => {
        customRender(<SocialBar />);
    });
});
