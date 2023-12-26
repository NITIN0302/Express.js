const obj = {
	name : "Nitin",
	email : "nitinsrivastava2all@gmail.com",
	phone : 8957181042
}


const zod = require("zod")

function validate(info)
{
	const schema = zod.object({
		name : zod.string(),
		email : zod.string().email(),
		phone : zod.number()

	})
	const response = schema.safeParse(info)
	console.log(response)
}

validate(obj)
