## To run code in dev

> Add openai key .env file before run dev server

```env
//.env
	OPENAI_API_KEY={{VALUE}}
```

```sh

npm run dev

```

## API

- /api/ai/route.ts has two methods `getGPTResponse` to call openai api using sdk and `runAnalysis` to pass promts and parse response.
- /api/ai/route.ts POST request method is failing to parse request json
