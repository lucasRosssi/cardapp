export interface CommentDTO {
	id: string;
	user: {
		name: string;
		picture: string;
	};
	content: string;
}
