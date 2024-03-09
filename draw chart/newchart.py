# Import libraries
import matplotlib.pyplot as plt
import numpy as np

# Define data
months = [
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
]
categories = [
    "Summer Not Effective",
    "Effective Avg., Not Hot Day",
    "Effective Avg., Hot Day",
    "Effective Hot, Not Avg Day",
    "Winter Cooling NR",
]
colors = ["red", "orange", "yellow", "green", "blue"]
data = np.array(
    [
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
        [0, 0, 0, 0, 100],
    ]
)
# This is dummy data, you need to replace it with your own data

# Define angles
angles = np.linspace(0, 2 * np.pi, len(months), endpoint=False)
angles = np.concatenate((angles, [angles[0]]))

# Plot figure
fig, ax = plt.subplots(figsize=(8, 8), subplot_kw=dict(polar=True))
for i in range(len(categories)):
    # Plot each category as a separate bar
    data_i = np.concatenate((data[:, i], [data[0, i]]))
    ax.bar(angles, data_i, width=0.1, color=colors[i], label=categories[i])
ax.set_theta_offset(np.pi / 2)  # Rotate the graph
ax.set_theta_direction(-1)  # Make the graph clockwise
ax.set_thetagrids(
    angles[:-1] * 180 / np.pi, months
)  # Use angles[:-1] to match the number of tick labels
ax.set_rlabel_position(0)  # Set the position of the radial labels
ax.set_ylim(0, 100)  # Set the range of the radial axis
ax.legend(
    loc="upper right", bbox_to_anchor=(1.3, 1.1)
)  # Set the legend position and size
plt.title("Effectiveness of Cooling in Beirut, Lebanon")  # Set the title
plt.show()  # Show the graph
