import numpy as np
import matplotlib.pyplot as plt

# Sample wind data (directions in degrees)
wind_directions = np.random.randint(0, 360, 100)
wind_speeds = np.random.uniform(0, 10, 100)
# wind_speeds = np.full(100, 20)

# Create a wind rose diagram
fig, ax = plt.subplots(subplot_kw=dict(projection="polar"))
ax.set_theta_offset((np.pi / 2) - np.radians(15))
ax.set_theta_direction(-1)
# ax.set_rlabel_position(0)

# Convert wind directions to radians
wind_directions_rad = np.radians(wind_directions)

# Plot the wind rose
ax.hist(
    wind_directions_rad,
    bins=np.arange(0, 2 * np.pi, 2 * np.pi / 12),
    weights=wind_speeds,
    color="skyblue",
    edgecolor="black",
)

# Customize the wind rose
ax.set_xticks(np.arange(0, 2 * np.pi, 2 * np.pi / 12))
ax.set_xticklabels(
    [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    rotation=45,
    ha="left",
)
ax.set_yticklabels([""])  # Hide radial labels: add the comfort % here

# Show the wind rose
plt.show()
