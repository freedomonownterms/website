---
title: "How AI Is Changing Weather Forecasting (and What It Means for You)"
description: AI weather models from Google DeepMind, Microsoft, Huawei and Europe's ECMWF now rival traditional forecasts and run in minutes. Here's how they work, where they still fall short, and how to use AI with your own forecast.
date: 2026-11-03
category: Explainers
readTime: 5 min read
---

For decades, weather forecasts have come from giant physics simulations running on some of the world's most powerful supercomputers. In just a few years, a new approach has caught up: **AI models that learn the weather from history** and can produce a global forecast in minutes on a single machine.

Here's what's changed, what it means for the forecast on your phone, and how you can use AI to make better everyday decisions with the weather.

## How traditional forecasts work

Traditional forecasting, called **numerical weather prediction**, starts with millions of observations from weather stations, balloons, ships, aircraft and satellites. Supercomputers then solve the equations of physics that describe how the atmosphere moves, heats, cools and rains, stepping forward in time to predict what happens next.

It works remarkably well, and it has improved steadily for decades. But it's expensive: each forecast needs enormous computing power and time.

## How AI forecasts work

AI weather models take a different route. Instead of solving physics equations directly, they **learn patterns from decades of past weather data**, mainly a huge historical record of the global atmosphere produced by Europe's weather centre, ECMWF. Given the state of the atmosphere now, the model predicts what it's likely to look like a few hours later, then repeats that step to look days ahead.

Once trained, these models are fast. A forecast that takes a supercomputer a long time can be produced by an AI model in minutes.

## The models making headlines

- **Pangu-Weather (Huawei)**, published in *Nature* in 2023, was one of the first AI models shown to match leading traditional forecasts on key measures.
- **GraphCast (Google DeepMind)**, published in *Science* in 2023, outperformed the leading traditional system on most of the targets it was tested on for forecasts up to 10 days ahead.
- **GenCast (Google DeepMind)**, published in *Nature* in late 2024, produces **ensemble forecasts**: many possible versions of the future, which show how likely different outcomes are. Google DeepMind reported it beat Europe's top ensemble system on the large majority of targets tested.
- **Aurora (Microsoft)**, published in *Nature* in 2025, is a large "foundation model" trained on many kinds of Earth data, which can also be adapted for things like air quality and ocean waves.
- **AIFS (ECMWF)**: in February 2025, the European Centre for Medium-Range Weather Forecasts put its own AI model into **operational use** alongside its traditional system, a major milestone for AI in official forecasting.

National weather services and companies around the world are now testing and adopting AI models, usually **alongside** physics-based ones rather than replacing them.

## What AI forecasts are good at

- **Speed and cost:** forecasts in minutes, using far less energy than a full supercomputer run.
- **Large-scale patterns:** many AI models do well at predicting the paths of storms and big weather systems days ahead.
- **More scenarios:** because they're cheap to run, AI models can generate many possible futures, helping forecasters judge uncertainty.

## Where AI still falls short

- **Learning from the past:** AI models learn from historical weather. Rare, record-breaking events, which climate change is making more common, can be harder for them.
- **Small-scale detail:** local features like individual thunderstorms, sea breezes or mountain weather can be blurred.
- **They still depend on observations:** AI models need the same global network of weather observations to know what's happening now. Physics-based systems are also still used to create the starting conditions.
- **Trust and explanation:** forecasters need to understand *why* a model predicts something, especially for warnings that affect safety.

The likely future is a **combination**: AI and physics-based models working together, with human forecasters interpreting the results.

## What this means for you

You probably won't notice a dramatic overnight change. Instead, expect forecasts to keep getting gradually better, especially:

- **Earlier warnings** for big storms, heatwaves and heavy rain
- **Better forecasts in more countries**, because AI models are cheaper to run and some are openly available
- **More "chance of" forecasts** that show uncertainty, not just a single answer

**For severe weather, always follow your national weather service.** Official warnings combine the best models with expert judgement and local knowledge.

## Use AI with your own forecast

AI isn't only changing how forecasts are made. You can also use AI assistants like ChatGPT or Claude to **turn a forecast into decisions**: what to wear, when to go for a run, which day suits a picnic, or when to water the garden.

The trick is to give the AI the **real forecast**. Chat assistants don't always know today's weather where you are. Our free **[AI Weather Planner](/weather/)** does this for you: search any city, see the 7-day forecast, and open ready-made prompts in ChatGPT or Claude with the forecast already included.

## Frequently asked questions

**Are AI weather forecasts more accurate than traditional ones?**
On many standard measures, the best AI models now match or beat traditional models for forecasts several days ahead. But they have weaknesses, especially with small-scale and extreme events, which is why they're used alongside physics-based models.

**Is the forecast on my phone made by AI?**
Possibly in part. Weather apps get data from national weather services and private companies, and many now blend several models, increasingly including AI ones.

**Can ChatGPT tell me the weather?**
Some AI assistants can search the web for current weather, but results vary. For reliable advice, paste in a forecast from a trusted source, or use our [AI Weather Planner](/weather/).

## Keep learning

Learn how to [write better AI prompts](/guides/how-to-write-better-ai-prompts/), try the [AI Prompt Library](/prompts/), or browse our [AI tools directory](/tools/).
