import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Slider } from "./index";

describe("<Slider/>", () => {
    it("should render the Slider component", () => {
        customRender(<Slider>Texto para teste</Slider>);
    });
});
