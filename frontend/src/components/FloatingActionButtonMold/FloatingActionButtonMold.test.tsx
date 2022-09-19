import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { FloatingActionButtonMold } from "./index";

describe("<FloatingActionButtonMold/>", () => {
    it("should render the FloatingActionButtonMold component", () => {
        customRender(<FloatingActionButtonMold>Texto para teste</FloatingActionButtonMold>);
    });
});