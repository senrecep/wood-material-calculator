const currencyFrmatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

const dateTimeFormatter = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "full",
  timeStyle: "medium",
});

const formatDateTime = (value: Date) => dateTimeFormatter.format(value);

const formatTry = (value: number) => currencyFrmatter.format(value);

export { formatTry, formatDateTime };
