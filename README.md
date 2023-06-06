# GUI with OpenMCT and ROS2

Before getting started with the GUI, please note that in order for the GUI to interact with the Sky360 Simpletracker ROS2 environment, the Simple tracker repo must be launched in a separate Docker container. That repo can be found [here](https://github.com/Sky360-Repository/simpletracker-ros2-ws).

## Instructions

1. Clone the GUI repo:

```bash
git clone https://github.com/Sky360-Repository/gui-openmct/
```

2. Navigate into the cloned directory:

```bash
cd gui-openmct
```

3. Open it in Visual Studio Code:

```bash
code .
```

4. Start the Docker application, then reopen the Visual Studio Code workspace in a Docker Container. Make sure you have the Visual Studio Code Docker extension installed.

5. After the Docker container is open, the GUI will be accessible in a web browser on port 8080. You can access it by navigating to http://localhost:8080

6. You can now import links to pages to interact with the ROS2 system. In the newly opened browser window with OpenMCT, locate the menu on the left which includes folders. Find the folder named "My Items" and right click on it. Select the "Import JSON" option and select the file named "Import1.json" which will be located in the gui-openmct folder. Then do the same for the file named "Import2.json."

**Note:** All other Sky360GUI Repos are obsolete although some code will be reused.