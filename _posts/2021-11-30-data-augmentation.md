---
title: Intro to Data Augmentation
tags: post machine-learning
usemathjax: false
---

Datasets are the heart of any machine learning model.
We use them to fine tune the model's parameters in order to make better predictions.

A big factor in the accuracy of the predictions is the quality of data provided.
We may use different models and training algorithms to improve the accuracy of our model, but none of that matters if we have bad data.
For example, imagine we want to train a model to recognize if a picture contains text.
Our dataset could consist of thousands of images of many different books as the text images, and paintings, clothing, and houses as the non-text images.
When we train the model, it should be able to tell apart books from houses. Great!

However, what if we show the model a car with a bumper sticker?
The model was trained on only different books, so it probably won't recognize the text unless it is encapsulated in a nice white rectangle. (page of a book)
It could go the other way as well: the model would likely predict that an image contains text, if that image is a page of a book with scribbles on it instead of text.

Now, consider we had a much more diverse dataset, full of books, signs, papers, bumper stickers, receipts, and text messages classified as text, and paintings, houses, cars, mountains, forests, and animals classified as no-text.
A model trained off of this new dataset would probably be able to detect if an image has text with much more accuracy than the last model.
Since there is more variety in our training data, the model won't overfit to a certain type of data and will be more likely to classify abstract cases correctly.
So, it would probably predict that a computer screen with this post has text, and it would also likely predict that a scene from a video game doesn't.

# Small Datasets

Collecting data can be super annoying.
Sometimes, entering all the (potentially thousands of) features takes egregious amounts of time. (Handwritten surveys, for example.)
Other times, data points are hard to come by. (Light bent by a black hole, for example.)

When I refer to small datasets, I'll be talking about datasets with less than 1000 entries.
Realistically however, small datasets by today's standards can contain tens or hundreds of thousands of entries.

It's possible to train models on small datasets.
With smart model engineering, careful hyperparameter tuning, and correctly-sized validation/testing sets, very good models can be trained on minimal data.

However, it's generally safer (and much easier) to train models on large datasets.
This is because the model parameters can be adjusted more according to the dataset, but since there are more values, it won't be overfitted to a few values.

# Expanding Your Datasets

What do you do if you have a limited amount of data, but want a larger dataset for training your model?
[Data augmentation][2] can be a great solution.

Data augmentation is the act of expanding an existing dataset by creating altered copies of the original data.
Altered copies can be created in infinite ways: simple transformations are most commonly used.
For any dataset, we can add small amounts of noise to each value in the dataset.
This should keep the data representative of what it was before, since the noise is small.
However, adding noise that is too large can harm the data, which makes it useless.
Access caution!

For images specifically, we can get a little creative with data augmentation.
Actions such as cropping the image, rotating the image, and flipping the image are easy to implement and effective ways to augment your data.
Less common ways include blurring, color swapping, inverting, and dialating the image.

If the image is made smaller but kept as the same size in pixels, it will have a blank background.
This can be harmful to models, since the drastic change in variety of color and non-zero values will be very easy for the model to pick up on, which can lead to the model training incorrectly.
So, the image can be flipped and repeated on each edge as a slight remedy.
Notice, however, that this can still cause strange outputs in your model.

# Overfitting

Not all datasets are small.
In the case of a large dataset and a very complex model, data augmentation can still help!

By adding slightly altered versions of the image, we are essentially performing a [regularization technique][3].
Regularization is the act of reducing overfitting; in this case, the added data will increase the chances of the model picking up more general patterns, instead of learning the exact patterns from our dataset, which will result in a better performing model.

The problem of overfitting (relevant to data augmentation) will only arise when your model is sufficiently complex (a very deep neural network, perhaps?) compared to the dataset, despite it being medium to large in size.
So, it's best to use your own judgement to use it or not in such cases.
Or, maybe you could train a model with data augmentation and another without it, and choose whichever one performs better as the final model.

# TensorFlow

Luckily, data augmentation tools are provided with tensorflow, which is a commonly used library in machine learning for models and data modification.
They have a great guide on their documentation, [which can be found here.][4]

Data augmentation can be performed in pretty much any library.
Another common python library is numpy, [which also can be used for data augmentation.][5]

[1]: https://nanonets.com/blog/data-augmentation-how-to-use-deep-learning-when-you-have-limited-data-part-2/
[2]: https://en.wikipedia.org/wiki/Data_augmentation
[3]: https://en.wikipedia.org/wiki/Regularization_(mathematics)
[4]: https://www.tensorflow.org/tutorials/images/data_augmentation
[5]: https://medium.com/@schatty/image-augmentation-in-numpy-the-spell-is-simple-but-quite-unbreakable-e1af57bb50fd
