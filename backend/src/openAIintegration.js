const OpenAI = require('openai')
const dotenv = require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'How important is your health?' }],
    model: 'gpt-3.5-turbo'
  })

  console.log(completion.choices[0])
}

main()
