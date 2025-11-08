+++
title = "Why Temporal Difference Prediction is superior?"
description = "We discussed TD learning in reinforcement learning and the advantages of using it."
date = 2025-10-31
updated = 2025-10-31
draft = true

[taxonomies]
categories = ["2025"]
tags = ["reinforcement learning","ai"]

[extra]
lang = "en"
toc = true
comment = true
copy = false
outdate_alert = false
outdate_alert_days = 120
math = true
mermaid = false
featured = false
reaction = true
+++

As one of the experience-centric learning methods, Monte Carlo has been historically a logical way to explore all the possible states and learn policy from there. However, in many real world application, it is computationally expensive to traverse all states. For example, solving the game of backagmmon alone have almost $$10^20$$ states, it would be taking thousands of yaer on today's fastest computers to solve the Bellman equation for $$v_*$$, same as finding $$q_*$$. 

Therefore, *Temporal Difference* (TD) learning is here to solve this problem. The difference between them is Monte Carlo methods wait until the return of time step $$t$$ is known, only then use that return as a target for $$V(S_t)$$. A simple Monte Carlo method is

$$V(S_t) \leftarrow V(S_t)+\alpha[G_t - V(S_t)],$$

where $$G_t$$ is the actual return at the time $$t$$, and $$\alpha$$ is a constant step-size parameter. This clearly shows that we must wait until the end of the episode only to determine the increment to $$V(S_t)$$ as only $$G_t = R_{t+1} + R_{t+2} + R_{t+3} + \cdots + R_{T}$$ is known. The brilliance of TD methods are shown here, as TD methods only need to wait until the next time step. A simple TD method is

$$V(S_t) \leftarrow V(S_t) + \alpha[R_{t+1} + \gamma V(S_{t+1}-V(S_t))]$$.

Therefore, the target for the TD update is $$R_{t+1} + \gamma V(S_{t+1})$$, which only need the subsequent information. We call this as *TD(0)*, or *one-step TD*, which is special case in TD($$\lambda$$) and $$n$$-step TD methods.

