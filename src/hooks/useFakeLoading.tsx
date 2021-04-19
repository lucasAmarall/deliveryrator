import { useState } from "react";

let page = 0;

export const useFakeLoading = (
	step: number
): {
  loading: boolean;
  loadMore: () => () => void;
  range: number[];
  page: number;
} => {
	const [loading, setLoading] = useState(false);
	const [range, setRange] = useState([0, step]);

	const loadMore = () => {
		setLoading(true);
		const debounce = setTimeout(() => {
			const nextPage = page + 1;
			page = nextPage;
			setRange([page * step, (page + 1) * step]);
			setLoading(false);
		}, 1200);
		return () => clearTimeout(debounce);
	};

	return {
		loading,
		loadMore,
		range,
		page,
	};
};
