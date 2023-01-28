require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-FWtO3crcLoFZC4FIRvVV1ys7",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port = 3080;

app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from Orion GPT Backend!'
    })
  })

app.post('/', async (req, res) => {
    const { message, currentModel, temperature } = req.body;
    console.log(`Current Model: ${currentModel} | Temperature: ${temperature}`)
    const response = await openai.createCompletion({
        model: `${currentModel}`,
        prompt: `${message}`,
        max_tokens: 1000,
        frequency_penalty: 1,
        temperature
    });

    res.json({
        message: response.data.choices[0].text,
    })
});

app.get('/models', async (req, res) => {
    const response = await openai.listEngines();
    res.json({
        models: response.data
    })
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
});

