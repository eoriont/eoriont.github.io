---
title: Quick Setup For TensorFlow on Windows 10
tags: post machine-learning
usemathjax: false
---

I was working with tensorflow to make my GAN recently, but I noticed a couple things.
First, each epoch in training would take around 5 minutes, which is extremely slow.
For my goal of 100 epochs, it would take 500 minutes, which turns out to be over 8 hours.
Obviously, this is NOT ideal.

Then, I noticed another thing, and that was the small "missing dll" errors in my console!
As it turns out, you can use your GPU(s) to highly accelerate machine learning operations, because of all the matrix math optimizations offered by GPUs.
However, setting up tensorflow to utilize all your GPUs was, to put it lightly, a massive pain.
In this post, I'll go over how to quickly install tensorflow and the correct cuda programs.

# Hardware

This will only work if you currently have a CUDA-enabled GPU installed.
So pretty much any graphics card from NVidia should work.
For me, I have dual SLI GTX 970s.

I have a Windows 10 PC. That means that if you have a mac or linux PC, you should follow a different tutorial.

# TODO List

(Prerequisites)

1. [Install Python 3.9.x](https://python.org)
2. [Install PyPI](https://pip.pypa.io/en/stable/installation/)
3. [Install visual C++ redistributable](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0)

(TODO) 3. Install TensorFlow 4. Install NVidia Drivers 5. Install CUDA Toolkit 6. Install CUDNN

# Install TensorFlow

In a command prompt:

```
pip install --upgrade pip
pip install tensorflow
```

This just upgrades `pip` and installs the `tensorflow` package.
If you want to install a specific version, use the following syntax:

```
pip install tensorflow==2.6.0rc2
```

(If you want a list of versions, just use an unknown version and `pip` should tell you.)

```
pip i tensorflow==chicken
```

Since TensorFlow and CUDA are so picky about their versions, here is the version I used when I got it working: _2.6.0rc2_.

# Install NVidia Drivers

I recommend downloading GeForce experience, so you can keep your drivers updated automatically.
[You can find it here.](https://www.nvidia.com/en-us/geforce/geforce-experience/)

[Or, you can download drivers for a specific GPU here.](https://www.nvidia.com/download/index.aspx?lang=en-us)

# Install CUDA Toolkit

[You can find a list of all the different versions of the CUDA toolkit here.](https://developer.nvidia.com/cuda-toolkit-archive)

You're probably wondering which version to install.
For my build, I installed _CUDA Toolkit 11.2.2_.

If tensorflow adds support for more recent versions of the CUDA Toolkit, you can try installing them for increased performance or new features.

Once you run the installer, you should have some new files in the following directory: `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.2`.

Before, if you ran a tensorflow project, you may have received an error similar to the following:

```
2021-08-08 17:12:44.906857: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cudart64_110.dll'; dlerror: cudart64_110.dll not found
2021-08-08 17:12:44.906995: I tensorflow/stream_executor/cuda/cudart_stub.cc:29] Ignore above cudart dlerror if you do not have a GPU set up on your machine.
2021-08-08 17:12:46.625071: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cudart64_110.dll'; dlerror: cudart64_110.dll not found
2021-08-08 17:12:46.626074: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cublas64_11.dll'; dlerror: cublas64_11.dll not found
2021-08-08 17:12:46.627073: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cublasLt64_11.dll'; dlerror: cublasLt64_11.dll not found
2021-08-08 17:12:46.628006: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cufft64_10.dll'; dlerror: cufft64_10.dll not found
2021-08-08 17:12:46.628980: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'curand64_10.dll'; dlerror: curand64_10.dll not found
2021-08-08 17:12:46.629958: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cusolver64_11.dll'; dlerror: cusolver64_11.dll not found
2021-08-08 17:12:46.631054: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cusparse64_11.dll'; dlerror: cusparse64_11.dll not found
2021-08-08 17:12:46.632484: W tensorflow/core/common_runtime/gpu/gpu_device.cc:1835] Cannot dlopen some GPU libraries. Please make sure the missing libraries mentioned above are installed properly if you would like to use GPU. Follow the guide at https://www.tensorflow.org/install/gpu for how to download and setup the required libraries for your platform.
Skipping registering GPU devices...
```

This is because your computer can't find the files listed in the error message.
But notice in the `bin` folder of the CUDA toolkit that we just installed, you can find all of these files.
This means, we need to add this folder to the path!

So, open the system environment variables by going to the start menu and searching "environment variables".
Then, find the `Path` variable, select it, and click "edit".
From there, you can click "New" to add a new directory to the path, and the directory you want to add is the directory containing all the missing libraries, aka `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.2\bin`

Then, close out of the environment variables page, _making sure to apply your changes_.
Lastly, _RESTART all your currently open terminals. This is because the changes will not take place unless the terminal was created after you added the new path directory._

# Install CUDNN

Now, you may get an error similar to this:

```
2021-08-08 17:20:10.558894: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cudnn64_8.dll'; dlerror: cudnn64_8.dll not found
2021-08-08 17:20:10.559029: W tensorflow/core/common_runtime/gpu/gpu_device.cc:1835] Cannot dlopen some GPU libraries. Please make sure the missing libraries mentioned above are installed properly if you would like to use GPU. Follow the guide at https://www.tensorflow.org/install/gpu for how to download and setup the required libraries for your platform.
Skipping registering GPU devices..
```

Now, it's only missing one cuda dll, an it's from CUDNN.
[You can find the most recent versions of CUDNN at this link.](https://developer.nvidia.com/rdp/cudnn-download)

NOTE: The site will prompt you to create an NVidia account and get a "Developer Program Membership".
Don't worry, this is super easy.

1. Create an account. (Or log in with google, or something)
2. Verify your email
3. Fill out your profile information. _Make sure to click the checkbox stating "Join the NVIDIA Developer Program to access downloads (like cuDNN), how-to videos, and more."_

Now, you can go to the downloads page and download cuDNN.
The version that I got (which worked) is _v8.2.2 for CUDA 11.4_.
I know, I didn't get CUDA Toolkit 11.4 (I got 11.2.2).
But, it still ended up working anyway!
If you want to match versions, please, feel free.

Once you downloaded the folder and extracted it into a new folder, place that folder somewhere it'll be safe.
I just put it next to the CUDA toolkit, so my directory structure looked like this:

```
...
NVIDIA GPU Computing Toolkit
| - CUDA
  | - v11.2
  | | - bin/
  | ...
  | - cudnn-11.4-windows-x64-v8.2.2.26
    | - cuda
      | - bin/
      | - include/
      | - lib/
      | - NVIDIA_SLA_cuDNN_Support.txt
```

And, of course, we need to add this directory to the path environment variable.
Open up the environment variables, and add the `bin` directory to the path.

For me, it was the following:
`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\cudnn-11.4-windows-x64-v8.2.2.26\cuda\bin`

Now, since the `cudnn64_8.dll` file is in the path, we should be done with annoying errors!

# Things to try out

An interesting project that I just did recently was training a GAN on the MNIST dataset.
[Here is an amazing tutorial written by Jason Brownlee](https://machinelearningmastery.com/how-to-develop-a-generative-adversarial-network-for-an-mnist-handwritten-digits-from-scratch-in-keras/) which I highly recommend.

Fixing these GPU CUDA errors allowed python to fully utilize all the available computing resources I have.
This significantly cut down training times.
Previously, each epoch took about 5 minutes to train, whereas with the GPU acceleration, it only takes about 30 seconds.
I was able to train 100 epochs in less than an hour, thanks to these CUDA libraries!

If you want to play around with the model that I trained, [here is a github repository for it][1].
Just clone the repository, and run the python file.
The model is stored in the `.h5` file.

I added some sliders so you can easily change the latent vector and see the live output.
Unfortunately, matplotlib has awful UI documentation, so about 70 of the sliders are off of the page.
Maybe someone can clean it up! (Just make a pull request)

[1]: https://github.com/eoriont/gan_mnist_playground_boilerplate
