
const express = require("express")
const app = express()

//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
const { Configuration, OpenAIApi } = require( "openai")   ;
const configuration = new Configuration({
    organization: "org-f8D31yhvoNW2AIpJ84gxlNXm",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);
openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is chat gpt",
    max_tokens: 100,
    temperature: 0,
  }).then((response)=>{
    console.log(response.data.choices[0].text)
  });



app.get("/", (req, res) =>{
    res.json({
        message: "helo"
    })
})

app.listen(3000, () => 
    console.log("sania")
)