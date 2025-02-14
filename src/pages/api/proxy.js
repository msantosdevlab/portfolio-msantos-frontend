import axios from 'axios';

export default async function handler(req, res) {
    const { endpoint, lang } = req.query; // Pega o parâmetro lang da query

    if (!endpoint) {
        return res.status(400).json({ error: "Endpoint not specified" });
    }

    // Define a URL da API com base no endpoint e no idioma (lang)
    const apiUrl = `${process.env.API_URL}/${endpoint}?lang=${lang || 'pt'}`;  // 'pt' como fallback

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
        });

        // Axios já parseia a resposta para JSON, então podemos acessar diretamente com response.data
        res.status(200).json(response.data);
    } catch (error) {
        // Tratamento de erro mais detalhado
        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data.message || "Error when searching for data" });
        } else if (error.request) {
            return res.status(500).json({ error: "No response received from the server" });
        } else {
            return res.status(500).json({ error: "Error while setting up the request" });
        }
    }
}
