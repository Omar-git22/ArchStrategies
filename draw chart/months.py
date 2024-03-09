import matplotlib.pyplot as plt
import numpy as np

# Data
months = np.arange(1, 13)
arc_lengths = np.ones(12)  # You can modify the lengths as needed

# Convert months to radians
theta = np.radians(np.linspace(0, 360, 12, endpoint=False))

# Plotting
fig, ax = plt.subplots(subplot_kw={"projection": "polar"})
ax.set_theta_zero_location("N")
ax.set_theta_direction(-1)

bar_width = np.radians(30)  # Adjust the width of each bar as needed

# Plot bars manually adjusting positions
for month, angle, length in zip(months, theta, arc_lengths):
    ax.bar(angle, length, width=bar_width, align="center", alpha=0.7)

# Setting month labels between arcs
label_positions = theta + bar_width / 2
ax.set_xticks(label_positions)
ax.set_xticklabels(
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
)

plt.show()
