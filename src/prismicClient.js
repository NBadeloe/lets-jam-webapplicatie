import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers"

const repositoryName = "nanditasblog";

const createClient = (params) => {
	const client = prismic.createClient(repositoryName, params);

	return client;
};

export default createClient;