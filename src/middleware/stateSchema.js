export default {
	$schema: "http://json-schema.org/draft-07/schema",
	$id: "http://example.com/example.json",
	type: "object",
	title: "The root schema",
	description: "The root schema comprises the entire JSON document.",
	default: {},
	examples: [
		{
			comments: [
				{
					id: 123,
					comment: "Amen Lord!",
				},
			],
			changeAuth: false,
		},
	],
	required: ["comments", "changeAuth"],
	additionalProperties: true,
	properties: {
		comments: {
			$id: "#/properties/comments",
			type: "array",
			title: "The comments schema",
			description: "An explanation about the purpose of this instance.",
			default: [],
			examples: [
				[
					{
						id: 123,
						comment: "Amen Lord!",
					},
				],
			],
			additionalItems: true,
			items: {
				anyOf: [
					{
						$id: "#/properties/comments/items/anyOf/0",
						type: "object",
						title: "The first anyOf schema",
						description: "An explanation about the purpose of this instance.",
						default: {},
						examples: [
							{
								id: 123,
								comment: "Amen Lord!",
							},
						],
						required: ["id", "comment"],
						additionalProperties: true,
						properties: {
							id: {
								$id: "#/properties/comments/items/anyOf/0/properties/id",
								type: "integer",
								title: "The id schema",
								description:
									"An explanation about the purpose of this instance.",
								default: 0,
								examples: [123],
							},
							comment: {
								$id: "#/properties/comments/items/anyOf/0/properties/comment",
								type: "string",
								title: "The comment schema",
								description:
									"An explanation about the purpose of this instance.",
								default: "",
								examples: ["Amen Lord!"],
							},
						},
					},
				],
				$id: "#/properties/comments/items",
			},
		},
		changeAuth: {
			$id: "#/properties/changeAuth",
			type: "boolean",
			title: "The changeAuth schema",
			description: "An explanation about the purpose of this instance.",
			default: false,
			examples: [false],
		},
	},
};
