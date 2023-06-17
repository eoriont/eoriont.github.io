---
title: Introduction to Blockchains
tags: post blockchain
usemathjax: false
---

# Introduction

Web 1.0 was based on static html pages on websites (kind of like this blog).
Web 2.0 is based on more dynamic structures, allowing for the creation of new pages and manipulation of data on the website.
Web 3.0 is based on decentralization--what better tool to advance this technology than blockchain?

For example, say you store all your photos on your computer.
If someone breaks into your house and steals your computer, then your photos are gone.
Or, if your computer catches on fire somehow, your photos are gone.
Or, if you accidentally delete your photos permanently, then your photos are gone.
The point is that there are many ways for a single system to fail, and if your application is centralized, failing will have dire consequences.

With a decentralized system, your photos would be stored across hundreds (or thousands!) of computers.
This way, if something happened to your computer, your photos wouldn't be gone forever.
You could just ask someone else in the network (who has a working computer) for them!

Of course, this wouldn't work if every single computer in the network was broken; there would be no one to ask.
However, such a catastrophe is very unlikely to happen; decentralized networks incentivize network "nodes" to stay online.
This incentive depends on the network you are using: bitcoin, ethereum, solana, arweave, etc.

# How do you make a decentralized network?

Decentralized networks work because they can synchronize one state across many nodes.
The "state" can be thought of as all the data that is stored on the blockchain at a point in time.
So, how can we synchronize state?

Let's use an example:
Fred and his friends want to make a decentralized network.
They decide to manually do all operations.
Fred decides to put some text on the network: "bananafdjskal;"
Obviously, there is a typo--Fred meant to type "banana".
Before he noticed his typo, he told all his friends to put "bananafdjskal;" onto their network.
Now, the network state looks like this:

```
Fred's essay: "bananafdjskal;"
```

Fred decides to fix his typo.
He tells all his friends to replace his word with "banana".
Now, the state looks like this:

```
Fred's essay: "banana"
```

Fred and his friends have just successfully made a decentralized network!
But, we haven't tested any of the problems...

# Common Problems

Imagine Caroline tries to edit Fred's essay.
We don't want Caroline to be able to edit Fred's essay, because Fred is the one writing it, not Caroline!
So, in order for a change to be made, we have to confirm the person making the change is the person who owns the essay.
A common way to do this is to use a signature.
When you buy something at a store with a credit card, you have to put in a pin or sign your name.
Whenever Fred wants

UNFINISHED!
