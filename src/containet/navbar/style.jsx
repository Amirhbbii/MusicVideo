export const Tsx = {
    minHeight: 48,
    py: 3,
    // eslint-disable-next-line no-restricted-globals
    opacity: open ? 1 : 0,
    cursor: "pointer",
    color: "#fff"
};
export const ButtonSx = {
    minHeight: 55,
    display: "flex",
    textAlign: "center",
    border: "none",

    fontSize: "30px",
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
        // bgcolor: "#FFC436",
        bgcolor: "#2b4c9f",
        color: "#fff !important",
        borderRadius: "0",
    },
};
export const IconSx = {
    margin: "0 5px",
    // eslint-disable-next-line no-restricted-globals
    ...(open && {display: "none"}),
    display: "flex",
};
export const AppBarSx = {bgcolor: "orange"};
