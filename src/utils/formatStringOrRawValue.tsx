export const dateFormatOptions: Intl.DateTimeFormatOptions = {
	year: "numeric",
	month: "long",
	weekday: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "long",
};

export const formatStringOrRawValue = (str: string): string => {
	const isValid = Date.parse(str);
	const date = isValid ? new Date(str) : str;

	return isValid ? date.toLocaleString("pt-br", dateFormatOptions) : str;
};
