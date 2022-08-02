import { Fab } from "@mui/material";
import { Menu, X } from "@styled-icons/heroicons-outline";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const FloatingActionButton = () => {
    const [state, actions] = useGlobalContext();
    return (
        <>
            {window.screen.width <= 425 && (
                <Fab
                    onClick={() => actions.setOrToggleMenu()}
                    size="medium"
                    color="primary"
                    id="floating-action-button"
                >
                    {state.menuCondition === "open" ? (
                        <X width={25} height={25} />
                    ) : (
                        <Menu width={25} height={25} />
                    )}
                </Fab>
            )}
        </>
    );
};
