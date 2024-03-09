import matplotlib.pyplot as plt
import numpy as np

# Assuming you have the effectiveness data for each strategy and each month
# Replace these lists with your actual data
cooling_ventilation_data = [0.8, 0.5, 0.9, 0.3, 0.7, 0.2, 0.6, 0.8, 0.4, 0.9, 0.5, 0.7]
comfort_ventilation_data = [0.7, 0.4, 0.8, 0.2, 0.6, 0.3, 0.5, 0.7, 0.3, 0.8, 0.4, 0.6]
high_mass_data = [0.9, 0.6, 0.8, 0.4, 0.7, 0.5, 0.6, 0.9, 0.7, 0.8, 0.6, 0.8]
high_mass_night_ventilation_data = [
    0.6,
    0.3,
    0.7,
    0.2,
    0.5,
    0.2,
    0.4,
    0.6,
    0.3,
    0.7,
    0.4,
    0.5,
]
evaporative_cooling_data = [0.8, 0.5, 0.9, 0.3, 0.7, 0.2, 0.6, 0.8, 0.4, 0.9, 0.5, 0.7]

months = np.arange(1, 13)
strategies = [
    cooling_ventilation_data,
    comfort_ventilation_data,
    high_mass_data,
    high_mass_night_ventilation_data,
    evaporative_cooling_data,
]
strategy_labels = [
    "Cooling Ventilation",
    "Comfort Ventilation",
    "High Mass",
    "High Mass with Night Ventilation",
    "Evaporative Cooling",
]

# Plotting the polar plot with filled arcs
fig, ax = plt.subplots(subplot_kw={"projection": "polar"})
ax.set_theta_offset((np.pi / 2) - np.radians(15))
ax.set_theta_direction(-1)
ax.set_rlabel_position(0)

for i, strategy_data in enumerate(strategies):
    # Fill the area under the curve to create the arc
    ax.fill_between(
        np.radians(months * 360 / 12),
        0,
        strategy_data,
        label=strategy_labels[i],
        alpha=0.7,
    )

ax.set_xticks(np.radians(np.arange(0, 360, 360 / 12)))
ax.set_xticklabels(
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
)

ax.legend(loc="upper right", bbox_to_anchor=(1.1, 1.1))

plt.show()
