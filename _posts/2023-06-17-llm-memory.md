---
title: Memory in LLMs
tags: post ai
---

Large Language Models (LLMs) are very popular today, especially with new apps/libraries making them extremely easy to work with (i.e. [LangChain][8]). However, when I started working with them, I ran into a problem pretty quickly, namely that I wanted my 'chatbot' to be able to remember the current conversation. Without memory, LLMs can only respond to a single question at a time before forgetting all this 'context'.

## The Problem in More Detail

LLM APIs such as [OpenAI's gpt models][10], Facebook's models including [LLAMA][9], [huggingface's transformer-based models][11] and any many other models are all stateless. This means that their model outputs will depend solely on the input you provide. The problem arises with the fact that most LLM applications are stateful. For example, chatbots (like ChatGPT) need to remember what was said earlier in the conversation to be able to respond on topic. However, there has been a lot of work done on **memory**, which are ways to transform these state**less** models into (pseudo) state**ful** models.

## Memory in RNNs

Modern language models are generally based on the transformer architecture, which came out in the groundbreaking [Attention is All you need paper][3]. This paper essentially rendered recurrent neural networks (RNNs) worthless because of the strong attention improvement made possible by transformers. However, by switching to transformers, we abandon a very interesting property of RNNs; their own built-in memory.

RNNs use a **previous state** along with the current token as input, to predict the next token. The sequential nature of this model means training on GPUs, which are highly optimized for parallel computation, is much slower. (This is one of the reasons transformers are deemed 'better') But, the fact that the **previous state** is being used means it has its own **built in memory**. Theoretically, by encoding the previous context, whether that be a conversation, weather data, or stock prices, the RNN, a state machine technically, can make a prediction based on that. Note the impracticality of encoding any normal amount of data into a single vector (the conventional way for RNNs). This likely means much of the data is lost in the process, and only certain (hopefully important) properties are preserved. However, I like how this **memory** (state) is inherent in the model of an RNN.

Transformers are fundamentally different. Instead of sequentially calculating each token, an attention matrix is calculated and the output is calculated in one computation. This means that the memory must somehow be included in the input/attention matrix. Which brings us to the next section.

## Memory for Chatbots

There are many ways to implement memory into chatbot LLMs, including

1. [Conversation Buffer Memory][4]
   This kind of memory very simple. Each time you query the chatbot for a message, you basically just paste the entire previous conversation right before your next response and feed that into the LLM. The benefits of this include that it's very simple and doesn't get rid of any data. A big disadvantage of this method is that since LLM APIs usually have a token limit, the LLM won't be able to respond after a long enough conversation. In other words, it's not scalable.

2. [Conversation Summary Memory][5]
   Every message and response sent, a summary is created of the previous summary combined with the new message and response. Of course, the initial summary is nothing. This is called a "rolling summary" and is updated for each interaction. To make the summary, another LLM is used, whether it's the same or a different one. An advantage of this is that while still being simple, it also allows for much better scaling: even if the conversation gets really long, the summary can just contain the key points and stay a certain length. However, the big disadvantage of this way is that it loses details.

3. [Conversation Entity Memory][6]
   An external state, such as a simple key value store is used to store summaries/definitions of what certain entities/objects/concepts are. Each prompt is analyzed to determine which definitions to include, and which to update, and the response uses these summaries as context. An advantage of this method is being able to see exactly which entities are being prioritized, and seeing if the state definitions are true to what the user intended. However, a disadvantage is that this method begins to complicate pipelines to language model calls.

4. [Conversation Knowledge Graph Memory][7]
   This method is similar to entity memory, but instead of using a key value store, a knowledge graph is used. Each interaction results in graph nodes being changed/created, and the knowledge graph is used as context for the next interaction. I don't know much about knowledge graphs, so I'm interested in playing around with them in the future.

## Other Memory

- [Generative Agents Paper][1]. This paper proposes using architectures that reflect on observations for "high-level inferences", store their reflections, and retrieve them for later usage. The components of their model are called the "memory stream", "reflection", and "planning". To me, this seems like an attempt to model human behavior; as a human myself, I observe things in my memory stream, I reflect and think about them, and then I decide what to do with this new information.

## Closing Remarks

The memory methods I discussed mostly only apply to chatbots, despite there being many more different applications than just chatbots. However, some of the methods can be transcribed to other applications pretty easily, which I may discuss in a later post.

This blog post was partially inspired by [Harrison Chase's speech on Memory in LLM Applications at the Weights & Biases Fully Connected Conference][2], which I was fortunate enough to be able to attend.

Thanks for reading!

[1]: https://arxiv.org/pdf/2304.03442.pdf
[2]: https://www.youtube.com/watch?v=3fge-zqZezw
[3]: https://arxiv.org/abs/1706.03762
[4]: https://python.langchain.com/docs/modules/memory/how_to/buffer
[5]: https://python.langchain.com/docs/modules/memory/how_to/summary
[6]: https://python.langchain.com/docs/modules/memory/how_to/entity_summary_memory
[7]: https://python.langchain.com/docs/modules/memory/how_to/kg
[8]: https://python.langchain.com/docs/get_started/introduction.html
[9]: https://ai.facebook.com/blog/large-language-model-llama-meta-ai/
[10]: https://platform.openai.com/docs/models
[11]: https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard
