import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { mockApi } from "../../__mocks__/mockApi.json";
import { RenderContentZone } from "./index";


describe("<RenderContentZone />", () => {
    it("should render the RenderContentZone component", () => {
        customRender(<RenderContentZone />);
        screen.logTestingPlaygroundURL();
    });
});
