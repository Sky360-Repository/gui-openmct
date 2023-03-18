# gui-openmct
GUI with OpenMCT and ROS2

** All other Sky360GUI Repos are obsolete although some code will be reused. **

Docker build is pending. In the meantime, you can install all necessary software on a linux ubuntu environment.

1. Install Python
2. Install ROS2 and all required dependencies
3. Install Node.js and NPM


ROSBRIDGE
ROS2 sends data in DDS packets. The web browser consumes data via TCP packets. 
Rosbridge will transform DDS to TCP so that the GUI can use the data.
Ros2Bridge is bundled in the Rosbridge_Suite. https://github.com/RobotWebTools/rosbridge_suite

