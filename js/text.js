const data = [
    {
      "id": "01",
      "name": "ChatGPT",
      "description": "ChatGPT is a large language model developed by OpenAI that can generate human-like responses in a conversation.",
      "image": "https://img.olhardigital.com.br/wp-content/uploads/2023/01/chatgpt_assistente.jpg",
      "published_in": "11/1/2001"
    },
    {
      "id": "02",
      "name": "Another Model",
      "description": "Another large language model.",
      "image": "https://example.com/image.jpg",
      "published_in": "1/1/2020"
    },
    {
      "id": "03",
      "name": "One More Model",
      "description": "One more large language model.",
      "image": "https://example.com/image.jpg",
      "published_in": "6/1/2021"
    }
  ];
  
  // Sort the array by date
  data.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
  
  // Output the sorted array
  console.log(data);
  