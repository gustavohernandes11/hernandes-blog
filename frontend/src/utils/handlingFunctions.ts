export const getDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const meses = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
    ];
    const formatedDate =
        date.getDate() +
        " / " +
        meses[date.getMonth()] +
        " / " +
        date.getFullYear();
    return formatedDate;
};
