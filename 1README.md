# Process Automation 
The code here is heavily based on Andrew Marsh's Psychrometric Chart (https://drajmarsh.bitbucket.io/psychro-chart2d.html).

# Main Reference Document
[Procedure for the strategies on the Psych charts_v2.docx.pdf](Procedure%20for%20the%20strategies%20on%20the%20Psych%20charts_v2.docx.pdf)

# Constraints for Zones
Prerequisites:
- e = Math.round((17.6 + .31 * meanOutdoorTemperature - 3.5) / 0.1)
    - Neutrality temperature for 90% acceptability: (Tn = 17.6 + 0.31 * To.av)?
      Constraints to check if a point falls within the comfort zone:
- if
    - (0.01 * relativeHumidity * saturationHumidityRatio) <= 16
    - relativeHumidity >= 20
    - relativeHumidity <= 80
    - dBTemperature >= e
    - dBTemperature <= e + 7
    - dBTemperature <= e + 5 OR relativeHumidity <= 50
      point is considered in comfort zone points
- else if (relativeHumidity <= |e + 5 - dBTemperature| / 2 * 30)
  point is considered in comfort zone points

# Check the following link for some extra documents
https://drive.google.com/drive/folders/1-kOcQXFjzW2XcrBVugCYu7zCabpmMELk?usp=drive_link
