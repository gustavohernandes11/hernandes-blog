import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Article } from "./index";

describe("<Article/>", () => {
    it("should render the Article component", () => {
        customRender(<Article>Texto para teste</Article>);
    });
});
