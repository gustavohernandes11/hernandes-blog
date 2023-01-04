export const dateFormatter = (raw: string) => Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
}).format(new Date(raw));
