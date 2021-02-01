export interface CatFact {
	_id: string;
	__v: number;
	status: {
		verified: boolean;
		sentCount: number;
	};
	text: string;
	type: string;
	deleted: false;
	user: string;
	source: string;
	updatedAt: string;
	createdAt: string;
	used: boolean;
}