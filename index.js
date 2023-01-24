const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const configuration = new Configuration({
  organization: 'org-6sGj1pvC8alT3H9J0eOm9aTc',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

// create a simple express api that calls the function above

const app = express();
const port = 3000;

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });
  res.json({ data: response.data });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
